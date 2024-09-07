import gulp from 'gulp'
import fs from 'fs'
import { Storage } from '@google-cloud/storage'
import path from 'path'

const bucketNameForDev = 'aaron-app'
const projectIdDev = 'a-alpha-312605'
const keyFilenameDev = 'dev.json'

const gcsDevOptions = {
  projectId: projectIdDev,
  bucket: bucketNameForDev,
  keyFilename: keyFilenameDev,
  cacheControl: 'no-store, no-transform'
}

async function findUploadFullPaths(dir, uploadFullPaths = []) {
  const files = await fs.promises.readdir(dir)
  for (let file of files) {
    const fullPath = path.join(dir, file)
    const status = await fs.promises.stat(fullPath)
    if (status.isDirectory()) {
      uploadFullPaths = await findUploadFullPaths(fullPath, uploadFullPaths)
    } else {
      uploadFullPaths.push(fullPath)
    }
  }
  return uploadFullPaths
}

function uploadToGCS(gcsOptions, done) {
  let storage = new Storage({
    projectId: gcsOptions.projectId,
    keyFilename: gcsOptions.keyFilename
  })
  findUploadFullPaths(`./dist`).then((paths) => {
    paths.map((path) => {
      storage.bucket(gcsOptions.bucket).upload(
        path,
        {
          destination: `${path.replace('dist/', '')}`,
          metadata: {
            cacheControl: gcsOptions.cacheControl
          },
          public: true
        },
        (err, file) => {
          if (err) console.error(err)
          console.log(`Upload ${file.name} successfully`)
        }
      )
    })
    done()
  })
}

gulp.task('uploadGcs', uploadToGCS.bind(uploadToGCS, gcsDevOptions))
