import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


//Private
function _draw() {
  let temp = ProxyState.currentWeather.main.temp
  let celsius  = Math.floor((temp * 9/5) + 32)
  let fahrenheit = Math.floor((temp - 32) * 5/9)
  let wxInfo = ProxyState.currentWeather
  console.log(fahrenheit,"**")
  console.log(temp)
  document.getElementById("display-weather").innerHTML = `Todays Weather :
   TEMP:${fahrenheit} F <BR> WIND: ${wxInfo.wind.speed} <BR><h4>City: ${wxInfo.name}</h4>`


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


