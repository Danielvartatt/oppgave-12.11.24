function fjern(arr) {
  return arr.slice(1, arr.length - 1);
}
const imput = ["sol", "vind", "regn", "snø"];
let resultat = fjern(imput);
console.log(resultat);
