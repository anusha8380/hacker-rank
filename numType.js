'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
// process.stdout.resume();
// process.stdout.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

process.stdout.on('data', function(inputStdout) {
    inputString == inputStdout;
});

process.stdout.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine().trim(), 10);
    const W = "Weird";
    const NW = "Not Weird";
    if (N > 2 && N < 5) {
        if ((N % 2) == 0) {
            console.log(NW);
        } else if ((N % 2) != 0) {
            console.log(W)
        }
    } else if ((N % 2) != 0) {
        console.log(W)
    } else if (N > 6 && N <= 20){
         console.log(W)
    } else if (N > 20){
        console.log(NW)
    }
}
