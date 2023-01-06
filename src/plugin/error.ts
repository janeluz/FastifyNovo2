import { FastifyReply } from "fastify"
import { ApiError } from "helper/errors"


export const errorplugin= (
	error: Error & Partial<ApiError>,
	req: Request,
	reply: FastifyReply,
	
) => {
	const statusCode = error.statusCode ?? 500
	const message = error.statusCode ? error.message : 'Internal Server Error'
	return reply.status(statusCode).send({ message })
}