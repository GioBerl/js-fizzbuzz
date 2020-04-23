// Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// al posto dei multipli di 3 stampi "Fizz"
// al posto dei multipli di 5 stampi "Buzz"
// al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) {
        console.log(i, "FizzBuzz");
    } else if (i % 5 == 0) {
        console.log(i, "Buzz");
    } else if (i % 3 == 0) {
        console.log(i, "Fizz");
    } else {
        console.log(i, i);
    }
}
