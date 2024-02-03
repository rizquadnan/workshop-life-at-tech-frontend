import { ReactNode } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

const UserTypeGuard = ({ children }: { children: ReactNode }) => {
  const [searchParam] = useSearchParams();

  if (!searchParam.get("user_type")) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default UserTypeGuard;
