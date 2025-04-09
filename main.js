let tempNumber = document.getElementById("tempNumber");
let cityText = document.getElementById("cityText");
let time = document.getElementById("time");

// Description
let weatherInfo = document.getElementById("weatherInfo");
let tempMax = document.getElementById("tempMax");
let tempMin = document.getElementById("tempMin");
let wind = document.getElementById("wind");
let himd = document.getElementById("himd");

// Datani olamiz

const now = new Date();

// Sana (YYYY-MM-DD)
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0"); // Oy 0 dan boshlanadi
const day = String(now.getDate()).padStart(2, "0");
const todayDate = `${year}-${month}-${day}`;
console.log("Bugungi sana:", todayDate);

// Soat (HH:MM:SS)
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");
const seconds = String(now.getSeconds()).padStart(2, "0");
const currentTime = `${hours}:${minutes}:${seconds}`;
console.log("Hozirgi soat:", currentTime);

// API uchun

function getWeather() {
  const API_KEY = "9cae3167624aac128f82db1605892f84"; // Bu yerga o'z API key'ingizni yozing
  let city = document.getElementById("cityName").value.trim();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  if (city === "") {
    alert("Iltimos, shahar nomini kiriting.");
    return;
  }
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`
            
            <div>

                <p>Xatolik</p>

            </div>
            
            `);
      }
      return response.json();
    })
    .then((data) => {
      cityText.innerText = data.name;
      tempNumber.innerText = data.main.temp + "°C";
      time.innerHTML = currentTime + " " + todayDate;
      weatherInfo.innerText = data.weather[0].description;
      himd.innerText = data.main.humidity;
      wind.innerText = data.wind.speed;
      tempMax.innerText = data.main.temp_max;
      tempMin.innerText = data.main.temp_min;
      console.log(data);
    })
    .catch((error) => {
      console.error("Xatolik:", error.message);
    });
}
