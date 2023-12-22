import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Auth/AuthProvider";

const ToDoForm = () => {
    const {user} = useContext(AuthContext);

    const {register, handleSubmit, reset} = useForm();

    const handleCreateTask = (data) =>{
        data.email = user?.email;
        axios.post("http://localhost:5000/task", data)
        .then(res =>{
            if(res.data){
                toast.success("Created To Do");
                reset();
                const close_btn = document.getElementById("close-btn");
                close_btn.click();
            }
        })
        .catch(err =>{
            if(err){
                toast.error("Something went wrong");
            }
        })
    }

    return (
        <form className="border p-5 rounded-md mx-auto my-10 space-y-4" onSubmit={handleSubmit(handleCreateTask)}>
            <div className="form-control">
                <label>Titles</label>
                <input type="text" className="input input-bordered" {...register("title")} />
            </div>
            <div className="form-control">
                <label>Descriptions</label>
                <textarea id="" cols="30" rows="10" className="p-2 input input-bordered" {...register("description")}></textarea>
            </div>
            <div className="form-control">
                <label>Deadline</label>
                <input type="date" className="input input-bordered" name="deadline" {...register("deadline")} />
            </div>
            <div className="form-control">
                <label>Priority</label>
                <select id="" className="input input-bordered" name="priority" {...register("priority")}>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div>
                <p className="text-center"><button className="btn btn-sm bg-white border-purple-600 text-violet-600 hover:bg-violet-700 hover:text-white">Create</button></p>
            </div>
            <Toaster></Toaster>
        </form>
    );
};

export default ToDoForm;