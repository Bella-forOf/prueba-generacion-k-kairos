'use strict';
const inputName = document.getElementById('name');
const inputDate = document.getElementById('date');
const inputNameWithoutVocals = document.getElementById('nameWithoutVocals');
const inputDays = document.getElementById('days');

function calculateIntervalDays(fromDate, toDate = '10/03/2023') {
  // Como no puedo usar el formato de toDate para trabajar fechas,
  // lo divido en un array y lo coloco para convertirlo en formato ISO: yyyy-mm-dd.
  const toDateSplit = toDate.split('/');
  const toDateConverted =
    toDateSplit[2] + '-' + toDateSplit[1] + '-' + toDateSplit[0];
  const fromDateMs = new Date(fromDate).getTime();
  const toDateConvertedMs = new Date(toDateConverted).getTime();
  const diffDay = (toDateConvertedMs - fromDateMs) / (1000 * 60 * 60 * 24);
  return diffDay;
}
function removeVocalsAndSpaces(name) {
  const resultRemove = name.replace(/[aeiouAEIOU ]/g, '');
  return resultRemove;
}
function handleInputDate(event) {
  const selectDay = event.target.value;
  inputDays.value = calculateIntervalDays(selectDay);
}
function handleInputName(event) {
  const inputText = event.target.value;
  inputNameWithoutVocals.value = removeVocalsAndSpaces(inputText);
}
inputName.addEventListener('blur', handleInputName);
inputDate.addEventListener('blur', handleInputDate);
