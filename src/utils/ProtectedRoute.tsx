import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../providers/AuthProvider";

type ProtectedRouteProps = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const auth = useAuth();
  console.log("auth", auth);

  if (!auth?.token) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;
