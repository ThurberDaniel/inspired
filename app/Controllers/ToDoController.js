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
  let list = ProxyState.ToDos
  console.log(list)
  let total = list.length
  let finish = 0
  list.forEach(x => {if(x.completed === true){finish+=1}})
  document.getElementById('ToDoing').innerHTML = `Completed: ${finish} | Total:${total}`
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
        console.log("CBOX CON")
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
            console.log(" TO DO  CON")
            try {
                toDoService.deleteToDo(id)
            } catch (error) {
                console.error(error)
                
            }
        }





}