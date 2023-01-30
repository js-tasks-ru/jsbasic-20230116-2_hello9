function factorial(n){
 let sum = 1;
 for (let i = 0; i < n; i++){
   sum = sum * (i+1);
 } 
  return sum;
}