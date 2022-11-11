
import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default {
    title: 'API'
}
//abd96315-58cc-42a7-a904-226e13c834ce
const settings={
    withCredentials:true,
    headers:{
        "API-KEY": "abd96315-58cc-42a7-a904-226e13c834ce"
    }
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
      axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        .then((res)=>{
            setState(res.data)
        })


    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists",{ title: "karolina"}, settings)
            .then((res)=>{

                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.delete("https://social-network.samuraijs.com/api/1.1/todo-lists/abd96315-58cc-42a7-a904-226e13c834ce", settings)
            .then((res)=>{

                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.put("https://social-network.samuraijs.com/api/1.1/todo-lists/abd96315-58cc-42a7-a904-226e13c834ce",{ title: "yo"}, settings)
            .then((res)=>{

                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

