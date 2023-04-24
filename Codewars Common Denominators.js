function convertFrac(rationals){
  const denoms = rationals.map(([a,b]) => b);
  const denomProduct = denoms.reduce((a, b) => a * b, 1) 
  
  const gcd = findGCD(denoms);
  const lcm = Math.round(denomProduct / gcd);
  
  let commonDenoms = rationals.map(([a,b]) => [a * lcm / b, lcm]);
  
  let newNums = commonDenoms.map(([a,b]) => a);
  newNums.push(lcm) // Check for common divisors of numerators and denominator
  const numGCD = findGCD(newNums);
  
  commonDenoms = commonDenoms.map(([a,b]) => [a / numGCD, b / numGCD])

  return commonDenoms.reduce((acc, cur) => acc + `(${cur.toString()})`, "") 
}

function findGCD(values) {
  if(values.length === 1) {
    return values[0];
  }
  
  let remainder = 1;
  let a = values[0]
  let b = values[1]
  
  while(remainder > 0) {
    let quotient = parseInt(a / b);
    remainder = a - b * quotient;
    a = b;
    b = remainder;
  }
  
  values[1] = a;
  return findGCD(values.slice(1));
}
