import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { logIn, githubLogin, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    logIn(email, password).then((res) => {
      console.log(res);
      navigate("/dashboard");
    });
  };

  const handleProvider= (provider) =>{
    provider()
    .then(res => {
        navigate("/dashboard")
    })
    .catch(err => {
        console.log(err);
        toast.error("something went wrong")
    })
  } 

  return (
    <div>
      <form
        className="border p-5 rounded-md md:w-1/2 mx-auto my-10 space-y-4"
        onSubmit={handleLogin}
      >
        <p className="text-center text-3xl font-bold">Login Here!</p>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="text"
            className="input input-bordered"
            name="password"
            required
          />
        </div>
        <div>
          <p className="text-center">
            <button className="btn btn-outline">Login</button>
          </p>
        </div>
        <p className="text-center">
          New User?{" "}
          <Link to={"/register"} className="text-purple-700 font-bold">
            Register
          </Link>
        </p>
      </form>
      <div className="flex gap-5 items-center justify-center">
        <button className="btn btn-outline w-1/5" onClick={()=> handleProvider(googleSignIn)}>
          <FaGoogle
            className="text-xl"
          />
          Google
        </button>
        <button className="btn btn-outline w-1/5" onClick={() => handleProvider(githubLogin)}>
          <FaGithub
            className="text-xl"
          />
          GitHub
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
