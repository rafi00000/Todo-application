import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import axios from "axios";

const TodoTask = () => {

  const [todo, setTodo] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios.get(`http://localhost:5000/task?email=${user?.email}`)
    .then(res => {
      const data = res.data;
      const filter_data = data.filter(item => item?.status === "todo");
      setTodo(filter_data);
    })
  }, [user])

  console.log(todo);


  return (
    <div className="p-4 border my-5">
      <p className="text-xl text-center font-semibold">Todo Task</p>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {todo.map((item) => (
            <tr key={item._id} className="bg-base-200">
              <td>{item?.title}</td>
              <td>{item?.description.slice(0, 15)}...</td>
              <td>{item?.deadline}</td>
              <td>{item?.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTask;