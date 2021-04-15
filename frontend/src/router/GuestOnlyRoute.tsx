import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import { isAuthSelector } from "../store/auth"

export const GuestOnlyRoute = (props: any) => {
    const isAuth = useSelector(isAuthSelector);

    return isAuth ? <Redirect to="/dashboard" /> : <Route {...props} />
}
