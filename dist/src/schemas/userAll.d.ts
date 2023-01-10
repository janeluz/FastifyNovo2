declare const allUsers: {
    response: {
        200: {
            type: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                        format: string;
                    };
                    name: {
                        type: string;
                    };
                    email: {
                        type: string;
                    };
                    password: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
};
declare const addUser: {
    body: {
        type: string;
        required: string[];
        properties: {
            name: {
                type: string;
            };
            email: {
                type: string;
            };
            password: {
                type: string;
            };
            confirmPassword: {
                type: string;
            };
            avatar: {
                type: string;
            };
            isAdmin: {
                type: string;
            };
            departament: {
                type: string;
            };
        };
    };
    response: {
        201: {
            type: string;
            properties: {
                created: {
                    type: string;
                };
            };
        };
    };
};
export { allUsers, addUser };
