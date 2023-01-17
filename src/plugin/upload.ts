import multer from "fastify-multer";
import crypto from "crypto";
import { resolve } from "path";


export default {
  upload(folder:string){

    return{

  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', folder),
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString('hex');
      console.log('teste',fileHash)
      const fileName = `${fileHash}-${file.originalname}`;
      console.log('teste', fileName)

      return callback(null,fileName);
      
    },
  }),
}
  }
}
