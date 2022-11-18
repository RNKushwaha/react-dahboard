import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layouts/app-layout";
import AuthLayout from "./components/layouts/auth-layout";
import RootLayout from "./components/layouts/root-layout";

const Home = React.lazy(() => import("./pages/home"));
const Pokemon = React.lazy(() => import("./pages/pokemon"));
const PokemonDetails = React.lazy(() => import("./pages/pokemon/details"));
const PokemonSearch = React.lazy(() => import("./pages/pokemon/search"));
const Register = React.lazy(() => import("./pages/auth/register"));
const Login = React.lazy(() => import("./pages/auth/login"));
const ForgotPassword = React.lazy(() => import("./pages/auth/forgot-password"));
const Error404 = React.lazy(() => import("./pages/error/error404"));

const RootLoader = () => <>Loading..</>
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      loader: RootLoader,
      errorElement: <Error404 />,
      children: [
        {
          path: "/",
          element: <AppLayout />,
          loader: RootLoader,
          errorElement: <Error404 />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "*",
              element: <Error404 />,
            },
          ],
        },
        {
          path: "/pokemon",
          element: <AppLayout />,
          errorElement: <Error404 />,
          children: [
            {
              index: true,
              element: <Pokemon />,
            },
            {
              path: "search",
              element: <PokemonSearch />,
              errorElement: <div>Oops! There was an error.</div>,
            },
            {
              path: ":id",
              element: <PokemonDetails />,
            },
            {
              path: "*",
              element: <Error404 />,
            },
          ],
        },
        {
          path: "/auth",
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
            {
              path: "forgot-password",
              element: <ForgotPassword />,
            },
            {
              path: "*",
              element: <Error404 />,
            },
          ],
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
