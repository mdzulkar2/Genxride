declare module "auth"{
    interface User {
        id: string;
        name: string;
        email: string;
        role: "user" | "admin" | "driver";
    }
}