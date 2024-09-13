export interface ListUsers {
    id: number;
    username: string;
    email: string;
    create_time: Date;
    dni: string;
    usuarios_roles: UsuariosRoles[]
}

export interface UsuariosRoles {
    id: number;
    idUsuario: number;
    idRol: number;
    rol: Rol;
}

export interface Rol {
    id: number;
    string: string;
    permisos_roles: PermisosRoles[];
}

export interface PermisosRoles {
    id: number;
    idPermisos: number;
    idRol: number;
    permiso: Permiso[];
}

export interface Permiso {
    id: number;
    nombre: string;
}