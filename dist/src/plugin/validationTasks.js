"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = void 0;
const zod_1 = require("zod");
exports.addTask = zod_1.z.object({
    name: zod_1.z.string().min(3),
    user_id: zod_1.z.string().uuid(),
    description: zod_1.z.string().min(10),
    done: zod_1.z.boolean(),
    total: zod_1.z.number(),
});
