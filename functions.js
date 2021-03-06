let page = 1;
let printTable;

$(document).ready(function () {
  printTable = (page) => {
    let consapi = {
      url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&page=${page}`,
      method: "GET",
      timeout: 0,
    };

    $.ajax(consapi).done(function (response) {
      // console.log(response);
      let dataInfo = response;

      dataInfo.forEach((object) => {
        let imagesCripto = object.image;

        $("#dataCripto").append(
          $("<tr/>").append(
            $("<th/>")
              .attr("class", "image")
              .append(
                $("<img/>").attr({
                  src: `${imagesCripto}`,
                })
              ),
            $("<th/>").attr("class", "name").text(object.id),
            $("<th/>").attr("class", "simbolo").text(object.symbol),
            $("<th/>")
              .attr("class", "precio")
              .text(`$ ${object.current_price}`),
            $("<th/>").attr("class", "precioAlto").text(`$ ${object.high_24h}`),
            $("<th/>").attr("class", "precioAlto").text(`$ ${object.low_24h}`),
            $("<th/>")
              .attr("class", "precioAlto")
              .text(new Date(object.ath_date).toLocaleString())
          )
        );
      });
    });
  };
  printTable();
});

//Pagination
$("#pages").append("<div/>"), $("div").attr("id", "pagination");

for (let i = 1; i < 31; i++) {
  let botonPag = document.createElement("button");
  botonPag.innerText = i;

  // console.log(botonPag);

  botonPag.onclick = () => {
    page = parseInt(i);
    deleteAllinDiv();
    printTable(i);
  };
  $("#pagination").append(botonPag);
}

//Función para borrar elementos
function deleteAllinDiv() {
  while (dataCripto.hasChildNodes()) {
    dataCripto.removeChild(dataCripto.lastChild);
  }
}
