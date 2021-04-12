export default class Weather{
    constructor({id,main,description, name, wind}){
        this.id = id
        this.main = main
        this.description = description
        this.name = name
        this.wind = wind
    }
    get wTemplate(){
        return `
            <div>
            <h4>City: ${this.name}</h4>
            <h5>Current Temp: </h5>
            </div>
        `
    }






    }





