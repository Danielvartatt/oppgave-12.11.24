function måneder(måneder) {
  switch (måneder) {
    case "Desember":
      console.log(måneder, " er en Vinter månede");
      break;
    case "Januar":
      console.log(måneder, " er en Vinter månede");
      break;
    case "Februar":
      console.log(måneder, " er en Vinter månede");
      break;
    case "Mars":
      console.log(måneder, " er en Vår månede");
      break;
    case "April":
      console.log(måneder, " er en Vår månede");
      break;
    case "Mai":
      console.log(måneder, " er en Vår månede");
      break;
    case "Juni":
      console.log(måneder, " er en Sommer månede");
      break;
    case "Juli":
      console.log(måneder, " er en Sommer månede");
      break;
    case "August":
      console.log(måneder, " er en Sommer månede");
      break;
    case "September":
      console.log(måneder, " er en Høst månede");
      break;
    case "Oktober":
      console.log(måneder, " er en Høst månede");
      break;
    case "November":
      console.log(måneder, " er en Høst månede");
      break;

    default:
      console.log(
        måneder,
        " er ingen måned som heter det. Husk det er key sensitive"
      );
  }
}
//den er key sensetive
måneder("Desemeber");
