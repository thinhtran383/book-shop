import React, {Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./route.ts";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.label}
                        path={route.path}
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <route.component/>
                            </Suspense>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
