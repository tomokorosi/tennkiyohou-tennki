document.addEventListener("DOMContentLoaded", function() {
    const weatherElement = document.getElementById("weather");
    const citySelect = document.getElementById("citySelect");

    // 仮想の天気データ（3日分）
    const weatherData = {
        tokyo: [
            {
                day: "today",
                weather: "晴れ",
                tempMax: "10℃",
                tempMin: "2℃",
                icon: "sunny.png"
            },
            {
                day: "sat",
                weather: "曇り",
                tempMax: "9℃",
                tempMin: "2℃",
                icon: "kumo.png"
            },
            {
                day: "san",
                weather: "晴れ",
                tempMax: "10℃",
                tempMin: "1℃",
                icon: "sunny.png"
            }
        ],
        saitama: [
            {
                day: "today",
                weather: "曇り",
                tempMax: "8℃",
                tempMin: "1℃",
                icon: "kumo.png"
            },
            {
                day: "sat",
                weather: "晴れ",
                tempMax: "11℃",
                tempMin: "2℃",
                icon: "sunny.png"
            },
            {
                day: "san",
                weather: "曇り",
                tempMax: "9℃",
                tempMin: "0℃",
                icon: "kumo.png"
            }
        ],
        chiba: [
            {
                day: "today",
                weather: "晴れ",
                tempMax: "10℃",
                tempMin: "2℃",
                icon: "sunny.png"
            },
            {
                day: "sat",
                weather: "晴れ",
                tempMax: "10℃",
                tempMin: "2℃",
                icon: "sunny.png"
            },
            {
                day: "san",
                weather: "曇り",
                tempMax: "10℃",
                tempMin: "2℃",
                icon: "kumo.png"
            }
        ]
    };

    // 最初に表示する天気情報（東京）
    displayWeather("tokyo");

    // 都市が選択された時に天気情報を表示
    citySelect.addEventListener("change", function() {
        const selectedCity = citySelect.value;
        displayWeather(selectedCity);
    });

    // 天気情報を表示する関数
    function displayWeather(city) {
        const data = weatherData[city];
        let forecastHTML = `<div class="city">${city.toUpperCase()}の天気予報</div>`;
        
        // 3日分の天気を表示
        let forecastDays = data.map((dayData) => {
            return `
                <div class="forecast-day">
                    <img src="${dayData.icon}" alt="${dayData.weather}のアイコン">
                    <p><strong>${dayData.day}</strong></p>
                    <p>${dayData.weather}</p>
                    <p>最高気温: ${dayData.tempMax}</p>
                    <p>最低気温: ${dayData.tempMin}</p>
                </div>
            `;
        }).join("");

        // 3日分の天気を表示
        forecastHTML += `<div class="forecast">${forecastDays}</div>`;
        weatherElement.innerHTML = forecastHTML;
    }
});
