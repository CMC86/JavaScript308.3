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
