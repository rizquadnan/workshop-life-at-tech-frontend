import { createBrowserRouter, Navigate } from "react-router-dom";

import { ForgotPassword } from "@/routes/ForgotPassword";
import PrivateLayout from "@/routes/PrivateLayout";
import Register from "@/routes/Register";
import ErrorPage from "@/utils/ErrorPage";

import { AuthProvider } from "./providers/AuthProvider";
import AppSwitcher from "./routes/AppSwitcher";
import CustomerDashboard from "./routes/Customer/CustomerDashboard";
import CustomerExercise from "./routes/Customer/CustomerExercise";
import CustomerProfile from "./routes/Customer/CustomerProfile";
import CustomerProfilePassword from "./routes/Customer/CustomerProfilePassword";
import Login from "./routes/Login";
import PublicLayout from "./routes/PublicLayout";
import { RootLayout } from "./routes/RootLayout";
import { TrainerCustomer } from "./routes/Trainer/TrainerCustomer";
import TrainerCustomerAdd from "./routes/Trainer/TrainerCustomerAdd";
import TrainerDashboard from "./routes/Trainer/TrainerDashboard";
import TrainerExercise from "./routes/Trainer/TrainerExercise";
import TrainerExerciseActive from "./routes/Trainer/TrainerExerciseActive";
import TrainerExerciseAdd from "./routes/Trainer/TrainerExerciseAdd";
import TrainerExercisePending from "./routes/Trainer/TrainerExercisePending";
import TrainerProfile from "./routes/Trainer/TrainerProfile";
import TrainerProfilePassword from "./routes/Trainer/TrainerProfilePassword";
import ProtectedRoute from "./utils/ProtectedRoute";
import UserTypeGuard from "./utils/UserTypeGuard";

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
        element: <PublicLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to="/switcher" />,
          },
          {
            path: "/switcher",
            element: <AppSwitcher />,
          },
          {
            path: "/login",
            element: (
              <UserTypeGuard>
                <Login />,
              </UserTypeGuard>
            ),
          },
          {
            path: "/register",
            element: (
              <UserTypeGuard>
                <Register />,
              </UserTypeGuard>
            ),
          },
          {
            path: "/forgot-password",
            element: (
              <UserTypeGuard>
                <ForgotPassword />,
              </UserTypeGuard>
            ),
          },
        ],
      },
      {
        path: "/app-trainer",
        element: (
          <ProtectedRoute>
            <PublicLayout />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <TrainerDashboard />,
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
        element: (
          <ProtectedRoute>
            <PrivateLayout />
          </ProtectedRoute>
        ),
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
