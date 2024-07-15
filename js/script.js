/*
Step 1
stampa in console i numeri da 1 a 100 (compresi)

Step2
ogni multiplo di 3, stampa "Fizz"

Step3
Ogni multiplo di 5, stampa "Buzz"

Step4
Ogni multiplo di 3 E 5 stampa "FizzBuzz"

*/

for (let i = 1; i <= 100; i++) {

    /* 
    Se quando i = 3, E i = 5 il resto della divisione = 0
    Allora stampa FizzBuzz
    */

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    }

    /* 
    Se quando i = 3, il resto della divisione = 0
    Allora stampa Fizz
    */

    else if (i % 3 == 0) {
        console.log('Fizz');
    }

    /* 
    Se quando i = 5, il resto della divisione = 0
    Allora stampa Buzz
    */

    else if (i % 5 == 0) {
        console.log('Buzz');
    }

    /* 
    Altrimenti stampa solo il numero
    */

    else {
        console.log(i);
    }

};