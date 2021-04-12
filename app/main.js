import WeatherController from "./Controllers/WeatherController.js";
import ImageController from "./Controllers/ImageController.js" ;
import QuoteController from "./Controllers/QuoteController.js"; 
import ToDoController from "./Controllers/ToDoController.js"


class App {
  weatherController = new WeatherController();
  imageController = new ImageController();
  quoteController = new QuoteController();
  toDoController = new ToDoController();

}

window["app"] = new App();
