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

// Part 3: Feeling Loopy
const csvString1 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
const csvString2 = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let csvHtml = "<thead><tr><th>ID</th><th>Name</th><th>Occupation</th><th>Age</th></tr></thead><tbody>";
let csvOutput = "Part 3: Feeling Loopy\n";

let rows1 = csvString1.split("\n");
for (let row of rows1) {
    if (row === csvString1.split("\n")[0]) continue; // Skip the header row
    let cells = row.split(",");
    csvHtml += `<tr><td>${cells[0]}</td><td>${cells[1]}</td><td>${cells[2]}</td><td>${cells[3]}</td></tr>`;
    csvOutput += cells.join(", ");
    csvOutput += "\n";
    if (cells[0] === "63") break; // Break loop when ID is 63
}

let rows2 = csvString2.split("\n");
for (let row of rows2) {
    if (row === csvString2.split("\n")[0]) continue; // Skip the header row
    let cells = row.split(",");
    csvHtml += `<tr><td>${cells[0]}</td><td>${cells[1]}</td><td>${cells[2]}</td><td>${cells[3]}</td></tr>`;
    csvOutput += cells.join(", ");
    csvOutput += "\n";
    if (cells[0] === "7") break; // Break loop when Index is 7
}
csvHtml += "</tbody>";
document.getElementById("csvDataTable").innerHTML = csvHtml;
console.log(csvOutput);

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
