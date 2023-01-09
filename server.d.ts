declare module 'fastify'{
    interface FastifyInstanceRequest {
        authorization: any;
        user: any;

    }
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
