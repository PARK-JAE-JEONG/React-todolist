import Todo from '../todo/Todo';
import './style.css';

function List({ todos, onRemove, onChangeHandler, todoIn }){

  return (

    <div className="list-container">
      <h2 className="list-title" >Working.. 🔥</h2>
      <div className="todo-list">
        {
       todos.map((todo) => {
          if ( todo.isDone !== true) {
            return( 
              <Todo 
                key={todo.id} 
                todo={todo} 
                todoIn ={todoIn}
                onRemove={onRemove} 
                onChangeHandler={onChangeHandler}
              />
            )
          }
         })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="todo-list">
      {
        todos.map((todo) => {
        if ( todo.isDone === true) {
          return( 
            <Todo 
              key={todo.id} 
              todo={todo} 
              todoIn ={todoIn}
              onRemove={onRemove} 
              onChangeHandler={onChangeHandler}
            />
          )
        }
      })}
      </div>
    </div>
  )
};

export default List
