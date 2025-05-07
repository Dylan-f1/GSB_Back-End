const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')


const ID = process.env.AWS_ID
const SECRET = process.env.AWS_SECRET
const BUCKET_NAME = "gsb-14"

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
})

const uploadTS3 = async (file) => {
    try {
        const fileExtention = file.originalname.split('.').pop()
        const key = `${uuidv4()}.${fileExtention}`

        const params = {
            Bucket: BUCKET_NAME,
            Key: key,
            Body: file.buffer
        }

        s3.upload(params, function(uploadErr, uploadData) {
            if (uploadErr) {
                throw uploadErr
            }
            console.log('File uploaded successfully', uploadData.Location)
            return uploadData.Location
        })
    } catch (error) {
        console.error('Error uploading file to S3', error)
        throw new Error('Failed to upload file to S3')
    }
}

module.exports = { uploadTS3 }
