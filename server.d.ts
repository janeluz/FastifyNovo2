declare module 'fastify'{
    interface FastifyInstanceRequest {
     
          }
    interface Fastify {
        db: any;
    }
    
    
    interface FastifyRequest {
        user: {
            id:any;
            file:any;
            filename:any
        }
        authorization:string;
       
       
    
}
type fastifyJwt = {
    jwt: any;
    sign: any;
}

}
