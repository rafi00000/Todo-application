import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";


const RegisterPage = () => {
    const {createUserWithMail} = useContext(AuthContext);

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        createUserWithMail(email, password)
        .then(res  =>{
            if(res.user){
                updateProfile(res.user, {displayName: name})
                .then(res =>{
                    console.log(res);
                    toast.success("Successfully registered")
                })
            }
        })
    }

    return (
        <form className="border p-5 rounded-md md:w-1/2 mx-auto my-10 space-y-4" onSubmit={handleRegister}>
        <p className="text-center text-3xl font-bold">Register Here</p>
        <div className="form-control">
            <label>Name</label>
            <input type="text" className="input input-bordered" name="name" />
        </div>
        <div className="form-control">
            <label>Email</label>
            <input type="text" className="input input-bordered" name="email" />
        </div>
        <div className="form-control">
            <label>Password</label>
            <input type="text" className="input input-bordered" name="password" />
        </div>
        <div>
            <p className="text-center"><button className="btn btn-outline">Login</button></p>
        </div>
        <p className="text-center">Already have an account? <Link to={'/login'} className="text-purple-700 font-bold">Login</Link></p>
    </form>
    );
};

export default RegisterPage;