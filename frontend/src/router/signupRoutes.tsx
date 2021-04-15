import React from "react"
import { NotFound } from "../page/Notfound";
import { Signup } from "../page/Signup";
import { SignupComplete } from "../page/SignupComplete";
import { SignupConfirm } from "../page/SignupConfirm";

export const signupRoutes = [
    {
        path: "/",
        exact: true,
        children: <Signup />
    },
    {
        path: "/confirm",
        exact: true,
        children: <SignupConfirm />
    },
    {
        path: "/complete",
        exact: true,
        children: <SignupComplete />
    },
    {
        path: "*",
        exact: false,
        children: <NotFound />
    }
]
