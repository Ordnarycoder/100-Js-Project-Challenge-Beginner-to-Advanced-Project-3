const readline = require('readline');

function prime_check() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please enter a number: ", (number) => {
        number = parseInt(number);

        if (number === 0 ) {
            console.log("0 is not prime!");
        } else if( number ===1){
            console.log("1 is not prime!");

        } else if (number < 0) {
            console.log("Please enter a positive number");
        } else {
            console.log("Prime Number Checker:");
            let i = 2;
            let isPrime = true;

            while (i < number) {
                if (number % i === 0) {
                    console.log("It's not a prime number");
                    isPrime = false;
                    break;
                }
                i++;
            }

            if (isPrime) {
                console.log("It's a prime number");
            }
        }

        rl.close();
    });
}

prime_check();
