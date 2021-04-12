export default class Quote{
    constructor({content, author}){
        this.content = content
        this.author = author
    }



    get qTemplate(){
        return `
            <div class = "text-center m-4">
                <p class="p-4 showQuote"><b>Quote:</b>" ${this.content} "</p>
                <h4 class="p-4 showAuthor">Author: ${this.author}</h4>
                </div>

`

    }

}