{
let a, b, result;

a = 0;
b = 1;
result = b;
// result = a + b;

for(let i = 1;i < 30;i++) {
  
  let out1 = document.querySelector('.output1');
  out1.innerHTML += result+ '<br/>';
  
  result = a + b;
  a = b;
  b = result;  
}

}

{
  let a, b, result;
  
  a = 514229;
  b = 832040;
  // result = 832040;
  result = b;
  
  for(let i = 30 ;i < 60;i++) {
    
    let out2 = document.querySelector('.output2');
    out2.innerHTML += result+ '<br/>';
    
    result = a + b;
    a = b;
    b = result;  
  }
  
  }

  {
    let a, b, result;
    
    a = 956722026041;
    b = 1548008755920;
    result = b;
    // result = a + b;
    
    for(let i = 60;i < 90;i++) {
      
      let out3 = document.querySelector('.output3');
      out3.innerHTML += result+ '<br/>';
      
      result = a + b;
      a = b;
      b = result;  
    }
    
    }


let i;
let fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 20; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}