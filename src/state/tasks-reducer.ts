import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {TaskType} from "../Todolist";

export type RemoveTaskActionType =ReturnType<typeof removeTaskAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type ChangeStatusTaskActionType= ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>
type ActionsType =RemoveTaskActionType |
    AddTaskActionType | ChangeStatusTaskActionType |
    ChangeTaskTitleActionType | AddTodolistActionType

export const tasksReducer = (state:TasksStateType, action: ActionsType):TasksStateType => {
    switch (action.type) {
        case 'REMOVE_TASK':
            return {
                ...state,
                [action.todolistId]:state[action.todolistId].filter(task=>task.id !== action.taskId)
            }
        case 'ADD-TASK':
            const task: TaskType = {id: v1(), title:action.title, isDone: false}
            return {
                ...state,
                [action.todolistId]:[task, ...state[action.todolistId]]

            }
        case 'CHANGE-STATUS-TASK':
            return {
                ...state,
                [action.todolistId]:state[action.todolistId].map(el=>el.id === action.taskId ? {...el, isDone:action.isDone}:el)

            }
        case 'CHANGE-TITLE-TASK':
            return {
                ...state,
                [action.todolistId]:state[action.todolistId].map(el=>el.id === action.taskId ? {...el, title:action.title}:el)

            }
        case 'ADD-TODOLIST':
            return {
                ...state,
              [v1()]:action.todolistId
            }
        default:
            return state
           // throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId:string) => {
    return { type: 'REMOVE_TASK', taskId, todolistId}as const
}
export const addTaskAC = (title: string, todolistId:string) => {
    return { type: 'ADD-TASK',title, todolistId} as const
}
export const changeTaskStatusAC = (taskId:string, todolistId:string,isDone:boolean) => {
    return { type: 'CHANGE-STATUS-TASK',taskId,isDone, todolistId} as const
}
export const changeTaskTitleAC = (taskId:string,title:string, todolistId:string) => {
    return { type: 'CHANGE-TITLE-TASK',taskId,title, todolistId} as const
}
export const addTodolistAC = (taskId:string,title:string, todolistId:string) => {
    return { type: 'CHANGE-TITLE-TASK',taskId,title, todolistId} as const
}
export const addTodolistAC = (taskId:string,title:string, todolistId:string) => {
    return { type: 'ADD-TODOLIST',taskId,title, todolistId} as const
}
