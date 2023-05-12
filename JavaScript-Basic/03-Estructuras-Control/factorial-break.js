
let i = 0;
let sum = 1;
while (true) {
 console.log(`Factorial: ${i} : ${sum}`);
  i++;
  sum = sum  * i;
 if (i == 11) {
  break;
 }
}