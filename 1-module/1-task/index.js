function factorial(n) {
  if (n == 0 || n == 1){
    return ("Факториал "+ n +": равен 1");
  } else {
    let i = 1;
    for(; i < n; i++) {
     c = n*(n - i); 
     print(c); 
    }  
    return ("Факториал "+ n +": равен " + c);
  }
} 
