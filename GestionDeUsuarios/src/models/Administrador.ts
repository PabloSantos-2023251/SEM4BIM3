import { BaseUsuario } from './BaseUsuario';

export class Administrador extends BaseUsuario {
  constructor(
    id: number,
    nombre: string,
    email: string,
    private nivelAcceso: string
  ) {
    super(id, nombre, email);
  }

  mostrarinfo(): string {
    return `[Admin] ID: ${this.id} | Nombre: ${this.nombre} | Email: ${this.email} | Rol: ${this.nivelAcceso}`;
  }
}