import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('')
    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask()
        }

    }
    const onClickAllHandler = () => {
        props.changeFilter("all")
    }
    const onClickActiveHandler = () => {
            props.changeFilter('active')
        }
    const onClickCompletedHandler = () => {
        props.changeFilter('completed')

    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeInputHandler}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => {
                        props.removeTask(t.id)
                    }
                    return <li key={t.id}>
                        }
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x
                        </button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={onClickAllHandler}>
                All
            </button>
            <button onClick={onClickActiveHandler}>
                Active
            </button>
            <button onClick={onClickCompletedHandler}>
                Completed
            </button>
        </div>
    </div>
}
