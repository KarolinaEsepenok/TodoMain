import axios from 'axios'

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'abd96315-58cc-42a7-a904-226e1',
    },
})
type TodolistType={
    id:string
    addedDate:string
    order:number
    title:string}

type ResponseType<D>={
    resultCode: number
    fieldsErrors: Array<string>
    messages: Array<string>
    data: D
}
export type TaskType={
    description: string
    title: string
    completed:boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order:number
    addedDate: string
}
type GetTaskResponse={
    error: string | null
    totalCount:number
    items: TaskType[]
}
export type UpdateTaskType={
    title:string
    description:string
    completed:boolean
    status: number
    priority: number
    startDate:string
    deadline: string
}



export const todolistAPI = {
        getTodolists() {
            const promise = instance.get<Array<TodolistType>>(
                `todo-lists`,
            )
            return promise
        },
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`,
            { title: title
        })
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType<{}>>(
            `todo-lists/${todolistId}`
        )
        return promise
    },
    createTodolist( title: string) {
        const promise = instance.post<ResponseType<{
            item: TodolistType
        }>>(
            `todo-lists/${title}`,
            { title: title }
        )
        return promise
    },
    getTasks(todolistId:string) {
        const promise = instance.get<GetTaskResponse>(
            `todo-lists/${todolistId}/tasks`
        )
        return promise
    },
    deleteTask(todolistId: string,taskId:string) {
        const promise = instance.delete<GetTaskResponse>(
            `todo-lists/${todolistId}/tasks/${taskId}`
        )
        return promise
    },
    createTask(todolistId: string,taskTitle:string) {
        const promise = instance.post<GetTaskResponse>(
            `todo-lists/${todolistId}/tasks`
        )
        return promise
    },
    updateTask(todolistId: string, taskId:string) {

        const promise = instance.put<UpdateTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`
            )
        return promise
    },
}
