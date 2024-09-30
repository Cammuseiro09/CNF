function updatePrice() {
    var select = document.getElementById("product");
    if (select && select.options.length > 0) {
        var price = parseFloat(select.options[select.selectedIndex].value);
        document.getElementById('price').textContent = price.toFixed(2) + " €";
        document.getElementById('permanencia').textContent = price.toFixed(2) + " €";

        // Mostrar el <li> con la clase 'sub-truee' para los valores 49.00 y 52.00
        var liElementTruee = document.querySelector('.sub-truee');
        if (price === 49.00 || price === 52.00) {
            liElementTruee.style.display = 'block';
        } else {
            liElementTruee.style.display = 'none';
        }

        // Mostrar el <li> con la clase 'sub-trues' solo para el valor 49.00
        var liElementTrues = document.querySelector('.sub-trues');
        if (price === 49.00) {
            liElementTrues.style.display = 'block';
        } else {
            liElementTrues.style.display = 'none';
        }

        // Mostrar el <li> con la clase 'sub-truese' solo para el valor 52.00
        var liElementTruese = document.querySelector('.sub-truese');
        if (price === 52.00) {
            liElementTruese.style.display = 'block';
        } else {
            liElementTruese.style.display = 'none';
        }

        // Mostrar el <li> con la clase 'sub-trueese' solo para el valor 49.00
        var liElementTrueese = document.querySelector('.sub-trueese');
        if (price === 49.00) {
            liElementTrueese.style.display = 'block';
        } else {
            liElementTrueese.style.display = 'none';
        }

        // Mostrar el <li> con la clase 'sub-trueeese' solo para el valor 52.00
        var liElementTrueeese = document.querySelector('.sub-trueeese');
        if (price === 52.00) {
            liElementTrueeese.style.display = 'block';
        } else {
            liElementTrueeese.style.display = 'none';
        }

        // Llama a la función para mostrar el precio alternativo y su impuesto
        mostrarPrecioAlternativo(price);

        return price;
    }
    return 0;
}

function mostrarPrecioAlternativo(price) {
    let spanMeses = document.getElementById('meses');
    if (price === 49.00) {
        spanMeses.textContent = 45 + ",00 €"; // Mostrar 45,00 € si el precio es 49.00
    } else if (price === 52.00) {
        spanMeses.textContent = 48 + ",00 €"; // Mostrar 48,00 € si el precio es 52.00
    } else if (price === 41.00) {
        spanMeses.textContent = 37 + ",00 €"; // Mostrar 37,00 € si el precio es 41.00
    } else {
        spanMeses.textContent = ""; // Ocultar el mensaje si no aplica
    }
}
// Ahora puedes acceder a price45 y price48 desde cualquier otra función
function someOtherFunction() {
    console.log("El precio de 45 es: " + price45);
    console.log("El precio de 48 es: " + price48);
    // Puedes realizar más cálculos o acciones con estas variables aquí
}

// Calcula el precio con descuento y actualiza el div de la promoción
function applyDiscount() {
    let price = updatePrice();
    let promotionDiv = document.getElementById('promotionDiv');
    let pricethree = document.getElementById('pricethree');

    // Calcula el descuento y actualiza el div de la promoción
    if (price === 49.00) {
        pricethree.textContent = (49.00 - 41.00).toFixed(2) + " €"; // Descuento hasta 41 €
        promotionDiv.style.display = 'block';
    } else if (price === 52.00) {
        pricethree.textContent = (52.00 - 49.00).toFixed(2) + " €"; // Descuento hasta 49 €
        promotionDiv.style.display = 'block';
    } else {
        promotionDiv.style.display = 'none'; // Oculta el div si no es 49.00 o 52.00
    }
}

// Aplica un descuento adicional para otros valores
function changeValue() {
    let descuento = 4;
    let button = document.getElementById('myButton');
    button.innerText = "";

    let priceLabel = document.getElementById('priceLabel');
    priceLabel.innerText = "- " + descuento.toFixed(2) + " €";
    return resultado();
}

// Calcula el precio del paquete después de aplicar el descuento
function resultado() {
    let descuento = 4;
    let price = updatePrice();
    let result;
    let resultDos;

    if (price === 49.00) {
        result = 37.00;
        resultDos = 45.00;
    } else if(price === 52.00) {
        result = 45.00;
        resultDos = 49.00;
    } else if (price === 41.00 || price === 37.00) {
        result = price - descuento;
    } else {
        result = price - (descuento - 1); // Este es el "descuentoMenor"
    }

    document.getElementById("resultado").textContent = result.toFixed(2) + " €";
    if (resultDos !== undefined) {
        document.getElementById("permanencia").textContent = resultDos.toFixed(2) + " €";
    }

    return { result, resultDos }; // Devuelve un objeto con ambos valores
}

// Asigna la función al evento de cambio en el select
document.getElementById("product").addEventListener("change", function() {
    updatePrice();
    applyDiscount();
    resultado();
});


// Inicializa la vista al cargar la página
window.onload = function() {
    updatePrice();
    applyDiscount();
    resultado();
};
// Calcula el subtotal y el total de las líneas adicionales, considerando descuentos
function lineaAdicional() {
    var selection = document.getElementById("lineas");
    var precio = parseFloat(selection.options[selection.selectedIndex].value);
    var cantidad = parseInt(document.getElementById("lineascount").value);
    if (isNaN(precio)) precio = 0;
    if (isNaN(cantidad)) cantidad = 0;
    var subtotal = precio * cantidad;
    /*CAMBIO DE LINEASPRICE POR TOTALDESCUENTO*/
    document.getElementById('lineasPrice').textContent = subtotal.toFixed(2) + " €";
    document.getElementById('lineasdespues').textContent = subtotal.toFixed(2) + " €";

    var descuentoLinea = 0; // Valor por defecto del descuento
    var selectedValue = parseFloat(selection.value);

    // Cambia el valor del descuento según la opción seleccionada
    if (selectedValue === 3) { // 35GB
        descuentoLinea = 3;
    } else if (selectedValue === 12) { // 60GB
        descuentoLinea = 0;
    }

    var totalDescuentoLinea = cantidad * descuentoLinea;
    let totalLinea = subtotal - totalDescuentoLinea;
    document.getElementById('totalDescuentos').textContent = totalDescuentoLinea.toFixed(2) + " €";
     document.getElementById('totalDescuento').textContent = totalLinea.toFixed(2) + " €";
        
    return totalLinea;
}
// para las lineas adicionales
function lineaAdicionalDos() {
    var selectionDos = document.getElementById("lineasDos");
    var precioDos = parseFloat(selectionDos.options[selectionDos.selectedIndex].value);
    var cantidadDos = parseInt(document.getElementById("lineascountDos").value);

    // Verifica y asigna valores predeterminados si no son válidos
    if (isNaN(precioDos)) precioDos = 0;
    if (isNaN(cantidadDos)) cantidadDos = 0;

    var subtotalDos = precioDos * cantidadDos;
    document.getElementById('lineasPriceDos').textContent = subtotalDos.toFixed(2) + " €";
    document.getElementById('lineasdespuesDos').textContent = subtotalDos.toFixed(2) + " €";

    var descuentoLineaDos = 0; // Valor por defecto del descuento
    var selectedValueDos = parseFloat(selectionDos.value);

    // Cambia el valor del descuento según la opción seleccionada
    if (selectedValueDos === 3) { // 35GB
        descuentoLineaDos = 3;
    } else if (selectedValueDos === 12) { // 60GB
        descuentoLineaDos = 0;
    }

    var totalDescuentoLineaDos = cantidadDos * descuentoLineaDos;
    let totalLineaDos = subtotalDos - totalDescuentoLineaDos;
    document.getElementById('totalDescuentosDos').textContent = totalDescuentoLineaDos.toFixed(2) + " €";
    document.getElementById('totalDescuentoDos').textContent = totalLineaDos.toFixed(2) + " €";
        
    return totalLineaDos;
}
function lineaAdicionalTres() {
    // Obtén el elemento <select> con el ID 'lineasTres'
    var selectionTres = document.getElementById("lineasTres");
    // Obtén el valor del precio seleccionado
    var precioTres = parseFloat(selectionTres.options[selectionTres.selectedIndex].value);
    // Obtén el número de líneas seleccionadas
    var cantidadTres = parseInt(document.getElementById("lineascountTres").value);

    // Verifica y asigna valores predeterminados si no son válidos
    if (isNaN(precioTres)) precioTres = 0;
    if (isNaN(cantidadTres)) cantidadTres = 0;

    // Calcula el subtotal
    var subtotalTres = precioTres * cantidadTres;
    document.getElementById('lineasPriceTres').textContent = subtotalTres.toFixed(2) + " €";
    document.getElementById('lineasdespuesTres').textContent = subtotalTres.toFixed(2) + " €";

    // Valor por defecto del descuento
    var descuentoLineaTres = 0;
    var selectedValueTres = parseFloat(selectionTres.value);

    // Cambia el valor del descuento según la opción seleccionada
    if (selectedValueTres === 3) { // 35GB
        descuentoLineaTres = 3;
    } else if (selectedValueTres === 12) { // 60GB
        descuentoLineaTres = 0;
    }

    // Calcula el total del descuento y el subtotal después del descuento
    var totalDescuentoLineaTres = cantidadTres * descuentoLineaTres;
    let totalLineaTres = subtotalTres - totalDescuentoLineaTres;

    // Actualiza el contenido en el HTML
    document.getElementById('totalDescuentosTres').textContent = totalDescuentoLineaTres.toFixed(2) + " €";
    document.getElementById('totalDescuentoTres').textContent = totalLineaTres.toFixed(2) + " €";

    // Retorna el subtotal después del descuento
    return totalLineaTres;
}



// Calcula el subtotal final combinando el precio del paquete y el total de las líneas adicionales
function PrecioSubtotal() {
    let { result: paquetePrice } = resultado(); // Obtén result y resultDos de la función resultado
    let lineasTotal = lineaAdicional(); // Total de las líneas adicionales después de descuentos
    let lineasAdicionales = lineaAdicionalDos(); // Llama a lineaAdicionalDos para obtener el subtotal de líneas adicionales
    let lineasAdicionalesTres = lineaAdicionalTres(); // Incluye el subtotal de línea adicional tres

    // Calcula el subtotal usando paquetePrice
    let casiTotal = lineasAdicionales + lineasAdicionalesTres + paquetePrice;
    let totalSubFinal = casiTotal + lineasTotal;
    let sumaTotalSubFinal = 45 + lineasAdicionales + lineasAdicionalesTres;
    totalFinalisGlobal = sumaTotalSubFinal + lineasTotal;
    let sumaTotalSubFinale = 48 + lineasAdicionales + lineasAdicionalesTres;
    totalFinaliseGlobal = sumaTotalSubFinale + lineasTotal;

    // Asigna el totalSubFinal a una variable global
    totalSubFinalGlobal = totalSubFinal;

    // Actualiza el contenido en el HTML
    document.getElementById('totalFinal').textContent = totalSubFinal.toFixed(2) + " €";
    document.getElementById('totalSinDescuentos').textContent = totalSubFinal.toFixed(2) + " €";
    document.getElementById('totalSinDescuento').textContent = totalFinalisGlobal.toFixed(2) + " €";
    document.getElementById('totalSinDescuentose').textContent = totalFinaliseGlobal.toFixed(2) + " €";

    // Devuelve todos los valores necesarios
    return { totalSubFinalGlobal, totalFinalisGlobal, totalFinaliseGlobal };
}
// Llama a PrecioSubtotal() cada vez que cambie el valor de los selects
document.getElementById("product").addEventListener("change", PrecioSubtotal);
document.getElementById("permanencia").addEventListener("change", PrecioSubtotal);
document.getElementById("lineascount").addEventListener("change", PrecioSubtotal);
document.getElementById("lineas").addEventListener("change", PrecioSubtotal);
document.getElementById("lineascountDos").addEventListener("change", PrecioSubtotal); // Asegúrate de incluir este event listener

// Inicializa la vista al cargar la página
// Asegúrate de que los impuestos se actualicen también al cambiar
document.querySelectorAll("input[name='impuesto']").forEach(impuesto => {
    impuesto.addEventListener('change', aplicarImpuesto);
});
document.getElementById("selectSva").addEventListener('change', aplicarImpuesto);

window.onload = function() {
    PrecioSubtotal();
    aplicarImpuesto();
};

// Calcula el subtotal del paquete y el subtotal de las líneas adicionales sin aplicar descuentos
function TotalSinDescuentos() {
    let paquetePrice = updatePrice(); // Obtiene el precio del paquete
    let lineasTotal = obtenerSubtotalLineas(); // Obtiene el subtotal de las líneas adicionales

    let totalSinDescuentos = paquetePrice + lineasTotal;

    // Muestra el total sin descuentos en el HTML
    document.getElementById('totalSinDescuentos').textContent = totalSinDescuentos.toFixed(2) + " €";
    
    return totalSinDescuentos;
}

// Obtiene el subtotal de las líneas adicionales (sin aplicar descuentos)
function obtenerSubtotalLineas() {
    var selection = document.getElementById("lineas");
    var precio = parseFloat(selection.options[selection.selectedIndex].value);
    var cantidad = parseInt(document.getElementById("lineascount").value);
    if (isNaN(precio)) precio = 0;
    if (isNaN(cantidad)) cantidad = 0;
    var subtotal = precio * cantidad;

    return subtotal;
}

// Llama a TotalSinDescuentos() cuando cambien los valores en los selects
document.getElementById("product").addEventListener("change", TotalSinDescuentos);
document.getElementById("lineas").addEventListener("change", TotalSinDescuentos);
document.getElementById("lineascount").addEventListener("change", TotalSinDescuentos);

// Calcula el precio final con el impuesto seleccionado y actualiza el HTML
// Función para actualizar la cuota SVA y subtotal
function actualizarCuotaSva() {
    // Obtiene el valor seleccionado en el select
    let selectSva = document.getElementById("selectSva");
    let cuotaSeleccionada = parseFloat(selectSva.value) || 0;

    // Actualiza el contenido del span con id "cuotaSva" y "SubtotalSva"
    document.getElementById("cuotaSva").textContent = cuotaSeleccionada.toFixed(2) + " €";
    document.getElementById("SubtotalSva").textContent = cuotaSeleccionada.toFixed(2) + " €";

    // Llama a aplicarImpuesto() después de actualizar la cuota SVA
    aplicarImpuesto();
}

let totalFinalisGlobal;
let totalFinaliseGlobal;
let totalSubFinalGlobal;


// Calcula el precio final con el impuesto seleccionado y actualiza el HTML
function aplicarImpuesto() {
    // Primero, actualiza los valores llamando a PrecioSubtotal
    let { totalSubFinalGlobal, totalFinalisGlobal, totalFinaliseGlobal } = PrecioSubtotal(); // Obtiene los valores necesarios

    // Obtiene el impuesto seleccionado
    let impuestos = document.getElementsByName("impuesto");
    let impuestoSeleccionado = 0;
    let tipoImpuesto = "";

    for (let i = 0; i < impuestos.length; i++) {
        if (impuestos[i].checked) {
            impuestoSeleccionado = parseFloat(impuestos[i].value);
            tipoImpuesto = impuestos[i].nextElementSibling.textContent.trim();
            break;
        }
    }

    // Calcula el valor del impuesto para cada uno de los valores
    let valorImpuestoSubFinal = totalSubFinalGlobal * impuestoSeleccionado;
    let valorImpuestoFinalis = totalFinalisGlobal * impuestoSeleccionado;
    let valorImpuestoFinalise = totalFinaliseGlobal * impuestoSeleccionado;

    // Obtiene la cuota SVA
    let cuotaSva = parseFloat(document.getElementById("selectSva").value) || 0;

    // Calcula el total a pagar incluyendo el impuesto y la cuota SVA
    let totalPagarSubFinal = totalSubFinalGlobal + valorImpuestoSubFinal + cuotaSva;
    let totalPagarFinalis = totalFinalisGlobal + valorImpuestoFinalis + cuotaSva;
    let totalPagarFinalise = totalFinaliseGlobal + valorImpuestoFinalise + cuotaSva;

    // Actualiza el HTML con el precio base, tipo de impuesto, valor del impuesto, cuota SVA y total a pagar
    document.getElementById('totalconDescuento').textContent = totalSubFinalGlobal.toFixed(2) + " €";
    document.getElementById('tipoImpuesto').textContent = tipoImpuesto;
    document.getElementById('precioDescuento').textContent = valorImpuestoSubFinal.toFixed(2) + " €";
    document.getElementById('totalApagar').textContent = totalPagarSubFinal.toFixed(2) + " €";
    document.getElementById('mesesFinal').textContent = totalPagarFinalis.toFixed(2) + " €";
    document.getElementById('mesesFinalis').textContent = totalPagarFinalise.toFixed(2) + " €";

    // Llama a la función para mostrar el precio alternativo y el elemento adicional
    mostrarPrecioAlternativo(totalSubFinalGlobal, impuestoSeleccionado, tipoImpuesto);
}
window.addEventListener('load', aplicarImpuesto);


function mostrarPrecioAlternativo(precioBase, impuestoSeleccionado) {
    let spanMeses = document.getElementById('meses');
    let liElement = document.querySelector('.sub-truee');

    if (precioBase === 49.00 || precioBase === 52.00) {
        let precioAlternativo = precioBase === 49.00 ? 45.00 : 48.00;
        let impuestoAlternativo = precioAlternativo * impuestoSeleccionado;

        spanMeses.textContent = `${precioAlternativo.toFixed(2)} €`;
        liElement.style.display = 'block'; // Mostrar el <li> si el precio es 49.00 o 52.00
    } else if (precioBase === 41.00) {
        spanMeses.textContent = "37,00 €"; // Mostrar 37,00 € si el precio es 41.00
        liElement.style.display = 'none'; // Ocultar el <li> si el precio no es 49.00 o 52.00
    } else {
        spanMeses.textContent = ""; // Ocultar el mensaje si no aplica
        liElement.style.display = 'none'; // Ocultar el <li> si no aplica
    }
}
window.onload = function() {
    aplicarImpuesto();
    actualizarCuotaSva();
};
document.getElementById("selectSva").addEventListener("change", aplicarImpuesto);
document.getElementById("updateButton").addEventListener("click", aplicarImpuesto);

let impuestos = document.getElementsByName("impuesto");
for (let i = 0; i < impuestos.length; i++) {
    impuestos[i].addEventListener("change", aplicarImpuesto);
}


// Función para actualizar la cuota SVA y subtotal
function actualizarCuotaSva() {
    // Obtiene el valor seleccionado en el select
    let selectSva = document.getElementById("selectSva");
    let cuotaSeleccionada = parseFloat(selectSva.value) || 0;

    // Actualiza el contenido del span con id "cuotaSva" y "SubtotalSva"
    document.getElementById("cuotaSva").textContent = cuotaSeleccionada.toFixed(2) + " €";
    document.getElementById("SubtotalSva").textContent = cuotaSeleccionada.toFixed(2) + " €";
}

// Asigna la función al evento de cambio en el select
document.getElementById("selectSva").addEventListener("change", actualizarCuotaSva);

// Asigna la función al evento de clic en el botón
document.getElementById("updateButton").addEventListener("click", actualizarCuotaSva);

// creacion del div para mostrar el precio de los 3 meses//
function precioPromocional() {
    let precioLinea = PrecioSubtotal();
   
    
    let impuesto = document.getElementsByName("impuesto");
    let impuestoSeleccionados = 0;
    let tipoImpuestos = "";

    for (let i = 0; i < impuesto.length; i++) {
        if (impuesto[i].checked) {
            impuestoSeleccionados = parseFloat(impuesto[i].value);
            tipoImpuestos = impuesto[i].nextElementSibling.textContent.trim();
            break;
        }
    }
    let precioParaCalculos = (precioLinea === 49.00) ? 45.00 : precioLinea;

    
    let valorImpuestos = precioParaCalculos * impuestoSeleccionados;

    // Obtiene la cuota SVA
    let cuotaSvas = parseFloat(document.getElementById("selectSva").value) || 0;

    // Calcula el total a pagar incluyendo la cuota SVA
    let totalPagare = precioParaCalculos + valorImpuestos + cuotaSvas;

    document.getElementById('meses').textContent = totalPagare.toFixed(2) + " €";

}