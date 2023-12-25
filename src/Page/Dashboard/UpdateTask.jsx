import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const UpdateTask = () => {
    const {id} = useParams();
    const [data, setData] = useState();

    useEffect(() =>{
        axios.get(`http://localhost:5000/task/single/${id}`)
        .then(res => {
            setData(res.data);
        })
    }, [id]);
    console.log(data);

    const handleUpdateTask = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const updateDoc = {title, description, deadline, priority};
        
        axios.put(`http://localhost:5000/task/${id}`, updateDoc)
        .then(res => {
            if(res.data){
                toast.success("Updated Successfully");
            }
        })

    }

    
    return (
        <form className="border p-5 rounded-md mx-auto my-10 space-y-4 w-1/2" onSubmit={handleUpdateTask}>
            <h1 className="text-4xl font-bold text-center">Update Form</h1>
        <div className="form-control">
            <label>Titles</label>
            <input type="text" className="input input-bordered" name="title" required defaultValue={data?.title} />
        </div>
        <div className="form-control">
            <label>Descriptions</label>
            <textarea id="" cols="30" rows="10" className="p-2 input input-bordered" name="description" required defaultValue={data?.description}></textarea>
        </div>
        <div className="form-control">
            <label>Deadline</label>
            <input type="date" className="input input-bordered" name="deadline" required defaultValue={data?.deadline}/>
        </div>
        <div className="form-control">
            <label>Priority</label>
            <select id="" className="input input-bordered" name="priority" required defaultValue={data?.priority}>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
            </select>
        </div>
        <div>
            <p className="text-center"><button className="btn btn-sm bg-white border-purple-600 text-violet-600 hover:bg-violet-700 hover:text-white">Update</button></p>
        </div>
        <Toaster></Toaster>
    </form>
    );
};

export default UpdateTask;