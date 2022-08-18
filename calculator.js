function basicCalculator() {
  const buttons = document.getElementsByClassName("btn");
  const display = document.getElementById("display-area");
  for (const button of buttons) {
    button.addEventListener("click", function (event) {
      switch (event.target.value) {
        case "c":
          display.innerText = "";
          break;
        case "x":
          display.innerText = display.innerText.slice(0, -1);
          break;
        case "=":
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "error";
          }
          break;
        default:
          display.innerText += event.target.value;
      }
    });
  }
}
basicCalculator();
