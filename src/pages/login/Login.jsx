import "./login.scss";
import logo from "../../images/valtec-logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/AuthActions";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.isLoading);

  const handleSignIn = () => {
    if (password && email) {
      console.log("email", email);
      console.log("password", password);
      const data = JSON.stringify({ email, password });
      //   console.log("data===>",data)
      dispatch(login(data));
    } else {
      console.log("Please Provide Login Details");
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center font-mono bg-slate-300">
      <div className="bg-white/40 backdrop-blur-xl md:w-[30%] w-[90%] p-3 md:p-0  md:h-[60%] shadow-xl rounded-md flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="logo" />
        <div className="flex flex-col md:w-[80%] w-full gap-5 mt-[50px]">
          <input
            type="text"
            placeholder="username"
            className="md:p-6 p-5 text-[20px] border-solid border-[2px] border-gray-500 focus:outline-0"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="md:p-6 p-5 text-[20px] border-solid border-[2px] border-gray-500 focus:outline-0"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignIn}
            className="bg-green-600 p-4 rounded-full text-white text-[25px] flex justify-center items-center"
          >
            {loading ? <Spinner /> : "submit"}
          </button>
          <div className="flex justify-center items-center text-red-500">
            {error && <h1>{error}</h1>}
          </div>
          <div className="flex justify-around items-center mb-[50px]">
            <h1>Forgot Passord ?</h1>
            <h1>Sign Up</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
