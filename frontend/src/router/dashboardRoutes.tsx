import React from "react"
import { Dashboard } from "../page/Dashboard"
import { NotFound } from "../page/Notfound"
import { Settings } from "../page/Settings"

export const dashboardRoutes = [
    {
        path: "/",
        exact: true,
        children: <Dashboard />
    },
    {
        path: "/settings",
        exact: true,
        children: <Settings />
    },
    {
        path: "*",
        exact: false,
        children: <NotFound />
    }
]
