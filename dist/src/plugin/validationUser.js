"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const zod_1 = require("zod");
exports.addUser = zod_1.z.object({
    name: zod_1.z.string().min(3),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    confirmPassword: zod_1.z.string().min(6),
    isAdmin: zod_1.z.boolean(),
    departament: zod_1.z.enum(['development', 'IA', 'RPA'])
});
