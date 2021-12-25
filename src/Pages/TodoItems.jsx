import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useRef} from "react";

function TodoItem({ title, status,id}) {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div>{title}</div>
      <div>{`${status}`}</div>
      <div>
          <Link to={`/todo/${id}/edit`}>Edit Button</Link>
      </div>
    </div>
  );
}


const getUserById = (id) => {
  return axios.get("https://json-server-mocker-masai.herokuapp.com/tasks/" + id);
};

// HOOkS
function TodoItems() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const isMounted = useRef(null);

  const handleGetUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await getUserById(id);
      if (!isMounted.current) {
        return;
      }
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetUser();
    if (!isMounted.current) {
      isMounted.current = true;
    }
    return () => {
      // * cleanup
      isMounted.current = false;
    };
  }, [id]);

   

  if (isLoading) return <div>...loading</div>;
  console.log(data);
  return (
    <div>
      <h3> User ID: {id} </h3>
      <TodoItem id={id}
        title={data.title}
        status={data.status}
      />
      {/* {id !== "1" && <Link to={`/todo/${Number(id) - 1}`}>Prev</Link>}
      <Link to={`/todo/${Number(id) + 1}`}>Next</Link> */}
    </div>
  );
}

export default TodoItems;
