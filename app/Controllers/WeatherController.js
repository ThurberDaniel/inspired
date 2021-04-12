import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


//Private
function _draw() {
  let fahrenheit = ProxyState.currentWeather.main.temp
  let Temp = (fahrenheit - 32) * 5/9;
  console.log(Temp)
  let WX = ProxyState.currentWeather;
  document.getElementById("display-weather").innerHTML = `Todays Weather :
   TEMP:${WX.main.temp} F <BR> WIND: ${WX.wind.speed} <BR><h3>City: ${WX.name}</h3>`


  }

//Public
export default class WeatherController {
  constructor() {
    ProxyState.on("currentWeather", _draw);

    this.addWeather()

  }

   async addWeather() {
    try {
      await weatherService.addWeather()
   } catch (error) {
       console.error(error)
   }
  }


  async switchWeather(){
    try {
        await weatherService.switchWeather()
    } catch (error) {
      console (error)
    }
  }
}


