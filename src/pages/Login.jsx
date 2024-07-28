import React, { useState } from "react";
import googleImg from "../assets/images/channels4_profile.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full flex flex-col justify-between items-center p-10 overflow-auto mt-5">
      <div className="lg:w-1/3 shadow-lg border rounded-lg lg:h-[80vh] p-4 flex flex-col items-left md:w-full">
        <div className="text-[1.5rem] font-semibold font-mono pb-4">
          <span>Login to your Account</span>
        </div>
        <div className="text-sm font-mono pb-8">
          See what is going on with your business
        </div>
        <div className="flex justify-center items-center">
          <button className="flex flex-row gap-4 rounded-md justify-center items-center border border-[#d1d5db] shadow-md py-2 w-full mb-8">
            <img src={googleImg} alt="Google" className="h-[30px] w-[30px]" />
            Continue with Google
          </button>
        </div>
        <div className="flex justify-center items-center">
          <span className="font-thin mb-8">
            ------------- or Sign in with Email -------------{" "}
          </span>
        </div>
        <form className="mt-4 flex flex-col gap-y-4">
          <label className="w-full">
            <p className="mb-2 text-[0.875rem] leading-[1.375rem] text-black">
              Email Address <sup className="text-[#991b1b]">*</sup>
            </p>
            <input
              required
              type="text"
              name="email"
              value={email}
              placeholder="Enter email address"
              onChange={handleOnChange}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-md p-[10px] border"
            />
          </label>
          <label className="relative">
            <p className="mb-2 text-[0.875rem] leading-[1.375rem] text-black">
              Enter Password<sup className="text-[#991b1b]">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={handleOnChange}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-md p-[10px] border"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[40px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
            <Link to="/forgot-password">
              <p className="mt-1 ml-auto max-w-max text-xs">Forgot Password</p>
            </Link>
          </label>
          <button
            type="submit"
            className="mt-4 rounded-lg bg-[#4c0519] px-[10px] py-[8px] font-bold font-mono text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
