// Cinco miembros de un club quieren saber cuánto subieron o bajaron de peso desde la última
// reunión. Por cada miembro se lee su peso anterior y luego se pesa en 10 básculas distintas
// para obtener un promedio.
// Si el promedio es mayor que el peso anterior, imprimir "SUBIÓ" y los kilos. Si es menor,
// imprimir "BAJÓ" y los kilos. Si es igual, imprimir "SE MANTUVO". Los kilos siempre se
// muestran en positivo, sin usar Math.abs.

let peso = 0;
let bascula = 0;
let kilos = "";
let promedio = 0;
let suma = 0;

for(let i=1; i<=5; i++){
    peso = parseFloat(prompt("Ingrese el peso inicial: "));
    for(let j=1; j<=10; j++){
        bascula = parseFloat(prompt(`Peso bascula`))
    }
}