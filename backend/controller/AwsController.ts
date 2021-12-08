import S3 from 'aws-sdk/clients/s3';
import { AWSError, SharedIniFileCredentials } from 'aws-sdk';

const credentials = new SharedIniFileCredentials({ profile: 'agcoin' });

export const s3 = new S3({ credentials });

export function deleteObject(objectName: string, callback: (err: AWSError, data: S3.DeleteObjectOutput) => void) {
    return s3.deleteObject({ Bucket: 'agcoin', Key: `user-avatars/${objectName}`}, callback);
}

