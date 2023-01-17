import {z} from  "zod";


export const addUser = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    isAdmin: z.boolean(),
    departament: z.enum(['development','IA','RPA'])
  });