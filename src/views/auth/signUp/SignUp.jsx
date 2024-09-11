import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  createUser,
  createDoctor,
} from "../../../service/http/CreateUserDoctor";

const SignUp = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialty: "",
    bio: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const data = {
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      specialty: isDoctor ? formData.specialty : undefined,
      bio: isDoctor ? formData.bio : undefined,
      price: isDoctor ? formData.price : undefined,
    };

    try {
      if (isDoctor) {
        await createDoctor(data);
        alert("Doctor registrado exitosamente!");
      } else {
        await createUser(data);
        alert("Usuario registrado exitosamente!");
      }
    } catch (error) {
      alert("El registro falló.");
    }
  };

  return (
    <section
      className={`bg-gradient-to-r ${
        isDoctor ? "from-green-500 to-blue-500" : "from-cyan-500 to-blue-500"
      } h-full py-10`}
    >
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
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-blue-600"
                >
                  Fullname
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                  required
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
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-blue-600"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                  required
                />
              </div>

              {isDoctor && (
                <>
                  <div>
                    <label
                      htmlFor="specialty"
                      className="block mb-2 text-sm font-medium text-blue-600"
                    >
                      Specialty
                    </label>
                    <input
                      type="text"
                      name="specialty"
                      id="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bio"
                      className="block mb-2 text-sm font-medium text-blue-600"
                    >
                      Biography
                    </label>
                    <input
                      type="text"
                      name="bio"
                      id="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-blue-600"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="border text-gray-900 rounded-lg focus:ring-primary-600 block w-full p-2.5 shadow-inner"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-semibold py-3 rounded-full"
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500">
                Do you have an account yet?{" "}
                <NavLink
                  to="/login"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Login
                </NavLink>
              </p>
            </form>
            <div className="mt-4 text-center">
              <p
                onClick={() => setIsDoctor(!isDoctor)}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                {isDoctor ? "Aren't you a doctor?" : "Are you a doctor?"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
