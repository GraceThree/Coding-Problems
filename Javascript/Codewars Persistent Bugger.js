//Convert to array of digits, fold until small enough
function persistence(num) {
   let out = 0;
    while(num>=10){
      let numA = Array.from(String(num), Number);
      num = numA.reduce((acc,cur) => acc * cur, 1);
      out += 1;
    }
   return out; 
}
