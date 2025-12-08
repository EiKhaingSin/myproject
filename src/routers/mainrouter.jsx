import { createBrowserRouter } from "react-router-dom";
//import UserLogin from "../component/newlog.jsx";
import Login from "../component/login.jsx";
import Card from "../component/card.jsx"
import Smallweb from "../component/smallweb.jsx";

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
    path: "/",          
    element: <Smallweb />
  },
]);

export default router;
