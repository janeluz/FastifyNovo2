"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_multer_1 = __importDefault(require("fastify-multer"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const tmpFolder = path_1.default.resolve(__dirname, '..', '..', 'tmp');
exports.default = {
    tmpFolder,
    uploadsFolder: path_1.default.resolve(tmpFolder, 'uploads'),
    storage: fastify_multer_1.default.diskStorage({
        destination: tmpFolder,
        filename(request, file, callback) {
            const fileHash = crypto_1.default.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;
            return callback(null, fileName);
        },
    }),
};
