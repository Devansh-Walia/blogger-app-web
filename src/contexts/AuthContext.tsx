import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { AUTH_TOKEN_KEY, USER_COOKIE_KEY } from "../utils/constants";
import appConfig from "../utils/config";

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  loginWithGoogle: () => void;
  loginWithFacebook: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get(AUTH_TOKEN_KEY);

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const userData = JSON.parse(Cookies.get(USER_COOKIE_KEY) || "null");

      setUser(userData);
    }
    setLoading(false);
  }, []);

  const loginWithGoogle = () => {
    window.location.href = appConfig.serverUrl + "/auth/google";
  };

  const loginWithFacebook = () => {
    window.location.href = appConfig.serverUrl + "/auth/facebook";
  };

  const logout = () => {
    Cookies.remove(AUTH_TOKEN_KEY);
    Cookies.remove(USER_COOKIE_KEY);
    setUser(null);
    delete axios.defaults.headers.common["Authorization"];
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    loginWithGoogle,
    loginWithFacebook,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
