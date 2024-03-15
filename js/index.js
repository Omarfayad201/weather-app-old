
let Contant = document.querySelector("#cont-jv");

 let pageHid = document.querySelector("#page-form");

let AllPage = document.querySelector("#all-page");

let repBtn = document.querySelector("#replay-ptn");

let ppt = document.getElementById("search-input");

let buton = document.querySelector("#buton"); 


async function Data() {
  let apiResponse = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q= ${ppt.value}&days=3`
  );

  let finalResult = await apiResponse.json();
  let location = finalResult.location;
  let current = finalResult.current;

  let forecast = finalResult.forecast.forecastday;

let icon = finalResult.current.condition.icon;
  
  
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const Days = ["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];



  let dateString = new Date(forecast[0].date);
  let month = months[dateString.getMonth()];
  let day = Days[dateString.getDay() + 1];
  dateString.getDate();
  dateString.getDay();
  

  let dateString2 = new Date(forecast[1].date);
  let month2 = months[dateString2.getMonth()];
  let day2 = Days[dateString2.getDay() + 1];
  dateString2.getDate();
  dateString2.getDay();
  
  let dateString3 = new Date(forecast[2].date);
  let month3 = months[dateString3.getMonth()];
  let day3 = Days[dateString3.getDay() + 1];
  dateString3.getDate();
  dateString3.getDay();
  

  for (let i = 0; i < forecast.length; i++) {}

  let NextDay = forecast[1];

  let thirdDay = forecast[2];

  let box = ``;
  box = `<p class="text-start ps-4">${location.name}</p>
<div class="icon d-flex">

<h2 class="text-start ps-5 text-light">${current.temp_c}c</h2>
<img src="http:${icon}" alt="">

</div>

<p class="ps-5 text-start text-primary">${current.condition.text}</p>


`;
  document.querySelector("#country").innerHTML = box;

  let box2 = ``;

  box2 = `<img class="m-5" src="http:${NextDay.day.condition.icon}" alt="" srcset="">
<h2 class="fs-4">${NextDay.day.maxtemp_c}</h2>

<h3 class="fs-4 text-light">${NextDay.day.mintemp_c}</h3>

<p>${NextDay.day.condition.text}</p>`;

  document.querySelector(".info-card").innerHTML = box2;

  let box3 = ``;
  box3 = `  <img class="m-5" src="http:${thirdDay.day.condition.icon}" alt="" srcset="">
<h2 class="fs-4">${thirdDay.day.maxtemp_c}</h2>
<h3 class="fs-4 text-light">${thirdDay.day.mintemp_c}</h3>
<p>${thirdDay.day.condition.text}</p>`;
  document.querySelector(".third-day").innerHTML = box3;

  
 let infoData = `<h4>${day}</h4>
<p>${dateString.getDate() + month}</p>`;

  document.querySelector(".days-card").innerHTML = infoData;

 
  let infoData2 = `<h4>${day2}</h4>`;

  document.querySelector(".head-2card").innerHTML = infoData2;


  let infoData3 = `<h4>${day3}</h4>`;
  document.querySelector(".days3-card").innerHTML = infoData3;

}

buton.addEventListener("click", function () {
  Data();

})

function ContactDisplay() {
  pageHid.style.display = "block";
  AllPage.style.display = "none";
}

Contant.addEventListener("click", function () {
    
ContactDisplay();

});


function replayHome() {

pageHid.style.display = "none";
AllPage.style.display = "block";

}

repBtn.addEventListener('click', function () {

replayHome();
})




