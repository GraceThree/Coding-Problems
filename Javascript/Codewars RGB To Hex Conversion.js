function rgb(r, g, b){

  let rhex = toHex(r);
  let ghex = toHex(g);
  let bhex = toHex(b);
  return rhex + ghex + bhex
}

// Converts int to two digit hex
function toHex(n) {
  if(n <= 0) {
    return "00";
  }
  if(n >= 255) {
    return "FF";
  }
  return ((Math.floor(n / 16) % 16).toString(16) + (n % 16).toString(16)).toUpperCase()
}
