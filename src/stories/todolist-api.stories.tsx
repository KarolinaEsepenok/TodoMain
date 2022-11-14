
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
       todolistsAPI.deleteTodolist(todolistId)
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

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>(''
    )

        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
const deleteTask=()=>{
        todolistsAPI.deleteTask(todolistId, taskId)
            .then((res)=>{
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
    <div>
        <input placeholder={'todolistsId'} value={todolistId}onChange={(e)=>{setTodolistId(e.currentTarget.value)}}/>
        <input placeholder={'taskId'} value={taskId} onChange={(e)=>{setTaskId(e.currentTarget.value)}}/>
        <button onClick={deleteTask}>deleteTask</button>
    </div></div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        const todolistId = 'abd96315-58cc-42a7-a904-226e13c834ce'

        todolistsAPI.getTasks(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}



