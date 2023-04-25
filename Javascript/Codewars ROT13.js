function rot13(str) {
  return str.split('').map(char => {
    if(char.match(/[a-mA-M]/)) {
        return String.fromCharCode(char.charCodeAt(0) + 13);
    }
    else if(char.match(/[n-zN-Z]/)){
        return String.fromCharCode(char.charCodeAt(0) - 13);
    }
    return char;
  }).join('');
}
