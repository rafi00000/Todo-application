import { FaArrowAltCircleRight, FaPen, FaRegTrashAlt } from "react-icons/fa";
import useTodo from "../../../hooks/useTodo";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from 'react-router-dom';

const TodoTask = () => {

  const [todo, refetch] = useTodo("todo");

  const handleNext = (id) =>{
    axios.patch(`http://localhost:5000/task/${id}`, {status: "ongoing"})
    .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount) {
            toast.success("Task Started");
            refetch();
        }
    })
    .catch(error => {
        console.error(error);
        toast.error("Something went wrong");
    });
  }

  const handleDelete = (id) =>{
    console.log(id);
    axios.delete(`http://localhost:5000/task/${id}`)
    .then(res =>{
      if(res.data){
        toast.success("Deleted Successfully");
        refetch();
      }
    })
  };

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
          {todo?.map((item) => (
            <tr key={item._id} className="bg-red-200">
              <td>{item?.title}</td>
              <td>{item?.description > 15 ? item?.slice(0, 15) : item?.description}...</td>
              <td>{item?.deadline}</td>
              <td>{item?.priority}</td>
              <td className="flex gap-2">
                <Link to={`/dashboard/update/${item?._id}`}><button className="cursor-pointer p-4 bg-blue-500 rounded-md"><FaPen className="text-white" /></button></Link>
                <button className="cursor-pointer p-4 bg-red-500 rounded-md" onClick={() =>handleDelete(item._id)}><FaRegTrashAlt className="text-white" /></button>
                <button className="cursor-pointer p-4 bg-green-500 rounded-md" onClick={() =>handleNext(item._id)}><FaArrowAltCircleRight className="text-white" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button id="refetch-todo" onClick={refetch}></button>
      <Toaster></Toaster>
    </div>
  );
};

export default TodoTask;