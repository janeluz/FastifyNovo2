/// <reference types="node" />
import { FastifyReply } from "fastify";
import { ApiError } from "helper/errors";
export declare const errorplugin: (error: Error & Partial<ApiError>, req: Request, reply: FastifyReply) => FastifyReply<import("fastify").RawServerDefault, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").RouteGenericInterface, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
