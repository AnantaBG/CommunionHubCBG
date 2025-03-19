import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Events from "../Communal/Events/Events";
import About from "../Communal/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
        path: '/events',
        element: <Events/>
    },
    {
        path: '/about',
        element: <About/>
    }  
    
  ]);