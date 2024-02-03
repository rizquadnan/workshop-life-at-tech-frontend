import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./providers/AuthProvider";

type ProtectedRouteProps = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const auth = useAuth();

  if (!auth?.token) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
