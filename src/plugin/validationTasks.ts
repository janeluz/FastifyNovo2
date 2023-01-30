import {z} from  "zod";


export const addTask = z.object({
    name: z.string().min(3),
    user_id:z.string().uuid(),
    description: z.string().min(10),
    done: z.boolean(),
    total: z.number(),
  });