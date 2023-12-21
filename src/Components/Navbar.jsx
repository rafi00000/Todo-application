import { NavLink } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="bg-violet-300 p-5 flex justify-between items-center">
      {/* image */}
      <div>
        <h1 className="text-2xl font-bold">TO DO</h1>
      </div>
      {/* menu */}
      <div className="flex-1 text-center group">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-violet-700 font-bold underline p-2 rounded-md" : "text-black"}>Home</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-violet-700 font-bold underline p-2 rounded-md" : "text-black"}>kichu</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-violet-700 font-bold underline p-2 rounded-md" : "text-black"}>kichu</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-violet-700 font-bold underline p-2 rounded-md" : "text-black"}>kichu</NavLink>
      </div>
      {/* dashboard */}
      <div className="">
        <button className="btn btn-sm btn-outline">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
