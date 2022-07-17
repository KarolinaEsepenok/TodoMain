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
    changeTaskStatus: (id: string, isDone: boolean) => void
    filter: FilterValuesType


}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim())
            setTitle('')
        } else {
            setError('title is required')
        }
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }
    const tsarChangeHandler = (valueFilter: FilterValuesType) => {
        props.changeFilter(valueFilter)

    }
    const onChangeHandler = (id: string, isDone: boolean) => {
      //  let newIsDoneValue = e.currentTarget.checked
      //  props.changeTaskStatus()
        props.changeTaskStatus(id,isDone)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeInputHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}/>
            <button onClick={addTask}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = (tID: string) => {
                        props.removeTask(tID)

                    }
                    {/*  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeTaskStatus(t.id, newIsDoneValue)
                    }*/}
                    return <li key={t.id} className={t.isDone ? 'is-done' : ''}>
                        }
                        <input type="checkbox" checked={t.isDone} onChange={(e)=>onChangeHandler(t.id,e.currentTarget.checked)}/>
                        <span>{t.title}</span>
                        <button onClick={() => onClickHandler(t.id)}>x
                        </button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={() => tsarChangeHandler('all')}>
                All
            </button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''}
                    onClick={() => tsarChangeHandler('completed')}>
Completed
            </button>
            <button className={props.filter === 'active' ? 'active-filter' : ''}
                    onClick={() => tsarChangeHandler('active')}>
                Active
            </button>
        </div>
    </div>
}
