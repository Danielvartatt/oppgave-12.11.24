//const age = -12;
function alder(num) {
  if (num > 130 || num < 0) {
    console.log(num, "is older than 130 and is most likely false");
  } else if (num > 65) {
    console.log("Pensjonist");
  } else if (num >= 20) {
    console.log("Voksen");
  } else if (num >= 19 || age >= 13) {
    console.log("Tenåring");
  } else {
    console.log("Barn");
  }
}
alder(24);
