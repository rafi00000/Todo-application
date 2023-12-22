import { NavLink } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="bg-violet-300 p-5 flex justify-around items-center">
      {/* image */}
      <div>
        <h1 className="text-2xl font-bold">TO DO</h1>
      </div>
      {/* menu */}
      <div className="flex gap-5">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-violet-700 font-bold underline rounded-md" : "text-black"}>Home</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-violet-700 font-bold underline rounded-md" : "text-black"}>kichu</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-violet-700 font-bold underline rounded-md" : "text-black"}>kichu</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? "text-violet-700 font-bold underline rounded-md" : "text-black"}>Login</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
