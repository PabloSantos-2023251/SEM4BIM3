import { BaseUsuario } from './BaseUsuario';

export class Cliente extends BaseUsuario {
  constructor(
    id: number,
    nombre: string,
    email: string
  ) {
    super(id, nombre, email);
  }

  mostrarinfo(): string {
    return `[Cliente] ID: ${this.id} | Nombre: ${this.nombre} | Email: ${this.email}`;
  }
}