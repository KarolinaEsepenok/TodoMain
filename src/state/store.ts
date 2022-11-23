import {ActionsTasksType, tasksReducer} from './tasks-reducer';
import {ActionsTodoListType, todolistsReducer} from './todolists-reducer';
import {applyMiddleware, combineReducers, legacy_createStore, Store} from 'redux';
import thunk from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})
// непосредственно создаём store
export const store: Store<AppRootStateType, any> = legacy_createStore(rootReducer,applyMiddleware(thunk));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type ActionsType = ActionsTodoListType | ActionsTasksType

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//const dispatch = useDispatch()

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
