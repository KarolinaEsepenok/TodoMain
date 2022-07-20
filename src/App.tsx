import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';


export type FilterValuesType = "all" | "active" | "completed";
type TodolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}
type TasksStateType = {
    [key: string]: Array<TaskType>
}

export function App() {

        let todolistID1 = v1()
        let todolistID2 = v1()
        let [todolists, setTodolists] = useState<Array<TodolistsType>>([
            {id: todolistID1, title: 'What to learn', filter: 'all'},
            {id: todolistID2, title: 'What to buy', filter: 'all'},
        ])

        let [tasks, setTasks] = useState<TasksStateType>({
            [todolistID1]: [
                {id: v1(), title: "HTML&CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "ReactJS", isDone: false},
                {id: v1(), title: "Rest API", isDone: false},
                {id: v1(), title: "GraphQL", isDone: false},
            ]
            ,
            [todolistID2]: [
                {id: v1(), title: "HTML&CSS2", isDone: true},
                {id: v1(), title: "JS2", isDone: true},
                {id: v1(), title: "ReactJS2", isDone: false},
                {id: v1(), title: "Rest API2", isDone: false},
                {id: v1(), title: "GraphQL2", isDone: false},
            ]

        })
    let removeTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasks[todolistId]
        //   let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
        //setTodolists(filteredTodolist);
        //   delete tasks[todolistId]
        //setTasks({...tasks})
    }
        //  let [tasks, setTasks] = useState([
        //  {id: v1(), title: "HTML&CSS", isDone: true},
        //   {id: v1(), title: "JS", isDone: true},
        //   {id: v1(), title: "ReactJS", isDone: false},
        //  {id: v1(), title: "Rest API", isDone: false},
        // {id: v1(), title: "GraphQL", isDone: false},
        //  ]);
        //  let [filter, setFilter] = useState<FilterValuesType>("all");


        function removeTask(id: string, todolistId: string) {
            // let todolistTasks = tasks[todolistId]
            //tasks[todolistId] = todolistTasks.filter(task=> task.id!== id)
            setTasks({...tasks, [todolistId]: tasks[todolistId].filter(el => el.id !== id)})
            // let filteredTasks = tasks.filter(t => t.id != id);
            //   setTasks(filteredTasks);
        }

        function addTask(title: string, todolistId: string) {
            let task = {id: v1(), title: title, isDone: false};
            // let todolistTasks= tasks[todolistId]
            // tasks[todolistId] = [task, ...todolistTasks]
            setTasks({...tasks, [todolistId]: [task, ...tasks[todolistId]]})
            // let newTasks = [task, ...tasks];
            //  setTasks(newTasks);
        }

        function changeStatus(id: string, isDone: boolean, todolistId: string) {
            setTasks({...tasks, [todolistId]: tasks[todolistId].map(e => e.id === id ? {...e, isDone: true} : e)});
        }

        //  let todolistTasks = tasks[todolistId]
        //   let task = todolistTasks.find(task => task.id === id)
        //   if(task){
        //       task.isDone = isDone
        //        setTasks({...tasks})
        //    }

        function changeFilter(value: FilterValuesType, todolistId: string) {
            setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: value} : el))
            //   let todolist = todolists.find(tl=> tl.id=== todolistId)
            // if(todolist){
            //   todolist.filter = value
            // setTodolists([...todolists])
            //}
        }
        return (
            <div className="App">
                {todolists.map(todolist => {
                    // let tasksForTodolist = tasks;
                    let allTodolistTasks = tasks[todolist.id]
                    let tasksForTodolist = allTodolistTasks

                    if (todolist.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (todolist.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }

                    return <Todolist key={todolist.id}
                                     id={todolist.id}
                                     title={todolist.title}
                                     tasks={tasksForTodolist}
                                     removeTask={removeTask}
                                     changeFilter={changeFilter}
                                     addTask={addTask}
                                     changeTaskStatus={changeStatus}
                                     filter={todolist.filter}
                                     removeTodolist={removeTodolist}
                    />
                })}
            </div>
        )
}

