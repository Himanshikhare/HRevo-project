
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Corehr from "./components/pages/Corehr";
import Payroll from "./components/pages/Payroll";
import Careerpage from "./components/pages/Careerpage";
import AIpage from "./components/pages/AIpage";
import HRMSprice from "./components/pages/HRMSprice";
import Recruitingprice from "./components/pages/Recruitingprice";
import Contactus from "./components/pages/Contactus";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Requestfordemo from "./components/pages/Requestfordemo";


const appRouter=createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path : "/Corehr",
    element: <Corehr /> 
  },
  {
    path : "/Payroll",
    element: <Payroll /> 
  },
  {
    path : "/Careerpage",
    element: <Careerpage /> 
  },
  {
    path : "/AIpage",
    element: <AIpage /> 
  },
  {
    path : "/HRMSprice",
    element: <HRMSprice /> 
  },
  {
    path : "/Recruitingprice",
    element: <Recruitingprice /> 
  },
  {
    path : "/Contactus",
    element: <Contactus /> 
  },
  {
    path : "/Login",
    element: <Login /> 
  },
  {
    path : "/Signup",
    element: <Signup /> 
  },
  {
    path : "/Requestfordemo",
    element: <Requestfordemo /> 
  },




]);

function App() {
  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
    
  )
}

export default App
