let departureDateEntry = prompt(
  "Digite a data de partida (formato DD/MM/YYYY)"
);

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = today - departureDate;

let chosenOption = prompt(
  "Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias\n5 - Anos"
);

if (chosenOption == "1") {
  let secondsOfDeparture = Math.round(dateDiff / 1000);
  alert(`Tempo de vôo ${secondsOfDeparture} segundos`);
} else if (chosenOption == "2") {
  let minutsOfDeparture = Math.round(dateDiff / 1000 / 60);
  alert(`Tempo de vôo ${minutsOfDeparture} minutos`);
} else if (chosenOption == "3") {
  let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
  alert(`Tempo de vôo ${hoursOfDeparture} horas`);
} else if (chosenOption == "4") {
  let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
  alert(`Tempo de vôo ${daysOfDeparture} dias`);
} else if (chosenOption == "5") {
  let yearsOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24 / 365);
  alert(`Faz ${yearsOfDeparture} anos que você está voando.`);
} else {
  alert("Opção Invalido");
}
