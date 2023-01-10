import multer from "fastify-multer";
import crypto from "crypto";
import { resolve } from "path";



const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request: any, file: { originalname: any; }, callback: (arg0: null, arg1: string) => any) => {
      const fileHash = crypto.randomBytes(16).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
