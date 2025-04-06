
import {Serie} from './serie.js';

import {series} from './datos.js';


const seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioTemporadasElm: HTMLElement = document.getElementById("temporadas-promedio")!;



renderSeriesInTable(series);

promedioTemporadasElm.innerHTML = `${getTemporadasPromedio(series)}`

function renderSeriesInTable(se: Serie[]): void {
  const cardContainer = document.getElementById("cardContainer") as HTMLDivElement;
  se.forEach((s) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.codigo}</td>
                           <td><a href="#" class="serienombrelink" data-nombre="${s.nombre}" data-nombre="${s.nombre}"
                           data-imagen="${s.imagen}"
                           data-descripcion="${s.descripcion}"
                           data-link="${s.link}">${s.nombre}</a></td>
                           <td>${s.canal}</td>
                           <td>${s.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
    


  });



  const linknombre = document.querySelectorAll<HTMLAnchorElement>(".serienombrelink");
  linknombre.forEach((Serielink) => {
    Serielink.addEventListener("click", (event) => {
      event.preventDefault();
      const nombre = Serielink.dataset.nombre;
      const imagen = Serielink.dataset.imagen;
      const descripcion = Serielink.dataset.descripcion;
      const link = Serielink.dataset.link;
      if (cardContainer) {
        cardContainer.innerHTML = `
          <div class="card" style="width: 70%;">
            <img src="${imagen}" class="card-img-top" alt="Imagen de la serie ${nombre} con link ${imagen}">
            <div class="card-body">
              <h5 class="card-nombre">${nombre}</h5>
              <p class="card-descripcion">${descripcion}</p>
              <a href="${link}" class="boton">${link}</a>
    </div>
  </div>
        `;}
    });
  });

}



function getTemporadasPromedio(series: Serie[]): String{
  let totalTemporadas: number = 0;
    series.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporadas);
    return "Temporadas Promedio: " + totalTemporadas/series.length;
  }


