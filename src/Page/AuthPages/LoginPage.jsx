import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Link } from "react-router-dom";


const LoginPage = () => {

    const {logIn} = useContext(AuthContext);

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        logIn(email, password)
        .then(res => {
            console.log(res);
        })
    }

    return (
        <form className="border p-5 rounded-md md:w-1/2 mx-auto my-10 space-y-4" onSubmit={handleLogin}>
            <p className="text-center text-3xl font-bold">Login Here!</p>
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
            <p className="text-center">New User? <Link to={'/register'} className="text-purple-700 font-bold">Register</Link></p>
        </form>
    );
};

export default LoginPage;