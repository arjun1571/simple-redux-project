import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import TopRade from "../component/TopRade/TopRade";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/home",
            element: <Home></Home>
        },
        {
            path:"/about",
            element: <About></About>
        },
        {
            path:"/top-rade",
            element: <TopRade></TopRade>
        },
      ]
    },
  ]);