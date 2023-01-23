function ucFirst(str) {
let l = str.length;
  if (str[0]){
    str = str[0].toUpperCase() + str.slice(1, l);
    return  str;
  } else {
    return  str;
  }
}
