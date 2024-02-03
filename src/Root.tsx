import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@/ErrorPage";
import { CustomerAdd } from "@/routes/Customer/CustomerAdd";
import { CustomerIndex } from "@/routes/Customer/CustomerIndex";
import { Dashboard } from "@/routes/Dashboard";
import { ExerciseActive } from "@/routes/Exercise/ExerciseActive";
import { ExerciseIndex } from "@/routes/Exercise/ExerciseIndex";
import { ExercisePending } from "@/routes/Exercise/ExercisePending";
import { ExerciseStart } from "@/routes/Exercise/ExerciseStart";
import { ForgotPassword } from "@/routes/ForgotPassword";
import PrivateLayout from "@/routes/PrivateLayout";
import PublicLayout from "@/routes/PublicLayout";
import { Register } from "@/routes/Register";

const Login = lazy(() => import("@/routes/Login"));
const routeRoot = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/app",
    element: <PrivateLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "exercise",
        children: [
          {
            index: true,
            element: <ExerciseIndex />,
          },
          {
            path: "start",
            element: <ExerciseStart />,
          },
          {
            path: "pending",
            element: <ExercisePending />,
          },
          {
            path: "active",
            element: <ExerciseActive />,
          },
        ],
      },
      {
        path: "customer",
        children: [
          {
            index: true,
            element: <CustomerIndex />,
          },
          {
            path: "add",
            element: <CustomerAdd />,
          },
        ],
      },
    ],
  },
]);

export default routeRoot;
