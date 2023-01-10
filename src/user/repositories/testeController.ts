// import jwt from "@fastify/jwt"
// import { FastifyReply, FastifyRequest } from "fastify"
// import { BadRequestError } from "helper/errors"
// import { UsersRepository } from "./repositories/usersRepositories"

// export class UserController {
// 	async create(req: any, reply:any) {
// 		const { name, email, password } = req.body

// 		const userExists = 
// 				if (userExists) {
// 			throw new BadRequestError('E-mail já existe')
// 		}

// 		const hashPassword = await crypto.hash(password, 10)

// 		const newUser = usersRepository.create({
// 			name,
// 			email,
// 			password: hashPassword,
// 		})

// 		await usersRepository.save(newUser)

// 		const { password: _, ...user } = newUser

// 		return reply.status(201).send(user)
// 	}

// 	async login(req: any, reply: FastifyReply) {
// 		const { email, password } = req.body

// 		const user = await usersRepository.findOneBy({ email })

// 		if (!user) {
// 			throw new BadRequestError('E-mail ou senha inválidos')
// 		}

// 		const verifyPass = await bcrypt.compare(password, user.password)

// 		if (!verifyPass) {
// 			throw new BadRequestError('E-mail ou senha inválidos')
// 		}

// 		const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', {
// 			expiresIn: '8h',
// 		})

// 		const { password: _, ...userLogin } = user

// 		return reply.send({
// 			user: userLogin,
// 			token: token,
// 		})
// 	}

// 	async getProfile(req: FastifyRequest, reply: FastifyReply) {
// 		return reply.send(req.user)
// 	}
// }