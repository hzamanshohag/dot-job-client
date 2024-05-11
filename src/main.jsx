import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Addjob from "./pages/Addjob";
import AuthProvider from "./context/AuthProvider";
import CatagoryDetils from "./pages/CatagoryDetils";
import ErrorPage from "./pages/ErrorPage";
import FindJob from "./pages/FindJob";
import FindJobDetils from "./pages/FindJobDetils";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import MyBids from "./pages/MyBids";
import MyJob from "./pages/MyJob";
import PrivateRouter from "./pages/PrivateRouter";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";
import Signup from "./pages/Signup";
import UpdateJob from "./pages/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/findjob",
        element: <FindJob />,
        loader: () => fetch("https://dot-job-server.vercel.app/job"),
      },
      {
        path: "/findjob/:id",
        element: (
          <PrivateRouter>
            <FindJobDetils />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://dot-job-server.vercel.app/job/${params.id}`),
      },
      {
        path: "/catagory/:id",
        element: <CatagoryDetils />,
        loader: ({ params }) =>
          fetch(`https://dot-job-server.vercel.app/catagory/${params.id}`),
      },
      {
        path: "/addjob",
        element: <Addjob />,
      },
      {
        path: "/myjob",
        element: <MyJob />,
      },
      {
        path: "/myjob/:id",
        element: <UpdateJob />,

        loader: ({ params }) =>
          fetch(`https://dot-job-server.vercel.app/job/${params.id}`),
      },
      {
        path: "/mybids",
        element: <MyBids />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
