import { series } from './datos.js';
var seriesTbody = document.getElementById('series');
var promedioTemporadasElm = document.getElementById("temporadas-promedio");
renderSeriesInTable(series);
promedioTemporadasElm.innerHTML = "".concat(getTemporadasPromedio(series));
function renderSeriesInTable(se) {
    var cardContainer = document.getElementById("cardContainer");
    se.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.codigo, "</td>\n                           <td><a href=\"#\" class=\"serienombrelink\" data-nombre=\"").concat(s.nombre, "\" data-nombre=\"").concat(s.nombre, "\"\n                           data-imagen=\"").concat(s.imagen, "\"\n                           data-descripcion=\"").concat(s.descripcion, "\"\n                           data-link=\"").concat(s.link, "\">").concat(s.nombre, "</a></td>\n                           <td>").concat(s.canal, "</td>\n                           <td>").concat(s.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var linknombre = document.querySelectorAll(".serienombrelink");
    linknombre.forEach(function (Serielink) {
        Serielink.addEventListener("click", function (event) {
            event.preventDefault();
            var nombre = Serielink.dataset.nombre;
            var imagen = Serielink.dataset.imagen;
            var descripcion = Serielink.dataset.descripcion;
            var link = Serielink.dataset.link;
            if (cardContainer) {
                cardContainer.innerHTML = "\n          <div class=\"card\" style=\"width: 70%;\">\n            <img src=\"".concat(imagen, "\" class=\"card-img-top\" alt=\"Imagen de la serie ").concat(nombre, " con link ").concat(imagen, "\">\n            <div class=\"card-body\">\n              <h5 class=\"card-nombre\">").concat(nombre, "</h5>\n              <p class=\"card-descripcion\">").concat(descripcion, "</p>\n              <a href=\"").concat(link, "\" class=\"boton\">").concat(link, "</a>\n    </div>\n  </div>\n        ");
            }
        });
    });
}
function getTemporadasPromedio(series) {
    var totalTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    return "Temporadas Promedio: " + totalTemporadas / series.length;
}
