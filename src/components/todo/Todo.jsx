import './style.css';

const Todo = ({ todo, onRemove, onChangeHandler }) => {

  return (
      <div className="todo-box">
        <div>
          <h2 className="todo-title">{todo.title}</h2>
          <p className="todo-content">{todo.content}</p>
        </div>
        <div className="todo-btn">
          <button className="todo-delete" onClick={() => onRemove(todo.id)}>삭제하기</button>
          {
            ! todo.isDone 
            ? (<button className="todo-complete" onClick={() => onChangeHandler(todo.id)}>완료</button>)
            : (<button className="todo-complete" onClick={() => onChangeHandler(todo.id)}>취소</button>)
          }
        </div>
      </div>
  )
};

export default Todo