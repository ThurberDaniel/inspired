export default class ToDo {
    constructor({ description, id , user, completed}) {
        this.id = id
        this.user = user
        this.completed = completed || false
        this.description = description

}




get toDoTemplate() {

    return /*html*/`
    <BR><div>
       <input type="checkbox" onclick="app.toDoController.checkedToDo('${this.id}')" ${this.completed == true ?'checked' : ''}>
       <span for="scales">${this.description} </span>
       <button class="bg-danger text-light" onclick="app.toDoController.deleteToDo('${this.id}')">Delete</button>
    </div>

    
    `
}

}
// <div>
// <input type="checkbox" id="${this.id}" name="scales">
// <span for="scales">${this.description}</span>
// </div>