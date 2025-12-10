import { createBrowserRouter } from "react-router-dom";
//import UserLogin from "../component/newlog.jsx";
import Login from "../components/login.jsx";
import Card from "../components/card.jsx"
import  AuthForm from "../components/Login/switchlog.jsx"

const router = createBrowserRouter([
 
  {
    path: "/blog",
    element: <Login />,
  },
  {
    path:"/card",
    element: < Card />
  },
  {
    path: "/auth",
    element: <AuthForm />,
  }
]);

export default router;
