import fs from 'node:fs'

const pathsToRemove = ['.nuxt', '.output']

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function rmWithRetry(path, retries = 10) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      fs.rmSync(path, { recursive: true, force: true })
      return
    } catch (error) {
      const code = error?.code
      const shouldRetry = code === 'EBUSY' || code === 'EPERM'

      if (!shouldRetry || attempt === retries) {
        console.error(
          `[clean] Failed to remove "${path}".\n` +
            `Close any running "nuxt preview" / dev servers using it, then rerun.\n` +
            `Error: ${code || error}`
        )
        process.exit(1)
      }

      await sleep(250)
    }
  }
}

for (const path of pathsToRemove) {
  await rmWithRetry(path)
}
