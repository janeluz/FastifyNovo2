import { z } from "zod";
export declare const addTask: z.ZodObject<{
    name: z.ZodString;
    user_id: z.ZodString;
    description: z.ZodString;
    done: z.ZodBoolean;
    total: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    user_id: string;
    done: boolean;
    description: string;
    total: number;
}, {
    name: string;
    user_id: string;
    done: boolean;
    description: string;
    total: number;
}>;
