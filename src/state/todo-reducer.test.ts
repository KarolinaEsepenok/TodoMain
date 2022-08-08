import { todolistsReducer } from './todo-reducer'
import { v1 } from 'uuid'
import { TodolistType } from '../App'

test('correct todolist should be removed', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let newTodolistsTitle = 'New Todolist';

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todolistsReducer(startState,
        {type: 'ADD-TODOLIST',
           title: newTodolistsTitle})

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodolistsTitle)
    expect(endState[2].filter.toBe('all'))
})