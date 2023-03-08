'use strict'

const mensaje1 = "Nekgikis VII";
const mensaje2 = "Faraón de Egipto";
const mensaje3 = "Hijo de Nekgikis VI";
const mensaje4 = "Quiere reclutar a los mejores developers";
const mensaje5 = "¿Quieres ser uno de ellos?";
const mensaje6 = "Resuelve este problema y envíanos tu solución";

// punto 1
console.log(mensaje1);
//// punto 2
setTimeout(function() {
  console.log(mensaje4);
}, 0);
// punto 3
Promise.resolve().then(function() {
  console.log(mensaje3);
});
//punto 4
Promise.resolve().then(function() {
    setTimeout(function() {
      console.log(mensaje6);
    }, 0);
});
// punto 5

setTimeout(function() {
    Promise.resolve().then(function() {
        console.log(mensaje5);
    });
  }, 0);
  // punto 6
  console.log(mensaje2);


