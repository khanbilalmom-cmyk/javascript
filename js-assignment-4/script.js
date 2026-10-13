let age = 18;
let paidfee = true;
if (age >= 18) {
  console.log("allowed");
} else {
  console.log("not allowed");
}

let emailcorrcet = false;
let phonecorrcet = true;
let loginallowed = emailcorrcet || phonecorrcet;
console.log("loginallowed", loginallowed);

// let isblock = false;
// let accessallowed = !isblock;
// console.log(accessallowed);

let isBlock = true;
if (isBlock != false) {
  console.log("access allowed", isBlock);
}

let isloggedin = true;
let ispremium = false;
let hascoupon = true;
let specialdiscount = isloggedin && (ispremium || hascoupon);
console.log("special disount", specialdiscount);

age = 16;
feepaid = true;
let pratice = age >= 16 && feepaid;
console.log("exam allowed", pratice);

