const temp = document.body.querySelector("#temperature");

const windSpeed = document.body.querySelector("#windSpeed");

const windChill = document.body.querySelector("#windChill");

let currentTemp = 30;

let currentWindSpeed = 8;

temp.innerHTML = currentTemp;

windSpeed.innerHTML = currentWindSpeed;

if (currentTemp <= 50 && currentWindSpeed > 3){
    windChill.innerHTML = Math.round((35.74 + (0.6215 * currentTemp))-(35.75 * Math.pow(currentWindSpeed,0.16)) + (0.4275*currentTemp*Math.pow(currentWindSpeed,0.16)));
    
}else{
    windChill.textContent = "N/A";
    document.querySelector("#degree").innerHTML = "";
    document.querySelector("#f").innerHTML = "";
}