const { Actor, HttpAgent } = window.dfinity;

const canisterId = "uxrrr-q7777-77774-qaaaq-cai";
const agent = new HttpAgent({ host: "http://localhost:8081" });

const idlFactory =
  window.idlFactory ||
  (() => {
    console.error(
      "idlFactory no está definido. Asegúrate de generar las declaraciones con 'dfx generate'."
    );
    return {};
  })();

const actor = Actor.createActor(idlFactory, { agent, canisterId });

// Función para registrar un usuario
async function registrar() {
  try {
    const nombre = document.getElementById("txt_nombre").value;
    const email = document.getElementById("txt_email").value;
    if (!nombre || !email) {
      alert("Por favor, completa los campos de nombre y email.");
      return;
    }
    // Llamar al método del canister para registrar
    const idRegistro = await actor.registrarUsuario(nombre, email);
    document.getElementById("txt_idRegistro").value = idRegistro.toString();
    alert("Usuario registrado con ID: " + idRegistro);
  } catch (error) {
    console.error("Error al registrar:", error);
    alert("Error al registrar el usuario: " + error.message);
  }
}

// Función para consultar un usuario
async function consultar() {
  try {
    const idRegistro = document.getElementById("txt_idRegistro").value;
    if (!idRegistro) {
      alert("Por favor, ingresa un ID de registro.");
      return;
    }
    // Llamar al método del canister para consultar
    const usuario = await actor.consultarUsuario(BigInt(idRegistro));
    if (usuario) {
      document.getElementById("txt_nombre").value = usuario[0];
      document.getElementById("txt_email").value = usuario[1];
      alert("Usuario encontrado");
    } else {
      alert("Usuario no encontrado");
      document.getElementById("txt_nombre").value = "";
      document.getElementById("txt_email").value = "";
    }
  } catch (error) {
    console.error("Error al consultar:", error);
    alert("Error al consultar el usuario: " + error.message);
  }
}

// Función para editar un usuario
async function editar() {
  try {
    const idRegistro = document.getElementById("txt_idRegistro").value;
    const nombre = document.getElementById("txt_nombre").value;
    const email = document.getElementById("txt_email").value;
    if (!idRegistro || !nombre || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    // Llamar al método del canister para editar
    await actor.editarUsuario(BigInt(idRegistro), nombre, email);
    alert("Usuario actualizado correctamente");
  } catch (error) {
    console.error("Error al editar:", error);
    alert("Error al editar el usuario: " + error.message);
  }
}

// Función para eliminar un usuario
async function eliminar() {
  try {
    const idRegistro = document.getElementById("txt_idRegistro").value;
    if (!idRegistro) {
      alert("Por favor, ingresa un ID de registro.");
      return;
    }
    // Llamar al método del canister para eliminar
    await actor.eliminarUsuario(BigInt(idRegistro));
    document.getElementById("txt_idRegistro").value = "";
    document.getElementById("txt_nombre").value = "";
    document.getElementById("txt_email").value = "";
    alert("Usuario eliminado correctamente");
  } catch (error) {
    console.error("Error al eliminar:", error);
    alert("Error al eliminar el usuario: " + error.message);
  }
}
