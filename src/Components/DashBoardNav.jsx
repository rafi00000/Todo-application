import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const DashBoardNav = () => {

    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () =>{
        logOut()
        .then(res => {
            console.log(res);
            toast.success("Successfully logged out")
            navigate("/")
        })
    }


    return (
        <div>
            {/* navbar */}
      <div className="bg-violet-400 p-5 mt-2 flex justify-between items-center">
        {/* Name */}
        <div>
            <p className="text-3xl font-bold"> Dashboard</p>
        </div>

        {/* menu option for dashboard */}
        <div className="flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-violet-700 font-bold underline rounded-md"
                : "text-black"
            }
          >
            Home
          </NavLink>
        </div>

        {/* profile option */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-"
          >
            <p className="text-center font-bold">{user?.displayName}</p>
            <li className="text-center">
              {user?.email}
            </li>
            <li onClick={handleLogOut} className="text-center">
              <p className="text-center">Logout</p>
            </li>
          </ul>
        </div>
      </div>
      <Toaster></Toaster>
        </div>
    );
};

export default DashBoardNav;