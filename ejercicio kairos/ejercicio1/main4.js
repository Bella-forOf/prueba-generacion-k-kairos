'use strict';
const inputName = document.getElementById('name');
const inputDate = document.getElementById('date');
const inputNameWithoutVocals = document.getElementById('nameWithoutVocals');
const inputDays = document.getElementById('days');

function calculateIntervalDays(fromDate, toDate = '10/03/2023') {
  // para trabajar con fechas el formato esperado es formato ISO: yyyy-mm-dd. Esto es un problema por que
  // aqui se da otro formato. Despues de ver como es el test que se le pasa vemos que el formato de fromDate es
  // el mismo que de toDate. Por lo que necesito las funciones transformData y reTransformData para obtener
  // el formato de fecha deseado en cada caso.
  const fromDateConverted = transformData(fromDate); // aqui habia conseguido que fromData fuera dd/mm/yyyy y lo paso a formato ISO.
  const toDateConverted = transformData(toDate); // aqui tambienlo paso a formato ISO.
  const fromDateSplitMs = new Date(fromDateConverted).getTime();
  const toDateConvertedMs = new Date(toDateConverted).getTime();
  const diffDay = (toDateConvertedMs - fromDateSplitMs) / (1000 * 60 * 60 * 24);
  return diffDay;
}
function transformData(date) {
  const toDateSplit = date.split('/');
  const converted =
    toDateSplit[2] + '-' + toDateSplit[1] + '-' + toDateSplit[0];
  return converted;
}
function reTransformData(fromDate) {
  // esta función esta creada para pasar el formato de fecha recogido del usuario que seria ISO: yyyy-mm-dd, al formato esperado por el test dd/mm/yyy
  const fromDateSplit = fromDate.split('-');
  const converted =
    fromDateSplit[2] + '/' + fromDateSplit[1] + '/' + fromDateSplit[0];
  return converted;
}
function removeVocalsAndSpaces(name) {
  const resultRemove = name.replace(/[aáeéiíoóuúAÁEÉIÍOÓUÚ ]/g, '');
  return resultRemove;
}
function handleInputDate() {
  debugger;
  const selectDay = inputDate.value;
  const convertedSelectDay = reTransformData(selectDay);
  inputDays.value = calculateIntervalDays(convertedSelectDay);
}
function handleInputName() {
  const inputText = inputName.value;

  inputNameWithoutVocals.value = removeVocalsAndSpaces(inputText);
}
inputName.addEventListener('blur', handleInputName);
inputDate.addEventListener('blur', handleInputDate);
