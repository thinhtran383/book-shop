import React from "react";

export const routes = [
    {
        label: "Home",
        path: "/",
        component: React.lazy(
            () => import("../pages/HomePage/HomePage.tsx")
        ),
        children: []
    },
    {
        label: "NotFound",
        path: "*",
        component: React.lazy(
            () => import("../pages/NotFoundPage/NotFound.tsx")
        ),
        children: []
    }
];