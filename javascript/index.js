setInterval(function () {
  let coloradoSpringsElement = document.querySelector("#colorado-springs");
  let coloradoSpringsDateElement =
    coloradoSpringsElement.querySelector(".date");
  let coloradoSpringsTimeElement =
    coloradoSpringsElement.querySelector(".time");
  let coloradoSpringsTime = moment().tz("America/Denver");

  coloradoSpringsDateElement.innerHTML = moment().format("MMMM Do YYYY");
  coloradoSpringsTimeElement.innerHTML = `${coloradoSpringsTime.format(
    "hh:mm:ss"
  )} <small>${coloradoSpringsTime.format("A")}</small>`;

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "hh:mm:ss"
  )} <small>${parisTime.format("A")}</small>`;
}, 1000);
