"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_multer_1 = __importDefault(require("fastify-multer"));
const crypto_1 = __importDefault(require("crypto"));
const path_1 = require("path");
const tmpFolder = (0, path_1.resolve)(__dirname, '..', '..', 'tmp');
exports.default = {
    tmpFolder,
    storage: fastify_multer_1.default.diskStorage({
        destination: tmpFolder,
        filename: (request, file, callback) => {
            const fileHash = crypto_1.default.randomBytes(16).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;
            return callback(null, fileName);
        },
    }),
};
