import gulp from 'gulp'
import fs from 'fs'
import { Storage } from '@google-cloud/storage'
import path from 'path'

const bucketNameForDev = 'a-dev-apps'
const projectIdDev = 'a-alpha-312605'
const keyFilenameDev = 'dev.json'

let projectName = 'app/smart-schedule'

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
  setTimeout(function () {
    findUploadFullPaths(`./dist`).then((paths) => {
      paths.map((path) => {
        storage.bucket(gcsOptions.bucket).upload(
          path,
          {
            destination: `${projectName}${path.replace('dist', '')}`,
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
  }, 1000)
}

gulp.task('uploadGcsDev', gulp.series('package', uploadToGCS.bind(uploadToGCS, gcsDevOptions)))
