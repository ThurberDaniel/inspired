export default class Weather{
    constructor({id,main,description, name, wind}){
        this.id = id
        this.main = main
        this.description = description
        this.complete = true
        this.name = name
        this.wind = wind
    }
    get wTemplate(){
        return `
            <div class="shadow" onclick="app.weatherController.switchTemp()">
            <h4>City :${this.name}</h4>
            <h5>Current Weather</h5>
            </div>
        `
    }






    }





