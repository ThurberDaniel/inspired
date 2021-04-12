

export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    timeout: 10000
  })

  export const ToDoApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/daniel/todos',
    timeout: 10000
  })