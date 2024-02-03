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
import { Login } from "@/routes/Login";
import PrivateRoot from "@/routes/PrivateRoot";
import PublicRoot from "@/routes/PublicRoot";
import { Register } from "@/routes/Register";

const routeRoot = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoot />,
    errorElement: <ErrorPage />,
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
    ],
  },
  {
    path: "/app",
    element: <PrivateRoot />,
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
