declare module 'fastify'{
    interface Fastify {
        db: any;
    }
    interface FastifyRequest {
        user: string;
    
}
type fastifyJwt = {
    jwt: any;
    sign: any;
}
}
