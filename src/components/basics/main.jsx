import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Home } from "./Home.jsx";

import { SearchPage } from "./SearchPage.jsx";

import { MiLista } from "./MiLista.jsx";

import { MoviePage } from "./MoviePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/movie",
    element: <MoviePage />,
  },
  {
    path: "/miLista",
    element: <MiLista/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div className="py-4 invisible"></div>
  </React.StrictMode>
);
