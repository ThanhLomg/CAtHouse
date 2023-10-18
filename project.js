function validateForm() {
  const char = [
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "a",
    "s",
    "c",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
  ];
  let firstName = document.forms["memberForm"]["firstName"].value;
  console.log(firstName);
  if (firstName == "") {
    console.log(firstName);
    alert("Bạn phải điền họ và tên");
    return false;
  }
  for (const chars of char) {
    if (firstName == chars) {
      console.log(firstName);
      alert("Bạn phải điền chữ");
    }
  }
}
function validateForm() {
  let firstName = document.forms["memberForm"]["firstName"].value;
  console.log(firstName);
  if (firstName == "") {
    console.log(firstName);
    alert("");
    return false;
  }
}
function validateForm() {
  let firstName = document.forms["memberForm"]["firstName"].value;
  console.log(firstName);
  if (firstName == "") {
    console.log(firstName);
    alert("Bạn phải điền họ và tên");
    return false;
  }
}
function validateForm() {
  let firstName = document.forms["memberForm"]["subject"].value;
  console.log(firstName);
  if (firstName == "") {
    console.log(firstName);
    alert("Bạn phải điền mô tả bản thân ");
    return false;
  }
}