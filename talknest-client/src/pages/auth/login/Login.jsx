import { FaFacebook, FaGoogle, FaRocketchat } from "react-icons/fa";
import authImage from "../../../assets/images/auth_image.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(true);
  const {loading, setLoading, loginUser, googleLogin, user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then(() => {
        toast.success("Login Success");
        navigate("/chat");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(`${err.message}`);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success(`Login success`);
        navigate("/chat");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(`${err.message}`);
        setLoading(false);
      });
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="min-h-screen bg-green-400 ">
      <div className="flex flex-col lg:flex-row">
        <div className="w-1/3 m-8 flex flex-col justify-between">
          <div className="flex gap-4 text-3xl text-white items-center">
            <div>
              <FaRocketchat />
            </div>
            <Link to={"/"}>
              <h1>TalkNest {user?.displayName}</h1>
            </Link>
          </div>
          <div>
            <img src={authImage} alt="" className="hidden lg:flex" />
          </div>
        </div>
        <div className="lg:w-2/3 bg-white md:mx-24 lg:m-8 m-4 sm:mx-16 lg:min-h-[90vh] rounded-2xl flex justify-center items-center py-8">
          <div className="w-full">
            <div className="text-center">
              <h1 className="md:text-3xl font-semibold">Welcome back!</h1>
              <h2>
                Sign in to continue to{" "}
                <span className="text-green-400">TalkNest</span>
              </h2>
            </div>
            <div className="flex justify-center ">
              <div className="w-full md:w-1/2 ">
                <form className="p-8 space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      className="border-2 border-gray-400 rounded-md w-full px-2 py-1 "
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1 relative">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                      type={toggle ? "password" : "text"}
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      className="border-2 border-gray-400 rounded-md w-full px-2 py-1 "
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <h1
                      onClick={handleToggle}
                      className="absolute top-1/2 right-2 cursor-pointer text-sm"
                    >
                      {toggle ? "Show" : "Hide"}
                    </h1>
                  </div>
                  <div>
                    <button
                      disabled={loading}
                      onClick={handleLogin}
                      className="w-full text-center py-2 my-2 rounded-md bg-green-400 text-white uppercase"
                    >
                      {loading ? "Wait..." : "Sign in"}
                    </button>
                  </div>
                </form>
                <div className="space-y-4">
                  <h1 className="text-center"> Sign in with </h1>
                  <hr />
                  <div className="flex justify-around mx-8 gap-8">
                    <button className="py-2 px-4 rounded-lg w-full bg-gray-300 text-black text-xl flex justify-center">
                      <FaFacebook />
                    </button>
                    <button
                      disabled={loading}
                      onClick={handleGoogleLogin}
                      className="py-2 px-4 rounded-lg w-full bg-gray-300 text-black text-xl flex justify-center"
                    >
                      <FaGoogle />
                    </button>
                  </div>
                  <h1 className="text-center">
                    Do not have an account?{" "}
                    <Link to={"/register"} className="text-green-400 underline">
                      Register
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
