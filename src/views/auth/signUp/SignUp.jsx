import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full py-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto max-w-lg">
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
              <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-2xl">
                Create your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-blue-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
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
                    className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                    placeholder="name@company.com"
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
                    placeholder="••••••••"
                    className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-blue-600"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white font-semibold py-3 rounded-full"
                >
                  Register
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Login
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
