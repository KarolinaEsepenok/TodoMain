
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {todolistsAPI} from "../../api/todolists-api";

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
      todolistsAPI.getTodolists()
        .then((res)=>{
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      todolistsAPI.createTodolist('bla')
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'abd96315-58cc-42a7-a904-226e13c834ce'
       todolistId.deleteTodolist(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'abd96315-58cc-42a7-a904-226e13c834ce'
      todolistsAPI.updateTodolist(todolistId, "hiiii")
            .then((res)=>{

                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

