import { useState, useEffect } from "react";

import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";

import TodoItem from "./TodoItem";
import { db } from "@/firebase";
import Header from "@/layout/Header";
import { FileInput } from "lucide-react";

const ProductUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [todos, setTodos] = useState([
    { text: "할 일 1", isDone: false, id: 1 },
    { text: "할 일 2", isDone: true, id: 2 },
  ]);

  const [text, setText] = useState("");

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    // ref 함수를 이용해서 Storage 내부 저장할 위치를 지정하고, uploadBytes 함수를 이용해서 파일을 저장합니다.
    const imageRef = ref(storage, `${auth.currentUser?.uid}/${selectedFile.name}`);
    await uploadBytes(imageRef, selectedFile);

    // 파일 URL 가져오기
    const downloadURL = await getDownloadURL(imageRef);
    console.log(downloadURL);
  };

  const deleteImage = async () => {
    const imageRef = ref(storage, `${auth.currentUser?.uid}/${selectedFile.name}`);

    await deleteObject(imageRef)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log("failed");
      });
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "text") {
      setText(value);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "todos"));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];

      querySnapshot.forEach((doc) => {
        initialTodos.push({ id: doc.id, ...doc.data() });
      });

      setTodos(initialTodos);
    };

    fetchData();
  }, []);

  const addTodo = async (event) => {
    event.preventDefault();
    const newTodo = { text: text, isDone: false };

    const collectionRef = collection(db, "todos");
    const { id } = await addDoc(collectionRef, newTodo);

    setTodos((prev) => {
      return [...todos, { ...newTodo, id }];
    });
    setText("");
  };

  const selectImg = (e) => {
    const reader = new FileReader();
    const theFile = e.current.files[0];
    reader.readAsDataURL(theFile);
    reader.onload = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setSelectedFile(result);
    }
  }

  return (
    <div>
      <Header />
      <h2>판매 글 작성</h2>
      <form>
        <div>
          <img src={selectedFile} />
          <input className="border" type="file" onChange={handleFileSelect} />
          <label>제목 : </label>
          <input
            className="border"
            type="text"
            value={text}
            name="text"
            onChange={onChange}
            required
          ></input>
          <button className="border" onClick={addTodo}>
            추가
          </button>
          <label>내용 : </label>
          <textarea className="border" />
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
};

export default ProductUpload;
