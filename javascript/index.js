function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");
  }

  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("dddd Do, YYYY");
    berlinTimeElement.innerHTML = berlinTime.format("HH:mm:ss");
  }

  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    let torontoTime = moment().tz("America/Toronto");

    torontoDateElement.innerHTML = torontoTime.format("dddd Do, YYYY");
    torontoTimeElement.innerHTML = torontoTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let imgNames = ["new_york", "berlin", "london", "tokyo", "toronto", "paris"];
  let cityTime = moment().tz(cityTimeZone).format("HH:mm:ss");
  let cityDate = moment().tz(cityTimeZone).format("dddd Do, YYYY");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityImage = `clock`;
  if (imgNames.includes(cityTimeZone.split("/")[1].toLowerCase())) {
    cityImage = cityTimeZone.split("/")[1].toLowerCase();
  }

  /*cityTimeZone.split("/")[1].toLowerCase();*/

  let citiesElement = document.querySelector(".clocks");
  citiesElement.innerHTML = `
  <div class="city">
        <div class="time">${cityTime}</div>
        <div class="date">${cityDate}</div>
        <div class="clock-city">${cityName}</div>
        <div class="monument">
          <img src="/images/${cityImage}.png" />
        </div>
        
      </div>
      <div><a href="/">All Cities</a></div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);
