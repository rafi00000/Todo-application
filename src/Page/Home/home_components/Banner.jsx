import { FaPen, FaStickyNote } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="space-y-3 flex flex-col justify-center items-center py-32 relative border">
      <h1 className="text-4xl md:text-6xl font-bold text-center w-4/5 mx-auto">Turning dreams into plans, one task at a time.</h1>
      <p className="text-center"><button className="btn bg-white border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">Let's Explore</button></p>
      <div className="">
      <FaStickyNote className="text-7xl absolute left-10 bottom-10 text-purple-200 animate-bounce" />
      <FaPen className="text-4xl absolute right-10 top-10 text-purple-200 animate-bounce" />
        </div>
        
    </div>
  );
};

export default Banner;
