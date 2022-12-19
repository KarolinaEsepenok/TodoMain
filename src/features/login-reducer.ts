import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "../app/app-reducer";
import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/todolists-api";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {addTaskAC} from "./TodolistsList/tasks-reducer";


const initialState: any = {}

export const loginReducer = (state: any = initialState, action: ActionsType): any => {
    switch (action.type) {

        default:
            return state
    }
}

// actions
//export const removeTaskAC = (taskId: string, todolistId: string) => ({type: 'REMOVE-TASK', taskId, todolistId} as const)

// thunks
export const loginTC = (data:LoginParamsType)=>(dispatch:Dispatch<ActionsType | SetAppStatusActionType>)=>{
    dispatch((setAppStatusAC('loading')))
    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
               dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch);
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })

}

// types


type ActionsType = any
type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>
