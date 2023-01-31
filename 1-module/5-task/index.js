function truncate(str, maxlength) {
  let l = str.length;
  if (l > maxlength){
    return (str.slice(0, maxlength - 1) + '…');
  } else{
    return (str);
  }
}
 