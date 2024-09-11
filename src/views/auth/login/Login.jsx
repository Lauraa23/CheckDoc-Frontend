import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { loginUser, loginDoctor } from "../../../service/http/LoginUserDoctor";

const Login = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isDoctor
        ? await loginDoctor(formData)
        : await loginUser(formData);
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("id", response.id);
      localStorage.setItem("name", response.name);
      localStorage.setItem("isDoctor", isDoctor);
      localStorage.setItem("email", response.email);
      alert(
        isDoctor
          ? "Doctor logged in successfully!"
          : "User logged in successfully!"
      );
      window.location.href = "/";
    } catch (error) {
      alert("Login failed.");
    }
  };

  return (
    <section
      className={`bg-gradient-to-r ${
        isDoctor ? "from-green-500 to-blue-500" : "from-cyan-500 to-blue-500"
      } h-full py-10`}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-heart-pulse"
            size="2xl"
            style={{ color: "#ffffff" }}
          />
          CheckDoc
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-600 text-gray-900 md:text-2xl">
              Welcome back again!
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-blue-600"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-blue-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-semibold py-4 rounded-full"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500">
                Don't have an account yet?{" "}
                <NavLink
                  to="/signUp"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Sign Up
                </NavLink>
              </p>
            </form>
            <div className="mt-4 text-center">
              <p
                onClick={() => setIsDoctor(!isDoctor)}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                {isDoctor ? "Aren't you a doctor?" : "Are you doctor?"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
