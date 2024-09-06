import { Link } from "react-router-dom";
import img from "../../assets/images/auth-login.png";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-700 min-h-screen flex justify-center items-center">
      <div className="flex justify-around ">
        <div className="text-white space-y-16 ">
          <div className="space-y-4">
            <h1 className="text-3xl tracking-wider">Welcome</h1>
            <h2 className="text-3xl"><span className="text-green-400 font-bold text-5xl">TalkNest</span> - Chat App</h2>
            <p className="tracking-widest text-sm">
              <small>Developed by- <span className="tracking-widest">Riyad Hosen</span></small>
            </p>
          </div>
          <div>
            <Link to={"/login"}>
              <button className="bg-green-400 px-4 py-2 rounded-md hover:scale-105 transition-transform">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 hover:-translate-y-1 hover:shadow-lg transition-transform hover:shadow-white">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
