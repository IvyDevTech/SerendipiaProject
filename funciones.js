document.addEventListener("DOMContentLoaded", () => {
  const { HttpAgent } = window.DfinityAgent;
  const { Actor } = window.DfinityAgent;

  const txtNombre = document.getElementById("txt_nombre");
  const txtTelefono = document.getElementById("txt_telefono");
  const txtCorreo = document.getElementById("txt_correo");
  const txtDireccion = document.getElementById("txt_direccion");
  const txtIdRegistro = document.getElementById("txt_idRegistro");

  const canisterId = "uxrrr-q7777-77774-qaaaq-cai";
  const agent = new HttpAgent({ host: "http://localhost:4943" });
  if (agent.isLocal()) {
    agent.fetchRootKey();
  }
  const contadorActor = Actor.createActor(idlFactory, { agent, canisterId });

  // Mensaje para validar campos
  function validarCampos() {
    Swal.fire({
      title: "Valida los campos marcados en rojo por favor",
      text: "",
      icon: "info",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "black",
    });
  }

  // Registrar
  document.addEventListener("DOMContentLoaded", () => {
    function registrarUsuario() {
      let bandera = true;

      // Validar campo nombre
      if (txtNombre.value.trim() === "") {
        bandera = false;
        txtNombre.style.border = "1px solid red";
      } else {
        txtNombre.style.border = "";
      }

      // Validar campo teléfono
      if (txtTelefono.value.trim() === "") {
        bandera = false;
        txtTelefono.style.border = "1px solid red";
      } else {
        txtTelefono.style.border = "";
      }

      // Validar campo correo
      if (txtCorreo.value.trim() === "") {
        bandera = false;
        txtCorreo.style.border = "1px solid red";
      } else {
        const valor = txtCorreo.value.trim();
        const re =
          /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
        if (!re.test(valor)) {
          bandera = false;
          txtCorreo.style.border = "1px solid red";
        } else {
          txtCorreo.style.border = "";
        }
      }

      // Validar campo dirección
      if (txtDireccion.value.trim() === "") {
        bandera = false;
        txtDireccion.style.border = "1px solid red";
      } else {
        txtDireccion.style.border = "";
      }

      // Mostrar resultado
      if (bandera) {
        contadorActor
          .registrar_usuario(
            txtNombre.value.trim(),
            txtTelefono.value.trim(),
            txtCorreo.value.trim(),
            txtDireccion.value.trim()
          )
          .then((id) => {
            txtIdRegistro.value = id.toString();
            Swal.fire({
              title: "Usuario registrado exitosamente",
              text: `ID de registro: ${id}`,
              icon: "success",
              confirmButtonText: "Aceptar",
              confirmButtonColor: "black",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error al registrar el usuario",
              text: error.message,
              icon: "error",
              confirmButtonText: "Aceptar",
              confirmButtonColor: "black",
            });
          });
      } else {
        validarCampos();
      }
    }

    document
      .getElementById("registrar")
      .addEventListener("click", registrarUsuario);
  });

  // Consultar
  document.addEventListener("DOMContentLoaded", () => {
    function consultarUsuario() {
      let bandera = true;
      if (txtIdRegistro.value.trim() === "") {
        bandera = false;
        txtIdRegistro.style.border = "1px solid red";
      } else {
        txtIdRegistro.style.border = "";
      }
      txtNombre.style.border = "";
      txtTelefono.style.border = "";
      txtCorreo.style.border = "";
      txtDireccion.style.border = "";

      if (bandera) {
        contadorActor
          .obtener_usuario(txtIdRegistro.value.trim())
          .then((user) => {
            if (user) {
              txtNombre.value = user.nombre;
              txtTelefono.value = user.telefono;
              txtCorreo.value = user.correo;
              txtDireccion.value = user.direccion;
              Swal.fire({
                title: "Usuario encontrado",
                text: `Nombre: ${user.nombre}, Teléfono: ${user.telefono}`,
                icon: "success",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "black",
              });
            } else {
              Swal.fire({
                title: "Usuario no encontrado",
                text: "",
                icon: "error",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "black",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error al consultar el usuario",
              text: error.message,
              icon: "error",
              confirmButtonText: "Aceptar",
              confirmButtonColor: "black",
            });
          });
      } else {
        validarCampos();
      }
    }

    document
      .getElementById("consultar")
      .addEventListener("click", consultarUsuario);
  });
});
