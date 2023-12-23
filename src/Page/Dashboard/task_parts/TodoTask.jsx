import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import axios from "axios";

const TodoTask = () => {

    const { user } = useContext(AuthContext);

  const {
    isLoading,
    data: todo = [],
    refetch,
  } = useQuery({
    queryKey: ["todo", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/task?email=${user?.email}&st=todo`
      );
      return res.data;
    },
  });
  console.log(todo);
  return (
    <div className="p-4 border my-5">
      <p className="text-xl text-center font-semibold">ongoing Task</p>
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