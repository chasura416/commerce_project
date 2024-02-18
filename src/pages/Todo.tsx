import { useState, useEffect } from "react"
import TodoItem from "./TodoItem"
import { addDoc, collection, getDocs, query } from "firebase/firestore"
import { db } from "@/firebase"

const Todo = () => {
  
  const [ todos, setTodos ] = useState([
    // { text: "할 일 1", isDone: false, id: 1 },
    // { text: "할 일 2", isDone: true, id: 2 },
  ]);
  
  const [ text, setText ] = useState("");
  
  const onChange = (event) => {
    const {
      target: {name, value},
    } = event;
    if (name === "text") {
      setText(value);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "todos"));
      const querySnapshot = await getDocs(q);
  
      const initialTodos = [];
  
      querySnapshot.forEach((doc) => {
        initialTodos.push({ id: doc.id, ...doc.data() })
      })
      setTodos(initialTodos);
      console.log(initialTodos)
      console.log(querySnapshot)
    }
  
    fetchData();
  }, []);

  const addTodo = async (event) => {
    event.preventDefault();
    const newTodo = { text: text, isDone: false };
    
    const collectionRef = collection(db, "todos");
    const { id } = await addDoc(collectionRef, newTodo);
    
    setTodos((prev) => {
      return [...todos, {...newTodo, id } ];
    })
    setText("");
    
  }
  const collectionRef = collection(db, "todos");
  console.log(collectionRef.firestore)


  return (
    <div>
      <h2>할 일 컴포넌트</h2>
      <form>
        <div>
          <label>할 일 : </label>
          <input
            className="border"
            type="text"
            value={text}
            name="text"
            onChange={onChange}
            required
          ></input>
          <button 
            className="border"
            onClick={addTodo}>
              추가
          </button>
        </div>
      </form>
      <h3>Working</h3>
      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => {
          return <TodoItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />;
        })}
      <h3>Done</h3>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => {
          return <TodoItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />;
        })}
  </div>
);
}

export default Todo