import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import Login from "../views/auth/login/Login";
import SignUp from "../views/auth/signUp/SignUp";


export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />
  }
]);
