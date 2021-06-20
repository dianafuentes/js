/*
Dry programming
 - reduce the repetition of code in a program
 - loops help you write dry code
 -JavaScript functions embrace the DRY principle
 */

quiz 
1. choose the one that is NOT an infinite loop
  for (let i = 0; i += 100){
    console.log(i);
  }
2. which of the following statements forces the JavaScript engine to exit a loop even when the loop condition is still true? 
  break; 

3. How many times will the following loop run? 
  for (let j = 0; j<= 100; j += 10){
    console.log(j);
  }
    ***because the test condition includes the value 100(j<=100), the loop will work 
        for the follwoing values of j:0,10,20,30,40,50,60,70,80,90,100. therefore it runs 11 times
4. What causes an infinite loop? 
  when the loop condition never evaluates to false. 

The code in script.js logs all even numbers (from 2 to 24) to the JavaScript console. There seems to be a lot of redundant code in the file. Rewrite (or refactor) the code using a loop.

  for(let i = 2; i <= 24; i += 2){
    console.log(i);
  }
