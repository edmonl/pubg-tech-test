import makeQueue from './index'

// A contrived shared reources that may be used by all job runs.
let sharedResource = 0

async function job (config: number, seconds: number): Promise<number> {
  console.log('Job', config, 'starts')

  // The job starts to use the shared resource.
  sharedResource = config

  if (seconds <= 0) {
    console.log('Job', config, 'finishes')
    return config
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      // Check if shared resource is exclusively used by the currently running job. 
      if (sharedResource !== config) {
        console.error(
          'Shared resource should only be used by job',
          config,
          'but was changed by strangers!',
        )
      }

      console.log('Job', config, 'finishes')
      resolve(config)
    }, seconds * 1000)
  })
}

const queuedJob = makeQueue(job)
const result0 = queuedJob(0, 1)
const result1 = queuedJob(1, 0)
result0.then((r) => console.log('Job 0 returns', r))
result1.then((r) => console.log('Job 1 returns', r))

// Expected output:
// Job 0 starts
// Job 0 finishes
// Job 0 returns 0
// Job 1 starts
// Job 1 finishes
// Job 1 returns 1
