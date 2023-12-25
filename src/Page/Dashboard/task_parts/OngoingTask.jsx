import { FaArrowAltCircleRight, FaPen, FaRegTrashAlt } from "react-icons/fa";
import useTodo from "../../../hooks/useTodo";
import axios from "axios";
import toast from "react-hot-toast";

const OngoingTask = () => {
  const [ongoing, refetch] = useTodo("ongoing")

  const handleNext = (id) =>{
    axios.patch(`http://localhost:5000/task/${id}`, {status: "complete"})
    .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount) {
            toast.success("Task Completed");
            refetch();
        }
    })
    .catch(error => {
        console.error(error);
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
      <p className="text-xl text-center font-semibold">Ongoing Task</p>
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
          {ongoing?.map((item) => (
            <tr key={item._id} className="bg-blue-200">
              <td>{item?.title}</td>
              <td>{item?.description.slice(0, 15)}...</td>
              <td>{item?.deadline}</td>
              <td>{item?.priority}</td>
              <td className="flex gap-2">
                <button className="cursor-pointer p-4 bg-red-500 rounded-md"><FaRegTrashAlt className="text-white" onClick={() =>handleDelete(item._id)} /></button>
                <button className="cursor-pointer p-4 bg-green-500 rounded-md" onClick={() =>handleNext(item._id)}><FaArrowAltCircleRight className="text-white" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OngoingTask;
