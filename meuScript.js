/*alert('Esse é o meu primeiro Alert');
console.log('Esse é o meu primeiro console.log');
alert('5 vezes 5 é igual a ' +5*5);
console.log('O resultado de (5 + 10) * 2 é ', (5 + 10)*2);*/

/*EXERCÍCIO: COM BASE NO CÓDIGO ANTERIOR, FAÇA UM ALGORITMO QUE
RECEBE DOIS NÚMEROS E INFORMA QUAL O MAIOR.*/

alert('Verifique qual o número maior!')
let num1 = Number(window.prompt("Digite o primeiro número:"));
let num2 = Number(window.prompt("Digite o segundo número:"));
if(num1 > num2){
    alert(`O número ${num1} é o maior.`);
}else{
    alert(`O número ${num2} é o maior.`);
}