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
function validateForm() {
  let firstName = document.forms["memberForm"]["firstName"].value;
  console.log(firstName);
  hash = window.location.hash.substr(1);
  var reg = new RegExp("^[0-9]$");
  if (firstName == "") {
    console.log(firstName);
    alert("Bạn phải điền họ và tên");
    return false;
  } else if (
    // có bao gồm số không
    /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/.test(firstName)
  ) {
    alert("bạn phải điền chữ ");
    return false;
  }
  let subject = document.forms["memberForm"]["subject"].value;
  console.log(subject);
  if (subject == "") {
    console.log(subject);
    alert("Bạn phải điền mô tả bản thân ");
    return false;
  }
}
