import Typewriter from "typewriter-effect";

const UserPage = () => {
  return (
    <div>
      <h1 className="text-center font-bold md:text-5xl">For whom this web is? </h1>
      <p className="text-center text-4xl text-violet-500 font-bold"><Typewriter
      
      options={{
        strings: ["Students", "Businessman", "Job Holders", "& Others "],
        autoStart: true,
        loop: true,
      }}
    /></p>      
    </div>
  );
};

export default UserPage;
