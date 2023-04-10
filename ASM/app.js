const itemSize = document.querySelectorAll(
  "content .container #list-products .product .size .item"
);

const activeSize = (e) => {
  // xóa toàn bộ nút bấm đã active trước đó
  itemSize.forEach((e) => {
    if (e.classList.contains("active")) {
      e.classList.remove("active");
    }
  });

  // active nút bấm hiện tại
  e.target.classList.add("active");
};
itemSize.forEach((e) => {
  e.addEventListener("click", activeSize);
});

// Kiểm tra email hợp lệ
const checkEmailValid = (e) => {
  let value = e.target.value;
  let form = document.querySelector(
    "footer .container .footer-box:nth-child(3) ul li form"
  );
  const pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (value.match(pattern)) {
    form.classList.add("success");
    form.classList.remove("error");
  } else {
    form.classList.add("error");
    form.classList.remove("success");
  }
};
const email = document.getElementById("email");
console.log(email);
email.addEventListener("keyup", checkEmailValid);

function dongho() {
  var today = new Date();
  var gio = today.getHours();
  var phut = today.getMinutes();
  var giay = today.getSeconds();

  if (gio < 10) {
    gio = "0" + gio;
  }
  if (phut < 10) {
    phut = "0" + phut;
  }
  if (giay < 10) {
    giay = "0" + giay;
  }
  document.getElementById("time").innerHTML = gio + ":" + phut + ":" + giay;
  setTimeout("dongho()", 1000);
}
dongho();
