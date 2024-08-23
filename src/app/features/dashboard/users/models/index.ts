export type Role = 'ADMIN' | 'USUARIO';

export interface User {
    email: string;
    password: string;
    rol: Role;
    id: string;
    firstName: string;
    lastName: string;
    token: string;
}