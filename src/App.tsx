import { useState } from "react";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";

function App() {
  const [todo, newTodo] = useState([{}]);

  return (
    <div className="flex flex-col justify-center ml-[380px]">
      <Todoform
        onSubmit={(todos) =>
          newTodo([...todo, { ...todos, id: todo.length + 1 }])
        }
      />
      <Todolist
        onDelete={(id: any) => newTodo(todo.filter((e) => e.id !== id))}
        todo={todo}
      />
    </div>
  );
}

export default App;
