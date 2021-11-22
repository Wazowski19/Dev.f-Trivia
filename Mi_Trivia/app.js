/* contenedor = document.getElementById("info");
fetch('https://opentdb.com/api.php?amount=10')
  .then(response => response.json())
  .then(data => mostrarDatos(data.results))
  .catch(error => console.log(error)) */

contenedor = document.getElementById("info");

function crear(e){
  e.preventDefault();
  let url = "https://opentdb.com/api.php?amount=10";
  let dificultad = document.getElementById("dificultad").value;
  let tipo = document.getElementById("tipo").value;
  let categoria = document.getElementById("categoria").value;

  switch(categoria){
    case "9":
      url = url.concat("&category=9");
      break;
    case "10":
      url = url.concat("&category=10");
      break;
    case "11":
      url = url.concat("&category=11");
      break;
    case "12":
      url = url.concat("&category=12");
      break;
    case "13":
      url = url.concat("&category=13");
      break;
    case "14":
      url = url.concat("&category=14");
      break;
    case "15":
      url = url.concat("&category=15");
      break;
    case "16":
      url = url.concat("&category=16");
      break;
    case "17":
      url = url.concat("&category=17");
      break;
    case "18":
      url = url.concat("&category=18");
      break;
    case "19":
      url = url.concat("&category=19");
      break;
    case "20":
      url = url.concat("&category=20");
      break;
    case "21":
      url = url.concat("&category=21");
      break;
    case "22":
      url = url.concat("&category=22");
      break;
    case "23":
      url = url.concat("&category=23");
      break;
    case "24":
      url = url.concat("&category=24");
      break;
    case "25":
      url = url.concat("&category=25");
      break;
    case "26":
      url = url.concat("&category=26");
      break;
    case "27":
      url = url.concat("&category=27");
      break;
    case "28":
      url = url.concat("&category=28");
      break;
    case "29":
      url = url.concat("&category=29");
      break;
    case "30":
      url = url.concat("&category=30");
      break;
    case "31":
      url = url.concat("&category=31");
      break;
    case "32":
      url = url.concat("&category=32");
      break;
    default:
      console.log("Otra vez");
  }

  switch(dificultad){
    case "easy":
      url = url.concat("&difficulty=easy");
      break;
    case "medium":
      url = url.concat("&difficulty=medium");
      break;
    case "hard":
      url = url.concat("&difficulty=hard");
      break;
    default:
      console.log("Otra vez");
  }

  switch(tipo){
    case "multiple":
      url = url.concat("&type=multiple");
      break;
    case "boolean":
      url = url.concat("&type=boolean");
      break;
    default:
      console.log("Otra vez");
  }

  console.log(url)
  fetch(`${url}`)
    .then(response => response.json())
    .then(data => mostrarDatos(data.results))
    .catch(error => console.log(error))
}

const mostrarDatos = (data) =>{
  console.log(data)
  let body = "";
  let tbody = document.getElementById("datos");
  let respuestas;
  let opciones;
  let formulario;
  for(let i=0; i<data.length; i++){
    respuestas = document.createElement("select");
    opciones = document.createElement("option");
    opciones = new Option(data[i].correct_answer);
    respuestas.add(opciones);
    for(let j=0; j<data[i].incorrect_answers.length; j++){
      opciones = new Option(data[i].incorrect_answers[j]);
      respuestas.add(opciones);
    }
    
    body += `<tr>
    <td> ${data[i].question} </td> 
    <td> <form id="o${i}">${respuestas}</form></td></tr>`;

    document.getElementById("datos").innerHTML = body
    formulario = document.getElementById(`o${i}`);
    console.log(formulario)
    
    
  }
  
  
  console.log(data.length)
}

