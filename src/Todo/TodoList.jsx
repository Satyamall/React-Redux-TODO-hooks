import { useEffect} from "react";
import { shallowEqual, useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { TotalIncompleted } from "../Component/Total";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  removeTodo,
  toggleTodo
} from "../Redux/action";

function TodoItem({ title, status, onDelete, id, onToggle }) {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div><Link to={`/todo/${id}`}>{title}</Link></div>
      <div>{`${status}`}</div>
      <button onClick={() => onDelete(id)}>Delete</button>
      {/* <button onClick={() => onToggle(id)}>Toggle Status</button> */}
    </div>
  );
}

function TodoList() {
  const { todo,isError,isLoading} = useSelector(
    (state) => state,
    shallowEqual
  );
  const dispatch = useDispatch();
  const getTodos = () => {
    // pre fetch
    const requestAction = getTodosRequest();
    dispatch(requestAction);
    return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks`)
      .then((res) => res.json())
      .then((res) => {
        //success
        const successAction = getTodosSuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        // failure
        const failureAction = getTodosFailure();
        dispatch(failureAction);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  // const handleToggle = (id) => {
  //   const action = toggleTodo(id);
  //   dispatch(action);
  // };

  var total= todo.filter((item)=> item.status===false);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Something went wrong!</h3>}
      <div style={{textAlign: "center"}}>
         <h1>Total Incompleted task: </h1>
         <TotalIncompleted length={total.length}/>
      </div>
     {
      todo.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onDelete={handleDelete}
            // onToggle={handleToggle}
          />
        ))}
    </div>
  );
}

export default TodoList;
