import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useTodo = (status) => {
    const {user} = useContext(AuthContext);
    const {data, refetch} = useQuery({
      queryKey: ["todo", user?.email],
      queryFn: async() =>{
        const res = await axios.get(`http://localhost:5000/task/${user?.email}`);
        return res.data;
      }
    }) ;

    const final = data?.filter(item => item.status === status);
    
      return [final, refetch];
  
};

export default useTodo;