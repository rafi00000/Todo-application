import axios from "axios";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import useTodo from "../../../hooks/useTodo";

const Completed = () => {
    const [complete, refetch] = useTodo("complete");

    // handleDelete task
    const handleDelete = (id) =>{
      console.log(id);
      axios.delete(`http://localhost:5000/task/${id}`)
      .then(res =>{
        if(res.data){
          toast.success("Deleted Successfully");
          refetch();
        }
      })
    }

    return (
        <div className="p-4 border my-5">
      <p className="text-xl text-center font-semibold">Completed Task</p>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {complete?.map((item) => (
            <tr key={item._id} className="bg-teal-300">
              <td>{item?.title}</td>
              <td>{item?.description.slice(0, 15)}...</td>
              <td>{item?.deadline}</td>
              <td>{item?.priority}</td>
              <td className="flex gap-2">
                <button className="cursor-pointer p-4 bg-red-500 rounded-md" onClick={() => handleDelete(item._id)}><FaRegTrashAlt className="text-white" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    );
};

export default Completed;