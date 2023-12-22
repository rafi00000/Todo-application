import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import axios from "axios";

const OngoingTask = () => {
    const {user} = useContext(AuthContext);

    const {isLoading, data: todo, refetch} = useQuery({
        queryKey: ["todo", user?.email], 
        queryFn: async() =>{
            const res = await axios.get(`http://localhost:5000/task?email=${user?.email}`);
            return res.data;
        }
    });

    return (
        <div>
            
        </div>
    );
};

export default OngoingTask;