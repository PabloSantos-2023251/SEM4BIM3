import { rl } from "../utils/readline";
import { 
  listarUsuarios, 
  buscarUsuario, 
  crearCliente, 
  crearAdministrador, 
  borrarUsuario, 
  editarUsuario 
} from "../services/usuarioService";
import { usuario } from "../data/usuario";
import { Administrador } from "../models/Administrador";

export async function menu(): Promise<void> {
    console.log("\n--------MENU DE USUARIOS--------");
    console.log("1. Listar Todos los Usuarios");
    console.log("2. Buscar Usuario por ID");
    console.log("3: Agregar Cliente");
    console.log("4: Agregar Administrador");
    console.log("5. Eliminar Usuario");
    console.log("6. Editar Usuario");
    console.log("7: Salir");

    const opcion = await rl.question("Seleccione una opcion: ");

    switch (opcion.trim()) {
        case "1":
            console.clear();
            console.log(JSON.stringify(listarUsuarios(), null, 2));
            break;

        case "2": {
            console.clear();
            const id = await rl.question("Ingrese su id: ");
            const encontrado = buscarUsuario(Number(id));
            if (encontrado) {
                console.log(encontrado.mostrarinfo());
            } else {
                console.log("Usuario no encontrado");
            }
            break;
        }

        case "3": {
            console.clear();
            const id = await rl.question("Ingrese el id: ");
            const nombre = await rl.question("Ingrese el nombre: ");
            const email = await rl.question("Ingrese el email: ");
            
            const cliente = crearCliente(Number(id), nombre, email);
            if (cliente) usuario.push(cliente);
            break;
        }

        case "4": {
            console.clear();
            const id = await rl.question("Ingrese el id: ");
            const nombre = await rl.question("Ingrese el nombre: ");
            const email = await rl.question("Ingrese el email: ");
            const nivelAcceso = await rl.question("Ingrese el nivel de acceso: ");
            
            const admin = crearAdministrador(Number(id), nombre, email, nivelAcceso);
            if (admin) usuario.push(admin);
            break;
        }

        case "5": {
            console.clear();
            const id = await rl.question("Ingrese el id del usuario a eliminar: ");
            borrarUsuario(Number(id));
            break;
        }

        case "6": {
            console.clear();
            const id = await rl.question("Ingrese el id del usuario a editar: ");
            const existente = buscarUsuario(Number(id));
            
            if (!existente) {
                console.log("Usuario no encontrado");
                break;
            }

            const nombre = await rl.question("Ingrese el nuevo nombre (dejar vacio para no cambiar): ");
            const email = await rl.question("Ingrese el nuevo email (dejar vacio para no cambiar): ");
            
            let nivelAcceso = "";
            if (existente instanceof Administrador) {
                nivelAcceso = await rl.question("Ingrese el nuevo nivel de acceso (dejar vacio para no cambiar): ");
            }

            const nuevosDatos: { nombre?: string, email?: string, nivelAcceso?: string } = {};
            if (nombre.trim() !== "") nuevosDatos.nombre = nombre;
            if (email.trim() !== "") nuevosDatos.email = email;
            if (nivelAcceso.trim() !== "") nuevosDatos.nivelAcceso = nivelAcceso;

            const usuarioEditado = editarUsuario(Number(id), nuevosDatos);
            if (usuarioEditado) {
                console.log("Usuario editado con exito:", usuarioEditado.mostrarinfo());
            }
            break;
        }

        case "7":
            console.clear();
            console.log("Saliendo del sistema...");
            rl.close();
            return; 

        default:
            console.clear();
            console.log("Opcion no disponible");
            break;
    }

    await menu();
}