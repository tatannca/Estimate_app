import React, { VFC, memo } from "react"
import { Switch, Route } from "react-router"

import { Home } from "../page/Home"
import { Login } from "../page/Login"
import { NotFound } from "../page/Notfound"
import { Privacypolicy } from "../page/Privacypolicy"
import { signupRoutes } from "./signupRoutes"
import { dashboardRoutes } from "./dashboardRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { GuestOnlyRoute } from "./GuestOnlyRoute"

export const AppRouter: VFC = memo(() => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/privacypolicy" exact component={Privacypolicy} />
            <GuestOnlyRoute path="/login" exact component={Login} />
            <Route path="/signup"
                render={({match: {url}}) => (
                <Switch>
                    {signupRoutes.map(route => (
                        <GuestOnlyRoute key={route.path}
                            path={`${url}${route.path}`}
                            exact={route.exact}>
                        {route.children}
                        </GuestOnlyRoute>
                    ))}
                </Switch>
                )} />
            <Route path="/dashboard"
                render={({match: {url}}) => (
                    <Switch>
                        {dashboardRoutes.map(route => (
                            <PrivateRoute key={route.path}
                                path={`${url}${route.path}`}
                                exact={route.exact}>
                            {route.children}
                            </PrivateRoute>
                        ))}
                    </Switch>
                    )} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
})
