Array.prototype.sameStructureAs = function (other) {
  if(this.length !== other.length) {
    return false;
  }
  for(let i = 0; i < this.length; i++) {
    if(isArray(this[i])) {
      let temp = this[i].sameStructureAs(other[i]);
      if(!temp) {
        return false;
      }
    }
    if(!(isArray(this[i]) === isArray(other[i]))) {
      return false;
    }
  }
  return true;
};
