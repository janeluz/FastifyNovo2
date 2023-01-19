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
      console.log('testeFileUpdloa',file)
      const fileName = `${fileHash}-${file.originalname}`;
      console.log('testemulterrr', fileName)
      console.log('testemulterrr222', null,fileName)
      return callback(null,fileName);
      
    },
  }),
}
  }
}

// import Fastify from 'fastify';
// import { Multipart } from '@fastify/multipart';
// import fs from 'fs';
// import util from 'util'
// import { pipeline } from 'stream';

// const pump = util.promisify(pipeline)

