




const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Arlington%20WA?unitGroup=us&key=U2JTGX8W6GCJJRMTT5UWTCGQN&contentType=json";

const getWeather = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    let t = data.currentConditions.temp;
    document.querySelector('#temperature').textContent = t;

    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;

    document.querySelector("#windSpeed").textContent = data.currentConditions.windspeed;

    document.querySelector("#weather-icon").src = image;
    document.querySelector('#weather-icon').alt= data.currentConditions.conditions + ' icon';

    const windChill = document.body.querySelector("#windChill");
    
    document.querySelector("#condition").innerHTML = data.currentConditions.conditions;

    let currentTemp = t;

    let currentWindSpeed = data.currentConditions.windspeed;


    if (currentTemp <= 50 && currentWindSpeed > 3){
        windChill.innerHTML = Math.round((35.74 + (0.6215 * currentTemp))-(35.75 * Math.pow(currentWindSpeed,0.16)) + (0.4275*currentTemp*Math.pow(currentWindSpeed,0.16)));
        
    }else{
        windChill.textContent = "N/A";
        document.querySelector("#degree").innerHTML = "";
        document.querySelector("#f").innerHTML = "";
    }
  };
getWeather();