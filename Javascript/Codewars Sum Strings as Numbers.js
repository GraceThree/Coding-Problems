function sumStrings(a,b) {
  let l = Math.max(a.length, b.length);
  a = "0".repeat(l - a.length) + a;
  b = "0".repeat(l - b.length) + b;
  let output = "";
  let carry = 0;
  for(i = l - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry;
    if(sum >= 10) {
      carry = 1;
    }
    else {
      carry = 0;
    }
    output = `${sum % 10}` + output;
  }
  if(carry){
    return clean("1" + output);
  }
  return clean(output);
}

function clean(str) {
  for(i = 0; i < str.length; i++){
    if(str[i] != '0'){
      return str.slice(i);
    }
  }
  return "0";
}
