// Função para calcular a área de um círculo
function calcularAreaCirculo() {
   const raio = parseFloat(document.getElementById("raio").value);
   const area = Math.PI * Math.pow(raio, 2);
   document.getElementById("areaCirculo").textContent = "A área do círculo é: " + area.toFixed(2);
 }
 
 // Função para calcular a hipotenusa de um triângulo-retângulo
 function calcularHipotenusa() {
   const catetoOposto = parseFloat(document.getElementById("catetoOposto").value);
   const catetoAdjacente = parseFloat(document.getElementById("catetoAdjacente").value);
   const hipotenusa = Math.sqrt(Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2));
   document.getElementById("hipotenusa").textContent = "A hipotenusa do triângulo é: " + hipotenusa.toFixed(2);
 }
 
 // Função para converter um valor em reais para dólares
 function converterParaDolares() {
   const cotacaoDolar = 5.25; // Valor da cotação do dólar
   const valorReais = parseFloat(document.getElementById("valorReais").value);
   const valorDolares = valorReais / cotacaoDolar;
   document.getElementById("valorDolares").textContent = "O valor em dólares é: " + valorDolares.toFixed(2);
 }
 
 // Função para converter uma temperatura em graus Celsius para graus Fahrenheit
 function converterParaFahrenheit() {
   const temperaturaCelsius = parseFloat(document.getElementById("temperaturaCelsius").value);
   const temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;
   document.getElementById("temperaturaFahrenheit").textContent = "A temperatura em Fahrenheit é: " + temperaturaFahrenheit.toFixed(2);
 }
 
 // Função para calcular a média aritmética entre 3 notas
 function calcularMedia() {
   const nota1 = parseFloat(document.getElementById("nota1").value);
   const nota2 = parseFloat(document.getElementById("nota2").value);
   const nota3 = parseFloat(document.getElementById("nota3").value);
   const media = (nota1 + nota2 + nota3) / 3;
   document.getElementById("media").textContent = "A média das notas é: " + media.toFixed(2);
 }
 
 // Função para calcular as raízes de uma equação do segundo grau
 function calcularRaizes() {
   const valorA = parseFloat(document.getElementById("valorA").value);
   const valorB = parseFloat(document.getElementById("valorB").value);
   const valorC = parseFloat(document.getElementById("valorC").value);
 
   const delta = Math.pow(valorB, 2) - 4 * valorA * valorC;
 
   if (delta > 0) {
     const x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
     const x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
     document.getElementById("raizes").textContent = "As raízes da equação são: x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2);
   } else if (delta === 0) {
     const x = -valorB / (2 * valorA);
     document.getElementById("raizes").textContent = "A equação possui uma raiz real: x = " + x.toFixed(2
 