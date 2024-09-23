console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let index = 1; index <= 100; index++) {
  if (index % 2 == 0) {
    continue;
    
  } else {
    console.log(index);
  }

}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let num = 1; num < 101; num++) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FIZZBUZZ");
    
  } else if (num % 3 == 0) {
    console.log("FIZZ");
    
  } else if (num % 5 == 0) {
    console.log("BUZZ");
    
  }else{
    console.log(num);
    
  }
  
}

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
let i = 1;
do {
  console.log(i);
  i++;
  
} while (i <= 100);

console.log("------------------------");
let j = 1
while (j <= 100) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log("FizzBuzz");

    } else if (j % 3 === 0) {
        console.log("Fizz");

    } else if (j % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(j);
    }
    j++;
}

console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
found = false;

for (let index = 0; index <= n; index++) {
  if (index == value) {
    console.log(`Found value! The value is ${value}`);
    found = true;
    break;
  }

}
if (found == false) {
  console.log("Did not find value");
}

console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let x = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let number = start; number < x; number++) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FIZZBUZZ");
    
  } else if (number % 3 == fizzDivisor) {
    console.log("FIZZ");
    
  } else if (number % 5 == buzzDivisor) {
    console.log("BUZZ");
    
  }else{
    console.log(number);
    
  }
  
}