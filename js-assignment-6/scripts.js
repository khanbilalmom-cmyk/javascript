let role = prompt("enter your role (admin,manager,developer,inter)");
switch (role) {
  case "admin":
    alert("admin full system access");
    break;
  case "manager":
    alert("manager team management access");
    break;
  case "developer":
    alert("developer code access");
    break;
  case "inter":
    alert("inter means limited access");
    break;
  default:
    alert("invalid input,please try again");
}

let payment = prompt("choose payment method (credit, debit, upi,codi)");
switch (payment) {
  case "credit":
    alert("credit card selected for money pay");
    break;
  case "debit":
    alert("detbit card selected for money to pay");
    break;
  case "upi":
    alert("upi selected to pay a money");
    break;
  case "codi":
    alert("code slected to pay a money");
    break;
  default:
    alert("invalid input,please try again");
}

let orderstatus = prompt(
  "enter the order status (placed,packed,shipped,delivered,cancelled)",
);
switch (orderstatus) {
  case "placed":
    alert("your order are accept and processed");
    break;
  case "packed":
    alert("your order is packed and ready to ship");
    break;
  case "shipped":
    alert("your order is shipped and ready to dlivered on time");
    break;
  case "delivered":
    alert("your order delivered to enjoy ");
    break;
  case "cancelled":
    alert("your order is cancelled and soon t return your money");
    break;
  default:
    alert("invalid input,please try again");
}

let day = prompt("enter the day monday to sunday");
switch (day) {
  case "monday":
    alert("working day 9 to 4");
    break;
  case "tuesday":
    alert("working day 4 to 12");
    break;
  case "wednesday":
    alert("half day 8 to 12");
    break;
  case "thursday":
    alert("half day of work");
    break;
  case "friday":
    alert("holiday office closed");
    break;
  case "saturday":
    alert("holiday office closed");
    break;
  case "sunday":
    alert("rest day of work");
    break;
  default:
    alert("invalid input,please try again");
}
