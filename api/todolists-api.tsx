import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "abd96315-58cc-42a7-a904-226e13c834ce"
    }
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})
type ResponseType<D = {}> = {
    resultCode: number
    message: Array<string>
    data: D
}

type GetTaskResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}
export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todolistId: string
    order: number
    addedDate: string
}
export  type UpdateTaskType={
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

export  type TodolistType = {
    id: string
    title: string
    addedData: string
    order: number
}

export const todolistsAPI = {
    getTodolists() {
        const promise = instance.get<Array<TodolistType>>('todo-lists')
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title})
        return promise
    },
    deleteTodolist(id: string) {
        const promise = instance.delete<ResponseType>('todo-lists/${id}')
        return promise
    },
    updateTodolist(id: string, title: string) {
        const promise = instance.put<ResponseType>('todo-lists/${id}', {title: title})
        return promise
    },
    getTasks(todolistId: string) {
        return instance.get<GetTaskResponse>(`todo-lists/${todolistId}/tasks`)

    },
    deleteTask(todolistId:string,taskId:string){
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(id:string,title:string){
       // return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    }


}
