import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FallBackError from "src/components/FallBackError";
const PublicPage = lazy(() => import("src/components/PublicPage"));
const WS2023 = lazy(() => import("src/components/WS2023"));
const WS2022 = lazy(() => import("src/components/WS2022"));
const Schedule = lazy(() => import("src/components/Schedule"));

import Layout from "src/components/Layout";
import { Spinner } from "src/commons/Loader";
import "src/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <PublicPage /> },
      { path: "/workshop2023", element: <WS2023 /> },
      { path: "/workshop2022", element: <WS2022 /> },
      { path: "/schedule", element: <Schedule /> },
      {
        path: "*",
        element: (
          <FallBackError
            status={404}
            message="The resource you're looking for is unavailable."
          />
        ),
      },
    ],
  },
]);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </Suspense>
  );
};

export default AppRoutes;
