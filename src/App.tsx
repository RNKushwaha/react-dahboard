import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layouts/app-layout";
import AuthLayout from "./components/layouts/auth-layout";

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
      element: <AppLayout />,
      loader: RootLoader,
      errorElement: <Error404 />,
      children: [
        {
          path: "/",
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
  ]);

  return (
    <RouterProvider router={router} />
    // <React.Suspense fallback={<></>}>
    //   <Routes>
    //     <Route element={<AppLayout />}>
    //       <Route index element={<Home />} />
    //       <Route path="pokemon" element={<Pokemon />}>
    //         <Route path=":id" element={<PokemonDetails />} />
    //         <Route path=":search" element={<PokemonSearch />} />
    //       </Route>
    //     </Route>

    //     <Route element={<AuthLayout />}>
    //       <Route path="/auth/login" element={<Login />} />
    //       <Route path="/auth/register" element={<Register />} />
    //       <Route path="/auth/forgot-password" element={<ForgotPassword />} />
    //     </Route>
    //     <Route element={<AppLayout />}>
    //       <Route path="*" element={<Error404 />} />
    //     </Route>
    //   </Routes>
    // </React.Suspense>
  );
}

export default App;
