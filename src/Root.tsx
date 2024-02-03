import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@/ErrorPage";
import { Dashboard } from "@/routes/Dashboard";
import { ForgotPassword } from "@/routes/ForgotPassword";
import PrivateLayout from "@/routes/PrivateLayout";
import PublicLayout from "@/routes/PublicLayout";
import { Register } from "@/routes/Register";
const Login = lazy(() => import("@/routes/Login"));

import LazyLoad from "./LazyLoad";
import { AuthProvider } from "./providers/AuthProvider";
import CustomerDashboard from "./routes/Customer/CustomerDashboard";
import CustomerExercise from "./routes/Customer/CustomerExercise";
import CustomerProfile from "./routes/Customer/CustomerProfile";
import CustomerProfilePassword from "./routes/Customer/CustomerProfilePassword";
import { RootLayout } from "./routes/RootLayout";
import { TrainerCustomer } from "./routes/Trainer/TrainerCustomer";
import TrainerCustomerAdd from "./routes/Trainer/TrainerCustomerAdd";
import TrainerExercise from "./routes/Trainer/TrainerExercise";
import TrainerExerciseActive from "./routes/Trainer/TrainerExerciseActive";
import TrainerExerciseAdd from "./routes/Trainer/TrainerExerciseAdd";
import TrainerExercisePending from "./routes/Trainer/TrainerExercisePending";
import TrainerProfile from "./routes/Trainer/TrainerProfile";
import TrainerProfilePassword from "./routes/Trainer/TrainerProfilePassword";

const routeRoot = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <RootLayout />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          {
            path: "/login",
            element: (
              <LazyLoad>
                <Login />
              </LazyLoad>
            ),
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/forgot-password",
            element: <ForgotPassword />,
          },
        ],
      },
      {
        path: "/app-trainer",
        element: <PrivateLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "customers",
            children: [
              {
                index: true,
                element: <TrainerCustomer />,
              },
              {
                path: "add",
                element: <TrainerCustomerAdd />,
              },
            ],
          },
          {
            path: "exercises",
            children: [
              {
                index: true,
                element: <TrainerExercise />,
              },
              {
                path: "start",
                element: <TrainerExerciseAdd />,
              },
              {
                path: "pending",
                element: <TrainerExercisePending />,
              },
              {
                path: "active",
                element: <TrainerExerciseActive />,
              },
            ],
          },
          {
            path: "profile",
            children: [
              {
                index: true,
                element: <TrainerProfile />,
              },
              {
                path: "change-password",
                element: <TrainerProfilePassword />,
              },
            ],
          },
        ],
      },
      {
        path: "/app-customer",
        element: <PrivateLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <CustomerDashboard />,
          },
          {
            path: "exercises",
            children: [
              {
                index: true,
                element: <CustomerExercise />,
              },
            ],
          },
          {
            path: "profile",
            children: [
              {
                index: true,
                element: <CustomerProfile />,
              },
              {
                path: "change-password",
                element: <CustomerProfilePassword />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default routeRoot;
