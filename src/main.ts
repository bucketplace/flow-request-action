import * as core from '@actions/core'
import {fetchDeliveryFlow} from './delivery-flow'

async function run(): Promise<void> {
  try {
    const application: string = core.getInput('application', {required: true})
    const flow: string = core.getInput('flow', {required: true})
    const version: string = core.getInput('version', {required: true})
    const branch: string = core.getInput('branch')
    const image: string = core.getInput('image')
    const imageTag: string = core.getInput('image-tag')
    const gitSha: string = core.getInput('git-sha')

    core.debug(
      `Request delivery ${flow} flow for application ${application} version ${version}`
    )
    await fetchDeliveryFlow(application, flow, {
      version,
      branch: branch ? branch : undefined,
      image: image ? image : undefined,
      image_tag: imageTag ? imageTag : undefined,
      git_sha: gitSha ? gitSha : undefined
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
