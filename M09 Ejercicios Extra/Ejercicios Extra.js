/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   let arrayOfObject = [];
   for (const prop in objeto) {
      arrayOfObject.push([prop, objeto[prop]]);
   }
   return arrayOfObject;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objReturn = {};
   for (let i=0; i < string.length; i++) {
      if (objReturn.hasOwnProperty(string[i])) {
         objReturn[string[i]]++;
      } else {
         objReturn[string[i]] = 1;
      }
   }
   return objReturn;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   function isUpperCaseChar(char) {
      return char.toUpperCase() === char && char.toLowerCase() !== char;
   }
   function isLowerCaseChar(char) {
      return char.toUpperCase() !== char && char.toLowerCase() === char;
   }

   let mayArr = [];
   let minArr = [];

   for (let i=0; i < string.length; i++) {
      if (isUpperCaseChar(string[i])) {
         mayArr.push(string[i]);
      } else {
         minArr.push(string[i]);
      }
   }
   return mayArr.join('') + minArr.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   function inverseWord(word) {
      let inverseWordArr = [];
      for (let i=word.length-1; i >= 0; i--) {
         inverseWordArr.push(word[i]);
      }
      return inverseWordArr.join('');
   }

   let palabras = frase.split(' ');
   for (let i=0; i < palabras.length; i++) {
      palabras[i] = inverseWord(palabras[i]);
   }
   return palabras.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numStr = numero.toString().split('');
   for (let i=0, j=numStr.length-1; i <= j; i++, j--) {
      if (numStr[i] !== numStr[j]) {
         return "No es capicua";
      }
   }
   return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   let newStrArr = [];
   for (let i=0; i < string.length; i++) {
      switch(string[i]) {
         case 'a':
         case 'b':
         case 'c':
            break;
         default:
            newStrArr.push(string[i])
      }
   }
   return newStrArr.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for (let i=0; i < arrayOfStrings.length-1; i++) {
      if (arrayOfStrings[i].length > arrayOfStrings[i+1].length) {
         let tmpVal = arrayOfStrings[i];
         arrayOfStrings[i] = arrayOfStrings[i+1];
         arrayOfStrings[i+1] = tmpVal;
         //Se que hay ordenamientos mucho más eficaces, pero para ayudar un poquito, espero con esto ser un poco más óptimo que un bubble sort.
         i-=2;
         if (i < -1) {
            i = -1;
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let arrayInt = [];
   for (let i=0; i < array1.length; i++) {
      for (let j=0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            arrayInt.push(array1[i]);
            break;
         }
      }
   }
   return arrayInt;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
