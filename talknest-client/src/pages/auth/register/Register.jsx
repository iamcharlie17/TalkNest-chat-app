import { FaFacebook, FaGoogle, FaRocketchat } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import authImage from "../../../assets/images/auth_image.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(true);
  const { createUser, googleLogin, loading, setLoading, updateUser, logOut } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Account created successfully");
        updateUser(name, "")
          .then(() => {
            logOut();
            navigate("/login");
          })
          .catch((err) => {
            toast.error(`${err.message}`);
            setLoading(false);
          });
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
              <h1>TalkNest</h1>
            </Link>
          </div>
          <div>
            <img src={authImage} alt="" className="hidden lg:flex" />
          </div>
        </div>
        <div className="lg:w-2/3 bg-white mx-4 lg:m-8 md:mx-24 sm:mx-16 lg:min-h-[90vh] rounded-2xl flex justify-center items-center py-8">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">Welcome back!</h1>
              <h2>
                Register to continue to{" "}
                <span className="text-green-400">TalkNest</span>
              </h2>
            </div>
            <div className="flex justify-center ">
              <div className="md:w-1/2 w-full">
                <form className="p-8 lg:space-y-2">
                  <div className="lg:space-y-1">
                    <label htmlFor="name">Full Name</label>
                    <br />
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Enter full name"
                      className="border-2 border-gray-400 rounded-md w-full px-2 py-1 "
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="lg:space-y-1">
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
                  <div className="lg:space-y-1 relative">
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
                      onClick={handleRegister}
                      className="w-full text-center py-2 my-2 rounded-md bg-green-400 text-white uppercase"
                    >
                      {loading ? "Wait..." : "Register"}
                    </button>
                  </div>
                </form>
                <div className="space-y-1 lg:space-y-2">
                  <h1 className="text-center"> Sign in with </h1>
                  <hr />
                  <div className="flex justify-around mx-8 gap-8">
                    <button className="py-2 px-4 rounded-lg w-full bg-gray-300 text-black text-xl flex justify-center">
                      <FaFacebook />
                    </button>
                    <button
                      onClick={handleGoogleLogin}
                      disabled={loading}
                      className="py-2 px-4 rounded-lg w-full bg-gray-300 text-black text-xl flex justify-center"
                    >
                      <FaGoogle />
                    </button>
                  </div>
                  <h1 className="text-center">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-green-400 underline">
                      Sign In
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

export default Register;
