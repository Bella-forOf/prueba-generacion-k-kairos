'use strict'
console.log("Inicio del código");

const mensaje1 = "Nekgikis VII";
const mensaje2 = "Faraón de Egipto";
const mensaje3 = "Hijo de Nekgikis VI";
const mensaje4 = "Quiere reclutar a los mejores developers";
const mensaje5 = "¿Quieres ser uno de ellos?";
const mensaje6 = "Resuelve este problema y envíanos tu solución";

console.log(mensaje1);

setTimeout(function() {
  console.log(mensaje2);
  console.log(mensaje3);
  console.log(mensaje4);
}, 0);

Promise.resolve().then(function() {
  setTimeout(function() {
    console.log(mensaje5);
  }, 0);
}).then(function() {
  console.log("Fin del código");
});


// console.log(mensaje5);