export default class Quote{
    constructor({content, author}){
        this.content = content
        this.author = author
    }



    get qTemplate(){
        return `
            <div class = "text-center">
                <p class="showQuote">${this.content}</p>
                <p class="showAuthor">${this.author}</p>
                </div>

`

    }

}