// Función para actualizar los detalles de compra
function actualizarEtiqueta() {
    // Obtener el valor del campo "Nombre Completo" y actualizar el elemento correspondiente en los detalles de compra
    var texto = document.getElementById("nombre").value;
    document.getElementById("nombre-compra").innerText = texto;

    // Obtener el valor del campo "Correo Electrónico" y actualizar el elemento correspondiente en los detalles de compra
    texto = document.getElementById("correo").value;
    document.getElementById("correo-compra").innerText = texto;

    // Obtener el valor del campo "Número de Teléfono" y actualizar el elemento correspondiente en los detalles de compra
    texto = document.getElementById("telefono").value;
    document.getElementById("telefonoo-compra").innerText = texto;

    // Obtener el valor del campo "Tipo de Entrada" y actualizar el elemento correspondiente en los detalles de compra
    texto = document.getElementById("tipo-entrada").value;
    document.getElementById("entrada-compra").innerText = texto;
}
