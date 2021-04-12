import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";



//Private
function _draw() {
  let quotes = ProxyState.currentQuote;
  document.getElementById("display-quote").innerHTML = quotes.qTemplate;

}

//Public
export default class QuoteController {
  constructor() {
    ProxyState.on("currentQuote", _draw);
    this.addQuote()
  }

  async addQuote() {
    try {
     await quoteService.addQuote()
  } catch (error) {
      console.error(error)
  }

  }

}