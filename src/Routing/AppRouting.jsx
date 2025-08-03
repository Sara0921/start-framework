import { createBrowserRouter } from "react-router";
import Login from "../Pages/auth/Login/Login";
import Register from "../Pages/auth/Register/Register";
import Layout from "../Components/Layout/Layout";
import Posts from "../Pages/Posts/Posts";


export const routing = createBrowserRouter([
    {
        path: `/`, element: <Layout />, children: [
            { index:true, element: <Posts /> },
            { path: `/login`, element: <Login /> },
            { path: `/register`, element: <Register /> }

        ]
    },

])