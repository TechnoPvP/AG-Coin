import multer, { FileFilterCallback } from 'multer';
import multerS3 from 'multer-s3';
import { Request } from 'express';
import { s3 } from './AwsController';


const allowedImageTypes = ['image/png', 'image/jpeg', 'image/webp'];

const avatarFolder = 'user-avatars/';
const bucketURL = `https://agcoin.s3.amazonaws.com/${avatarFolder}`;


function fileFilter(req: Request, file: Express.Multer.File, callback: FileFilterCallback) {
    if (file.size / 1000 > 300) return callback(new Error(`File to large to upload ${file.size}bytes`))

    if (!allowedImageTypes.includes(file.mimetype)) return callback(null, false);

    callback(null, true);
}

const storage = multerS3({
    s3: s3,
    bucket: 'agcoin',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req: Request, file, cb) {
        cb(null, { metaName: 'meta is this', other: 'Othern meta stuff' });
    },
    key: async function (req, file, cb) {
        const fileType = file.mimetype.split('/')[1];
        // const parsedUsername = `${new Date().toISOString()}-${req.session.user?.first_name}_${req.session.user?.last_name}`;
        const avatarName = `${req.session.user?.id}`;

        const fileName = avatarFolder + avatarName;

        cb(null, fileName)
    }
})

export const upload = multer({ storage, fileFilter });