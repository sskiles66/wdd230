const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fairbanks%2C%20Alaska?unitGroup=us&key=U2JTGX8W6GCJJRMTT5UWTCGQN&contentType=json";

const getWeather = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = t.toFixed(1);

    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;

    document.querySelector("#ws").textContent = data.currentConditions.windspeed;

    document.querySelector("#weather_icon").src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';
  };
getWeather();

