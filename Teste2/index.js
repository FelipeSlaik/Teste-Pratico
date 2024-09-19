// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function isFibonacciNumber (number){
    if (number < 0){
        return console.log("Não existe número negativo na sequência de Fibonacci");
    }

    fibonacci = [0, 1];

    for (i = 2; i < number; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    
    if(!fibonacci.includes(number)){
        return console.log(`${number} Não está na sequência de Fibonacci!`);
    }
        return console.log(`${number} Está na sequência de Fibonacci!`);
}
    

const number = 144;
const numberFibonacci = isFibonacciNumber(number);

