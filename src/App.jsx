import React, {
  StrictMode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const ruter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={ruter} />;
};

export default App;
