$(document).ready(function () {
  // 1. Cambiar tema claro/oscuro
  $("#btnTema").click(function () {
    $("body").toggleClass("dark-mode");

    if ($("body").hasClass("dark-mode")) {
      $("#btnTema").html('<i class="bi bi-sun"></i> Cambiar tema');
    } else {
      $("#btnTema").html('<i class="bi bi-moon-stars"></i> Cambiar tema');
    }
  });

  // 2. Cambiar color de sección habilidades
  $("#btnColor").click(function () {
    $("#habilidades").toggleClass("habilidades-alt");
  });

  // 3. Animación al hacer scroll
  function mostrarSecciones() {
    $(".reveal").each(function () {
      const top = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom > top + 50) {
        $(this).addClass("active");
      }
    });
  }

  $(window).on("scroll", mostrarSecciones);
  mostrarSecciones();

  // 4. Validación en tiempo real
  $("#nombre").on("input", function () {
    let nombre = $(this).val().trim();

    if (nombre.length < 3) {
      $("#errorNombre").text("El nombre debe tener al menos 3 caracteres.");
    } else {
      $("#errorNombre").text("");
    }
  });

  $("#correo").on("input", function () {
    let correo = $(this).val().trim();
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(correo)) {
      $("#errorCorreo").text("Ingresa un correo válido.");
    } else {
      $("#errorCorreo").text("");
    }
  });

  $("#mensaje").on("input", function () {
    let mensaje = $(this).val().trim();

    if (mensaje.length < 10) {
      $("#errorMensaje").text("El mensaje debe tener al menos 10 caracteres.");
    } else {
      $("#errorMensaje").text("");
    }
  });

  // 5. Validación al enviar formulario
  $("#formContacto").submit(function (e) {
    e.preventDefault();

    let nombre = $("#nombre").val().trim();
    let correo = $("#correo").val().trim();
    let mensaje = $("#mensaje").val().trim();
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valido = true;

    if (nombre.length < 3) {
      $("#errorNombre").text("El nombre debe tener al menos 3 caracteres.");
      valido = false;
    }

    if (!regex.test(correo)) {
      $("#errorCorreo").text("Ingresa un correo válido.");
      valido = false;
    }

    if (mensaje.length < 10) {
      $("#errorMensaje").text("El mensaje debe tener al menos 10 caracteres.");
      valido = false;
    }

    if (valido) {
      $("#mensajeExito").text("Formulario enviado correctamente.");
      $("#formContacto")[0].reset();
      $("#errorNombre, #errorCorreo, #errorMensaje").text("");
    } else {
      $("#mensajeExito").text("");
    }
  });
});