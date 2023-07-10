import "./login.scss";
import logo from "../../images/valtec-logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] flex justify-center items-center font-mono bg-slate-300">
      <div className="bg-white/40 backdrop-blur-xl md:w-[30%] w-[90%] p-3 md:p-0  md:h-[50%] shadow-xl rounded-md flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="logo" />
        <div className="flex flex-col md:w-[80%] w-full gap-5 mt-[50px]">
          <input
            type="text"
            placeholder="username"
            className="md:p-6 p-4 text-[20px] border-solid border-[2px] border-gray-500 focus:outline-0"
          />
          <input
            type="text"
            placeholder="password"
            className="md:p-6 p-4 text-[20px] border-solid border-[2px] border-gray-500 focus:outline-0"
          />
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-green-600 p-4 rounded-full text-white text-[25px]"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
