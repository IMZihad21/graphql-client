import "@fontsource/poppins";
import { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Blog from "./Components/Blog";
import Loader from "./Components/Shared/Loader";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";

function App() {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "blog/:blogSlug",
          element: <Blog />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  const allRoutes = useRoutes(routes);

  return <Suspense fallback={<Loader fullPage={true} />}>{allRoutes}</Suspense>;
}

export default App;
