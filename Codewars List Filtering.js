// List with nonnegative numbers and strings -> list with only the numbers
function filter_list(l) {
  return l.filter(x => typeof x == "number")
}
