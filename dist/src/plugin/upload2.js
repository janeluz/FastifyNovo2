"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_multer_1 = __importDefault(require("fastify-multer"));
const path_1 = require("path");
const crypto_1 = __importDefault(require("crypto"));
exports.default = {
    upload(folder) {
        return {
            storage: fastify_multer_1.default.diskStorage({
                destination: (0, path_1.resolve)(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto_1.default.randomBytes(16).toString('hex');
                    console.log('teste', fileHash);
                    console.log('testeFileUpdloa', file);
                    const fileName = `${fileHash}-${file.originalname}`;
                    console.log('testemulterrr', fileName);
                    console.log('testemulterrr222', null, fileName);
                    return callback(null, fileName);
                },
            })
        };
    }
};
