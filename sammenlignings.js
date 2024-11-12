function sjekkTekst(tekst) {
  tekst.toLowerCase();
  if ("å gå på isen er farlig".includes(tekst)) {
    console.log("true");
  } else {
    console.log("false");
  }
}
sjekkTekst("å gå på iSen er farlig");
