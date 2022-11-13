import axios from "axios";


const settings={
    withCredentials:true,
    headers:{
        "API-KEY": "abd96315-58cc-42a7-a904-226e13c834ce"
    }
}

export type TasksType={
    id:string
    title:string
    addedData: string
    order: number
}
export const todolistsAPI={
    getTasks(){
        const promise = axios.get<Array<TasksType>>("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        return promise
    },
    createTasks(title: string){
        const promise = axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists",{ title: title}, settings)
        return promise
    },
    deleteTasks(id:string){
        const promise =  axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
        return promise
    },
    updateTasks(id:string, title:string){
        const promise =  axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`,{title:title}, settings)
        return promise
    }



}