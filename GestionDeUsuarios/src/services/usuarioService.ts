import { BaseUsuario } from '../models/BaseUsuario';
import { Cliente } from '../models/Cliente';
import { Administrador } from '../models/Administrador';
import { usuario } from '../data/usuario';

export function listarUsuarios(): BaseUsuario[] {
  return usuario;
}

export function buscarUsuario(id: number): BaseUsuario | undefined {
  return usuario.find(u => u.id === id);
}

export function crearCliente(id: number, nombre: string, email: string): Cliente {
  return new Cliente(id, nombre, email);
}

export function crearAdministrador(id: number, nombre: string, email: string, nivelAcceso: string): Administrador {
  return new Administrador(id, nombre, email, nivelAcceso);
}

export function borrarUsuario(id: number): void {
  const index = usuario.findIndex(u => u.id === id);
  if (index !== -1) {
    usuario.splice(index, 1);
    console.log("Usuario eliminado con exito");
  } else {
    console.log("Usuario no encontrado");
  }
}

export function editarUsuario(id: number, nuevosDatos: { nombre?: string, email?: string, nivelAcceso?: string }): BaseUsuario | undefined {
  const usuario = buscarUsuario(id);
  if (usuario) {
    if (nuevosDatos.nombre) usuario.nombre = nuevosDatos.nombre;
    if (nuevosDatos.email) usuario.email = nuevosDatos.email;
    if (usuario instanceof Administrador && nuevosDatos.nivelAcceso) {
      (usuario as any).nivelAcceso = nuevosDatos.nivelAcceso;
    }
    return usuario;
  }
  console.log("Usuario no encontrado");
  return undefined;
}