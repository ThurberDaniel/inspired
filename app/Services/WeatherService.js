import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"

class WeatherService{
    
    async addWeather(){
        let result = await sandboxApi.get('/weather')
        ProxyState.currentWeather = result.data
    }


    async switchWeather(){
        console.log("Weather SERV")
    }


}

export const weatherService = new WeatherService








