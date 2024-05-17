import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Home } from "./Home.jsx";



import { SearchPage } from "./SearchPage.jsx";

import { MiLista } from "./MiLista.jsx";

import { MoviePage } from "./MoviePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Results } from "./Results.jsx";

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
    path: "/mi-lista",
    element: <MiLista />,
  },
  {
    path: "/recomendations",
    element: <Results />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <div className="py-4 invisible"></div>
  </React.StrictMode>
);
