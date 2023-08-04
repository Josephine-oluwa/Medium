import React from "react"
import {createBrowserRouter} from "react-router-dom"
import SignUp from "../pages/Auth/SignUp"
import SignIn from "../pages/Auth/SignIn"


export const mainRoute = createBrowserRouter([
    {
        path: "/SignUp",
        element: <SignUp/>
    },
    {
        path: "SignIn",
        element: <SignIn/>
    }
])