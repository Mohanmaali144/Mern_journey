function check() {
  //   let reg = /hello/g; //g is a flag it is globle
  //   reg = /hello/i; // Case insenistive

  let reg = /hello/;
  reg = /hii/g;
  let str = "hii hellO friends, i am coder hii ";
  // let text = str.search(/am/);
  //   console.log(reg.source);

  //   console.log(reg.exec(str));
  //   console.log(reg.exec(str));
  //   console.log(reg.exec(str));

  // console.log(reg.test(str))
  // test() -----> return true if string pattern matched
  //  match() ----> return array or null

  // console.log(reg.match(str)) //  wrong  synatx

  // console.log(str.match(reg));   // this is rite

  //   console.log(str.search(reg)); // return index of first match
  //   console.log(str.search(reg)); // if not match any string then it will return -1

  console.log(str.replace(reg, "programmer")); // it will return new string which is change else not match any str then it rturn old string
}
check();
