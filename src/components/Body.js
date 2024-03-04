import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export default Body;
