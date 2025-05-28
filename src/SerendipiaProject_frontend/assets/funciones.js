// Valores de los inputs
const txtNombre = document.getElementById("txt_nombre");
const txtTelefono = document.getElementById("txt_telefono");
const txtCorreo = document.getElementById("txt_correo");
const txtDireccion = document.getElementById("txt_direccion");
const txtIdRegistro = document.getElementById("txt_idRegistro");

// Mensaje validar campos
function validarCampos() {
  Swal.fire({
    title: "Valida los campos marcados en rojo por favor",
    text: "",
    icon: "info",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "black",
  });
}

//Registrar
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
      Swal.fire({
        title: "Registra al usuario a través del backend",
        text: "",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "black",
      });
    } else {
      validarCampos();
    }
  }

  document
    .getElementById("registrar")
    .addEventListener("click", registrarUsuario);
});

//Consultar
document.addEventListener("DOMContentLoaded", () => {
  function consultarUsuario() {
    let bandera = true;

    // Validar campo idRegistro
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

    // Mostrar resultado
    if (bandera) {
      Swal.fire({
        title: "Consultar el usuario a través del backend",
        text: "",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "black",
      });
    } else {
      validarCampos();
    }
  }

  document
    .getElementById("consultar")
    .addEventListener("click", consultarUsuario);
});

//Editar
document.addEventListener("DOMContentLoaded", () => {
  function editarUsuario() {
    let bandera = true;

    // Validar campo idRegistro
    if (txtIdRegistro.value.trim() === "") {
      bandera = false;
      txtIdRegistro.style.border = "1px solid red";
    } else {
      txtIdRegistro.style.border = "";
    }

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
      Swal.fire({
        title: "Editar el usuario a través del backend",
        text: "",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "black",
      });
    } else {
      validarCampos();
    }
  }

  document.getElementById("editar").addEventListener("click", editarUsuario);
});

//Eliminar
document.addEventListener("DOMContentLoaded", () => {
  function eliminarUsuario() {
    let bandera = true;

    // Validar campo idRegistro
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

    // Mostrar resultado
    if (bandera) {
      Swal.fire({
        title: "Eliminar el usuario a través del backend",
        text: "",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "black",
      });
    } else {
      validarCampos();
    }
  }

  document
    .getElementById("eliminar")
    .addEventListener("click", eliminarUsuario);
});
