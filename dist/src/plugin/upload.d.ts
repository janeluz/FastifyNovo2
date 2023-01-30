/// <reference types="node" />
declare const _default: {
    tmpFolder: string;
    uploadsFolder: string;
    storage: {
        getFilename: import("fastify-multer/lib/interfaces").GetFileName;
        getDestination: import("fastify-multer/lib/interfaces").GetDestination;
        _handleFile(req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>, file: import("fastify-multer/lib/interfaces").File, cb: (error: Error | null, info?: Partial<import("fastify-multer/lib/interfaces").File> | undefined) => void): void;
        _removeFile(_req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>, file: import("fastify-multer/lib/interfaces").File, cb: (error?: Error | null | undefined) => void): void;
    };
};
export default _default;
