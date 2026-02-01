import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


function Login() {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("/api/user/login", userInfo);

      if (response.data) {
        toast.success("Login successful");
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || "Login failed");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-96 p-8 rounded-2xl shadow-xl space-y-4"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Chat<span className="text-green-500">App</span>
        </h1>

        <h2 className="text-xl font-semibold text-center text-gray-700">
          Login
        </h2>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              Email is required
            </span>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              Password is required
            </span>
          )}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 text-sm">
          New user?
          <Link
            to="/signup"
            className="text-green-500 font-medium ml-1 hover:underline"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;