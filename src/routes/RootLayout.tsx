import { Outlet } from "react-router-dom";

import { useAuth } from "@/providers/AuthProvider";

export const RootLayout = () => {
  const auth = useAuth();

  return (
    <>
      <pre>{JSON.stringify(auth)}</pre>
      <nav>
        <button
          onClick={() => {
            auth?.onLogin();
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            auth?.onLogout();
          }}
        >
          logout
        </button>
      </nav>
      <Outlet />
    </>
  );
};
