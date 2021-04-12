import { ProxyState } from "../AppState.js"
import { toDoService } from "../Services/ToDoService.js"
import { ToDoApi } from "../Services/AxiosService.js"

function _draw(){
    let toDoList = ProxyState.ToDos;
    let listTemplate = ''
    toDoList.forEach(x => listTemplate += x.toDoTemplate)
    document.getElementById("display-toDos").innerHTML = listTemplate
  }
    
function _drawCheckBox(){
  let todoList = ProxyState.ToDos
  let total = todoList.length
  let complete = 0
  todoList.forEach(z => {if (z.completed === true)   {complete+=1}  })
  document.getElementById('ToDoing').innerHTML = `Completed: ${complete} | Total:${total}`
}



export default class ToDoController{
    constructor(){
        ProxyState.on("ToDos", _draw)
        ProxyState.on("ToDos", _drawCheckBox)


        this.getAllToDo()
    }



    async getAllToDo() {
        try {
          await toDoService.getAllToDo()
        } catch (error) {
          console.error(error)
        }
      }


      async checkedToDo(id){
        try {
          toDoService.checkedToDo(id)
        } catch (error) {
          console.error(error)
        }
      }
      async createToDo(){
          try {
            window.event.preventDefault()
            let form = window.event.target
            let description = {
              // @ts-ignore
              description: form.description.value
            }
            await toDoService.createToDo(description)
            // @ts-ignore
            form.reset()
          } catch (error) {
            console.error(error)
          }
        }

        deleteToDo(id){
            try {
                toDoService.deleteToDo(id)
            } catch (error) {
                console.error(error)
                
            }
        }





}