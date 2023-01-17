"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../../../app");
const supertest_1 = __importDefault(require("supertest"));
describe("Create User Controller", async () => {
    it("should be able to create a new user", async () => {
        const response = await (await (0, supertest_1.default)(app_1.app).post("/users")).body({
            name: "Jane Supestest",
            email: "jane@gamil.com",
            password: "123456",
            confirmPassword: "123456",
            avatar: "teste",
            isAdmin: false,
            departament: "development"
        });
        expect(response.status).toBe(201);
    });
});
