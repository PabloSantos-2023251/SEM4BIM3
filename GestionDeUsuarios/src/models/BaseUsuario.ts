import { Usuario } from "./Usuario";

export abstract class BaseUsuario implements Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public email: string,
    public activo: boolean = true
  ) {}

  abstract mostrarinfo(): string;
}