


import React, {useEffect, useState} from 'react'

import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((res)=>{
                setState(res.data)
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = ''
        todolistAPI.createTodolist('New')
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '8c963d77-9a49-44fc-b086-bc5ca95b5589'
        todolistAPI.deleteTodolist(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = ''
        todolistAPI.updateTodolist(todolistId,'FFFFF')
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
//TASKS
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId,setTodolistId]= useState<string>('')
    const getTasks=()=>{
        todolistAPI.getTasks(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
    <div>
        <input placeholder={'todolistId'} value={todolistId}
        onChange={(e)=>{setTodolistId(e.currentTarget.value)}}/>
        <button onClick={getTasks}>get task</button>
    </div>
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId,setTodolistId]= useState<string>('')
    const [taskId,setTaskId]= useState<string>('')
    const deleteTask=()=>{

        todolistAPI.deleteTask(todolistId,taskId)
            .then((res)=>{
                setState(res.data)
            })
    }
    return <div>{JSON.stringify(state)}
    <div>
        <input placeholder={'todolistId'} value={todolistId}
               onChange={(e)=>{setTodolistId(e.currentTarget.value)}}/>
        <input placeholder={'taskId'} value={taskId}
               onChange={(e)=>{setTaskId(e.currentTarget.value)}}/>
        <button onClick={deleteTask}>Delete Task</button>
    </div></div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId,setTodolistId]= useState<string>('')
    const [taskTitle,setTaskTitle]= useState<string>('')

 const createTask=()=>{
     todolistAPI.createTask(todolistId,taskTitle)
         .then((res)=>{
             setState(res.data)
         })
 }
    return <div>{JSON.stringify(state)}
    <div>
        <input placeholder={'todolistId'} value={todolistId}
        onChange={(e)=>{setTodolistId(e.currentTarget.value)}}/>
        <input placeholder={'taskTitle'} value={taskTitle}
               onChange={(e)=>{setTaskTitle(e.currentTarget.value)}}/>
        <button onClick={createTask}>create task</button>
    </div>

    </div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    const [status,setStatus]= useState<number>(0)
    const [priority,setPriority]= useState<number>(0)
    const [title,setTitle]= useState<string>('title1')
    const [description,setDescription]= useState<string>('description1')
    const [startDate,setStartDate]= useState<string>('')
    const [deadline,setDeadline]= useState<string>('')

    const [todolistId,setTodolistId]= useState<string>('')
    const [taskId,setTaskId]= useState<string>('')
const updateTask=()=>{

    todolistAPI.updateTask(todolistId,taskId, {
        deadline:'',
        description:description,
        priority:priority,
        startDate:'',
        status:status,
        title:title
    })
        .then((res)=>{
            setState(res.data)
        })
}
    return <div>{JSON.stringify(state)}
        <div>
            <input placeholder={'taskId'} value={taskId} onChange={(e)=>{setTaskId(e.currentTarget.value)}}/>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e)=>{setTodolistId(e.currentTarget.value)}}/>
            <input placeholder={'Title'} value={title} onChange={(e)=>{setTitle(e.currentTarget.value)}}/>
            <input placeholder={'Description'} value={description} onChange={(e)=>{setDescription(e.currentTarget.value)}}/>
            <input placeholder={'status'} value={status} type={'number'} onChange={(e)=>{setStatus(+e.currentTarget.value)}}/>
            <input placeholder={'priority'} value={priority} type={'number'} onChange={(e)=>{setPriority(+e.currentTarget.value)}}/>
            <button onClick={updateTask}>update task</button>
        </div>
    </div>
}
