let raio = prompt ("Raio do circulo")
raio = parseFloat (raio);


let comprimento = 2 * Math.PI * raio
let area = Math.PI * raio * raio;

console.log("Comprimento da circunferencia       = ", comprimento);
console.log("Area da circunferencia              = ", area);