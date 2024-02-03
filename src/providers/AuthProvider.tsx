import React, { createContext, ReactNode } from "react";

import { User } from "@/api/auth";

type Auth = {
  token: string | null;
  user: User | null;
  onLoginSuccess: (token: string, user: User) => void;
  onLogout: () => void;
};
const AuthContext = createContext<Auth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = React.useState<string | null>(null);
  const [user, setUser] = React.useState<User | null>(null);

  const handleAfterLogin = (token: string, user: User) => {
    setToken(token);
    setUser(user);
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
  };

  const value: Auth = {
    token,
    user,
    onLoginSuccess: handleAfterLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside a descendant of AppProvider");
  }

  return context;
};
