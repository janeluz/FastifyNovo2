import fp from 'fastify-plugin';
import fastifyjwt from '@fastify/jwt';



async function authenticate(app:any, opts:any, done:any) {
    app.register(fastifyjwt, {
        secret: process.env.JWT_SECRET,
        sign: {
            expiresIn: '1h'
        }
    })
    
    app.decorate('authenticate', async(request:any, reply:any) => {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.send(err) 
        }
    })
    done()
    
}

export default fp(authenticate);