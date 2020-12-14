//评测题目: 无
// '4534543535435646546456213' '34546456546567547'
//         '34546456546567547'  
function add(a, b){
    let carry = 0;
    let l1 = a.length, l2 = b.length;
    if (l1 < l2) {
      let c = b;
      b = a;
      a = c;
    }
    let offset = Math.abs(l1-l2);
    console.log(offset)
    let ret = '';
    for (let i = Math.max(l1, l2) - 1;i >= 0;i --) {
      let b1 = 0;
      if (i - offset < 0) {
        b1 = 0;
      } else {
        b1 = parseInt(b[i-offset]);
      }
      let tmp = parseInt(a[i]) + b1 + carry;
      carry = tmp > 9 ? 1 : 0;
      ret = (tmp > 9?tmp-10:tmp) + ret;
    }
    
    return carry > 0? "1" + ret:ret;
  }

console.log(add('4534543535435646546456213', '34546456546567547'));
