function checkSpam(str) {
  str = str.toLowerCase();
  let p1 = "1XbeT", p2 = 'XXX';
  return str.includes(p1.toLowerCase()) || str.includes(p2.toLowerCase());
}
 