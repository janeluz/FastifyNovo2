declare module 'fastify'{
    interface FastifyInstanceRequest {
     
          }
    interface Fastify {
        db: any;
    }
    interface FastifyRequest {
        user: {
            id:string;
            file:string;
        }
        authorization:string;
       
       
    
}
type fastifyJwt = {
    jwt: any;
    sign: any;
}

}
