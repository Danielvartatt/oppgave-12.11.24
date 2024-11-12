function dagen(dager) {
  switch (dager) {
    case "0":
      console.log("er en Viktig dag i starten på uken");
      break;
    case "1":
      console.log("det er starten på uken");
      break;
    case "2":
      console.log("det er midt i uken");
      break;
    case "3":
      console.log("det er snart helg");
      break;
    case "4":
      console.log("er en kjempe bra dag");
      break;
    case "5":
      console.log("er en grei dag");
      break;
    case "6":
      console.log("er en sakte dag");
      break;
    default:
      console.log("Ugyldig dags melding");
  }
}

//eksempel på hvordan man kan sette opp en melding på func kan man dendre (argumentet)< dagen("5"); til  dagen("3"); for å få en ny melding

console.log("kan du beskrive søndagen? ja det er en"), dagen("5");
