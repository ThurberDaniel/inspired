import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"
import { sandboxApi } from "./AxiosService.js"


class QuoteService{
    async addQuote(){
        let result = await sandboxApi.get('quotes')
        ProxyState.currentQuote = new Quote(result.data)
    }


}

export const quoteService = new QuoteService