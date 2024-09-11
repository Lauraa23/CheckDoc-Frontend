import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import Login from "../views/auth/login/Login";
import SignUp from "../views/auth/signUp/SignUp";
import DoctorList from "../views/doctorsList/DoctorList";
import CreateAppointment from "../views/createAppointment/CreateAppointment";
import MyProfile from "../views/profile/MyProfile";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/doctorsList",
    element: <DoctorList />,
  },
  {
    path: "/createAppointment",
    element: <CreateAppointment />,
  },
  {
    path: "/profile",
    element: <MyProfile />,
  },
]);
