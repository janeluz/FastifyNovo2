import { z } from "zod";
export declare const addUser: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
    isAdmin: z.ZodBoolean;
    departament: z.ZodEnum<["development", "IA", "RPA"]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    departament: "development" | "IA" | "RPA";
    confirmPassword: string;
}, {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    departament: "development" | "IA" | "RPA";
    confirmPassword: string;
}>;
