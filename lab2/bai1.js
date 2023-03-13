//nhap a b c
var a = parseInt(prompt("nhap a :"));
var b = parseInt(prompt("nhap b :"));
var c = parseInt(prompt("nhap c :"));

//kiem tra neu a == 0 of a!=0
if (a == 0) {
  let x = -c / b;
  console.log("phuong trinh co 1 nghiem: " + x);
} else {
  //a#0
  let delta = Math.pow(b, 2) - 4 * a * c;
  //kiem tra dieu kien delta

  if (delta < 0) {
    console.log("phuong trinh vo nghiem");
  } else if (delta == 0) {
    let x = -b / (2 * a);
    console.log("phuong trinh co nghiem kep: " + x);
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(
      "phuong trinh co 2 nghiem phan biet: x1 = " + x1 + ", x2 = " + x2
    );
  }
}
