import { ProxyState } from "../AppState.js";
import {  ToDoApi } from "./AxiosService.js"
import ToDo from "../Models/ToDo.js";




class ToDoService {


  async getAllToDo() {
      let result = await ToDoApi.get()
      ProxyState.ToDos = result.data.map(p => new ToDo(p))
      }


      async createToDo(description){
        let result = await ToDoApi.post('', description)
        ProxyState.ToDos = [...ProxyState.ToDos, new ToDo(result.data)]
        console.log(ProxyState.ToDos)
      }


      async deleteToDo(id){
        await ToDoApi.delete(''+ id)
        ProxyState.ToDos = ProxyState.ToDos.filter(z => z.id != id)
      }


      async checkedToDo(id){
        console.log("hellp")
        let item = ProxyState.ToDos.find(x => x.id === id)
        if(item.completed == false){
          item.completed = true
        }else{
          item.completed = false
        }
        await ToDoApi.put(item.id, item)
        ProxyState.ToDos = ProxyState.ToDos
      }
}

export const toDoService = new ToDoService();

