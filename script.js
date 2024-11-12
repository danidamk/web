$(document).ready(function() {
    // Al hacer clic en un enlace de la lista, se muestra/oculta el texto correspondiente
    $(".expand-toggle").click(function() {
      // Encuentra el bloque de texto siguiente al enlace y alterna su visibilidad
      $(this).next(".expansion-text").slideToggle();
    });
  });