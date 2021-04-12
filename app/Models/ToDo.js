export default class ToDo {
    constructor({ description, id , user, completed}) {
        this.id = id
        this.user = user
        this.completed = completed || false
        this.description = description

}




get toDoTemplate() {

    return /*html*/`
    <HR><div>
       <input type="checkbox" class="lineOut" onclick="app.toDoController.checkedToDo('${this.id}')" ${this.completed == true ?'checked' : ''}>
       <span for="scales">${this.description} </span>
       <button class="bg-danger text-light" onclick="app.toDoController.deleteToDo('${this.id}')">Delete</button>
    </div>

    
    `
}

}
