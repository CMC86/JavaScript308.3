// Part 1: Fizz Buzz
let fizzBuzzHtml = "<thead><tr><th>Number</th><th>Output</th></tr></thead><tbody>";
let fizzBuzzOutput = "Part 1: Fizz Buzz\n";
for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    fizzBuzzHtml += `<tr><td>${i}</td><td>${output || i}</td></tr>`;
    fizzBuzzOutput += output || i;
    fizzBuzzOutput += "\n";
    if (i === 15) break; // using break to stop at number 15
}
fizzBuzzHtml += "</tbody>";
document.getElementById("fizzBuzzTable").innerHTML = fizzBuzzHtml;
console.log(fizzBuzzOutput);

// Part 2: Prime Time
let n = 4; // Change this to any number
let primeNumberHtml = "<thead><tr><th>Next Prime Number after</th><th>Prime Number</th></tr></thead><tbody>";
let primeNumberOutput = "Part 2: Prime Time\n";
while (true) {
    if (isPrime(n)) {
        primeNumberHtml += `<tr><td>${n - 1}</td><td>${n}</td></tr>`;
        primeNumberOutput += n;
        primeNumberOutput += "\n";
        break;
    }
    n++;
    if (n > 20) break; // using break to stop searching if n exceeds 20
}
primeNumberHtml += "</tbody>";
document.getElementById("primeNumberTable").innerHTML = primeNumberHtml;
console.log(primeNumberOutput);
