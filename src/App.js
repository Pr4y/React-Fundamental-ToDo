import TodoListApp from "./components/MainPage";
import {mainTaskList} from './mainTaskList'

function App() {
    return (
      <TodoListApp lists={mainTaskList}/>
    );
}

export default App;