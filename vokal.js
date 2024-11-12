//: a, e, i, o, u, y, æ, ø, å.
const vokal = "a, A, e, E, I, i o, O, u, U, Y, y";

function sjekkBokstav(bokstav) {
  bokstav.toLowerCase();
  if ("aeiouåæø".includes(bokstav)) {
    console.log("true");
  } else {
    console.log("false");
  }
}
sjekkBokstav("A");
