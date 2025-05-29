import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FallBackError from "src/components/FallBackError";
const PublicPage = lazy(() => import("src/components/PublicPage"));
const WS2023 = lazy(() => import("src/components/WS2023"));
const WS2022 = lazy(() => import("src/components/WS2022"));
const WS2024 = lazy(() => import("src/components/WS2024"));
const WS2025 = lazy(() => import("src/components/WS2025"));
const Schedule = lazy(() => import("src/components/Schedule"));
const CallForPapers = lazy(() => import("src/components/CallForPapers"));
const Organizers = lazy(() => import("src/components/Organizers"));

import Layout from "src/components/Layout";
import { Spinner } from "src/commons/Loader";
import "src/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <PublicPage /> },
      { path: "/TrustAIIndaba2023", element: <WS2023 /> },
      { path: "/TrustAIIndaba2022", element: <WS2022 /> },
      { path: "/TrustAIIJCAI2024", element: <WS2024 /> },
      { path: "/TrustAIIndaba2025", element: <WS2025 /> },
      { path: "/schedule", element: <Schedule /> },
      { path: "/call-for-papers", element: <CallForPapers /> },
      { path: "/organizers", element: <Organizers /> },
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
