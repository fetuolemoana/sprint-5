// LOOPING A TRIANGLE 
for (let i = "#"; i.length < 8; i = i + "#") { 
  console.log(i); 
}; 
// FIZZBUZZ
for (i = 1; i <= 100; i++) { 
  if (i % 3 != 0 && i % 5 != 0) {
    console.log(i); 
  }
  else if (i % 3 == 0 && i % 5 == 0) {
  console.log("FizzBuzz");
}
  else if (i % 3 == 0) {
    console.log("Fizz");
}
else if (i % 5 == 0) {
  console.log("Buzz"); 
}
}
