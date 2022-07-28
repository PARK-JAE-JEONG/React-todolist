import { useState } from "react";
import List from '../list/List';
import './style.css';

const Form = () => {
  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false
    },
  ])

  const todoIn = () => {
    title !== '' &&
    setTodos([...todos, { id: todos.length + 1, title: title, content: content, isDone: false }])
  };
  const onReset = () => {
    setTitle('') 
    setContent('') 
  };
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };
  const onChangeHandler = (id) => {
    setTodos(todos.map((todo) => todo.id === id
    ? { ...todo, isDone: !todo.isDone } 
    : todo))
  };

  return (  
    <div>
      <div className="form">
        <div>
          <p>제목</p>
          <input
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}/>
          <p>내용</p>
          <input type="text" 
          value={content} 
          onChange={(e) => setContent(e.target.value)}/>
        </div>
        <div>
          <button className="darkcyan-submit-button"
          onClick={() => {todoIn(); onReset()}}>추가하기</button> 
        </div>
      </div>
    <List todos={todos} onChangeHandler={onChangeHandler} onRemove={onRemove} todoIn={todoIn} />
    </div>
  )
};

export default Form