/*JavaScript: Funciones, Arreglos & Funciones
1.Crear una función power que recibe dos argumentos base y exponent. 
La función debe retornar el resultado de elevar base a la potencia exponent.*/
function power(base, exponent) {
  let result = 1;//Let se usa para declarar variables en un solo alcance
  for (let i = 0; i < exponent; i++) {
    result *= base; //Eleva a la potencia el número indicado (número base)
  }
  return result;
}

const resultado = power(3, 6); // Se debe obtener 3^6 = 729
console.log('La potencia del número 3 a la potencia 6 es: ',resultado);

/*2.   Completar la función getLargerInt la cual recibe dos números enteros. 
La función debe retornar el número mayor. */
function getLergerInt(number1, number2) { 
  if(number1 > number2){ //Comparación de números
    return number1;
  }else{
    return number2;
  }
} 

const result = getLergerInt(9,6);
console.log('El número mayor es: ',result);

/*3. En la serie de Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144... 
Cada elemento se obtiene sumando los dos valores anteriores. 
Completar la función fibonacciSequence la cuál recibe limit, un entero positivo
que representa la cantidad de elementos de la serie que queremos. */
//Fibonacci 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144... 
function fibonacciSequence (limit){
  let secuencia = [1,1];
  for(let i = 2; i < limit; i++){
    let numSiguiente = secuencia[i - 1] + secuencia[i - 2]; //Se realiza el proceso de fibonacci
    secuencia.push(numSiguiente);
  }
  return secuencia;
}
const salida = fibonacciSequence (20);
console.log('La secuencia fibonacci es: ',salida);

/*4.Completar la función calculateAverage la cual recibe numbers, un arreglo de n 
cantidad de enteros. La función debe retornar el promedio de todos los enteros que tenga numbers. */
function calculateAverage(numbers) { 
  if(numbers.legth === 0){
    return 0; //Si el arreglo esta vacio, entonces devolvera 0
  }
  let sum = 0; // Inicializa una variable 'sum' en 0 para acumular la suma de los números.

  for (let i = 0; i < numbers.length; i++) {  // Recorre todos los elementos en el arreglo 'numbers'.
    sum += numbers[i]; // Sumamos cada número al total acumulado en 'sum'.
  }

  return sum / numbers.length;// Retorna el promedio, que es la suma de los números dividida por la cantidad de números.
}
const numbers = [16,24,69,75,2000,18,19]; // Creo un arreglo de números
const average = calculateAverage(numbers);// Llama a la función y capturar el resultado en una variable
console.log("El promedio es:", average);// Imprime el promedio en la consola