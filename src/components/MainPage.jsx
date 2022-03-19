import Header from "./Header";
import TodoList from './ToDoList';

export default function TodoListApp({lists}) {
    return(
        <>
        <Header text="To Do App"/>
        <TodoList key={lists.id} list={lists}/>
        </>
    )
}