function gap(g, m, n) {
  if(g > n - m) {
    return null;
  }

  let primes = [2];
  let lastPrime = 2;
  for(let i = 3; i * i <= n; i+=2) {
      const countFactors = primes.filter(k => k ** 2 <= i).filter(y => i % y === 0).length;
    if(countFactors === 0) {
      primes.push(i);
    }
  }
  
  for(let i = m; i <= n; i++) {
    const countFactors = (primes.filter(k => k ** 2 <= i)).filter(y => i % y === 0).length;
    if(countFactors === 0 ){
      if(i - lastPrime === g) {
        return [lastPrime, i];
      }
      lastPrime = i;
    }
  }
  return null;
}
