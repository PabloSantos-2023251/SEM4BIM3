import { BaseUsuario } from '../models/BaseUsuario';
import { Cliente } from '../models/Cliente';
import { Administrador } from '../models/Administrador';

export const usuario: BaseUsuario[] = [
  new Cliente(1, 'Carlos Mendoza', 'carlos@mail.com'),
  new Cliente(2, 'María López', 'maria@mail.com'),
  new Administrador(3, 'Ana Martínez', 'ana@sistema.com', 'SuperAdmin'),
  new Administrador(4, 'Pedro Gómez', 'pedro@sistema.com', 'Moderador')
];