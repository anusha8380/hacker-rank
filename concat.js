process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    let i = 4
    let d = 4.0
    let s = "HackerRank "
    // Declare second integer, double, and String variables.
    let a = parseInt(readLine()); let b = parseFloat(readLine()); let c = readLine(); a += i;

    // Read and save an integer, double, and String to your variables.
    b += d;
    c = s + c;

    // Print the sum of both integer variables on a new line.
   
    
    console.log(a); 
    console.log(b.toFixed(1)); 
    console.log(c);
    // The 's' variable above should be printed first.

}