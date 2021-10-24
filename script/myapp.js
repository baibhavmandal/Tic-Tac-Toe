const bxa = document.querySelectorAll(".bxa");
const bxb = document.getElementsByClassName("bxb");
const bxc = document.getElementById("bxc");
const baab = document.getElementById("baab");

var bxcvalue = 1;
var bxavalue = new Array(2);

bxc.innerHTML = bxcvalue;

bxb[0].addEventListener("click", () => {
  if (bxcvalue > 1) {
    bxcvalue -= 2;
    bxc.innerHTML = bxcvalue;
  } else if ((bxcvalue = 1)) {
    bxcvalue = 1;
    bxc.innerHTML = bxcvalue;
  }
});

bxb[1].addEventListener("click", () => {
  if (bxcvalue < 9) {
    bxcvalue += 2;
    bxc.innerHTML = bxcvalue;
  } else if ((bxcvalue = 9)) {
    bxcvalue = 9;
    bxc.innerHTML = bxcvalue;
  }
});

baab.addEventListener("click", () => {
  bxavalue[0] = bxa[0].value;
  bxavalue[1] = bxa[1].value;

  var allvalues = [bxavalue, bxcvalue];

  sessionStorage.setItem("sendvalues", JSON.stringify(allvalues));

  window.location.assign("./pages/test.html");
});
