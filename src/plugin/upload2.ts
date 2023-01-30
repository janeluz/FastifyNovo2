import multer from "fastify-multer";
import { resolve } from "path";
import crypto from 'crypto';

export default {
  upload(folder:string){

   return{

  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', folder),
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString('hex');
      console.log('teste',fileHash)
      console.log('testeFileUpdloa',file)
      const fileName = `${fileHash}-${file.originalname}`;
      console.log('testemulterrr', fileName)
      console.log('testemulterrr222', null,fileName)
      return callback(null,fileName)
     
      },
      
},
  )}
}
}
