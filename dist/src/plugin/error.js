"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorplugin = void 0;
const errorplugin = (error, req, reply) => {
    const statusCode = error.statusCode ?? 500;
    const message = error.statusCode ? error.message : 'Internal Server Error';
    return reply.status(statusCode).send({ message });
};
exports.errorplugin = errorplugin;
