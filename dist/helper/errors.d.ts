export declare class ApiError extends Error {
    readonly statusCode: number;
    static message: string;
    constructor(message: string, statusCode: number);
}
export declare class BadRequestError extends ApiError {
    constructor(message: string);
}
export declare class NotFoundError extends ApiError {
    constructor(message: string);
}
export declare class UnauthorizedError extends ApiError {
    constructor(message: string);
}
