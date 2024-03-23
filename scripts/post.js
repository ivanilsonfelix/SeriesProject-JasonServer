// primeira etapa =  receber valores
const nomeSerie = document.getElementById("nomeSerie").value 
const numTemporada = document.getElementById("numTemporada").value
const nomeEstudio = document.getElementById("nomeEstudio").value
const anoLancamento = document.getElementById("anoLancamento").value

//passar esses valores para um objeto
const dadosEnviados = {
    "id": null, //autoincremental
    "nomeSerie": nomeSerie,
    "numTemporada": numTemporada,
    "nomeEstudio": nomeEstudio,
    "anoLancamento": anoLancamento

}
//realizar a requisição do tipo post

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  body: JSON.stringify(dadosEnviados),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));
.catch(err => console.log(err));


