const mensaje = ' hola que tal\ncomo estas';

// Convierte el string en un array
let arrayMensaje = mensaje.split('');

// Elimina los saltos de línea
arrayMensaje = arrayMensaje.filter(caracter => caracter !== '\n');

// Reemplaza todos los caracteres en la posición par por el caracter '|'
arrayMensaje = arrayMensaje.map((caracter, index) => {
  if (index % 2 === 0) {
    return '|';
  } else {
    return caracter;
  }
});

// Reemplaza todos los caracteres cuya posición sea múltiplo de 3 por el caracter '|'
arrayMensaje = arrayMensaje.map((caracter, index) => {
  if ((index + 1) % 3 === 0) {
    return '|';
  } else {
    return caracter;
  }
});

// Reemplaza todos los caracteres cuya posición sea múltiplo de 7 por el caracter '|'
arrayMensaje = arrayMensaje.map((caracter, index) => {
  if ((index + 1) % 7 === 0) {
    return '|';
  } else {
    return caracter;
  }
});

// Reemplaza todos los caracteres cuya posición sea múltiplo de 11 por el caracter '|'
arrayMensaje = arrayMensaje.map((caracter, index) => {
  if ((index + 1) % 11 === 0) {
    return '|';
  } else {
    return caracter;
  }
});

// Reemplaza todos los caracteres cuya posición sea múltiplo de 13 por el caracter '|'
arrayMensaje = arrayMensaje.map((caracter, index) => {
  if ((index + 1) % 13 === 0) {
    return '|';
  } else {
    return caracter;
  }
});

// Reemplaza todas las letras mayúsculas de la A a la Z por el caracter '|'
arrayMensaje = arrayMensaje.map(caracter => {
  if (/[A-Z]/.test(caracter)) {
    return '|';
  } else {
    return caracter;
  }
});

// Reemplaza todos los caracteres #, ; y ! por el caracter '|'
arrayMensaje = arrayMensaje.map(caracter => {
  if (/[#;!]/.test(caracter)) {
    return '|';
  } else {
    return caracter;
  }
});

// Elimina los caracteres '|' del array
arrayMensaje = arrayMensaje.filter(caracter => caracter !== '|');

// Convierte el array en un string
let mensajeModificado = arrayMensaje.join('');

// Trunca el array a los primeros 54 caracteres
mensajeModificado = mensajeModificado.substring(0, 54);

console.log(mensajeModificado);
