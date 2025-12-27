import {  useEffect, useState } from "react";
import api from "../services/api";
import { parseJwt, isTokenExpired } from "../utils/jwt";
import { AuthContext } from "./AuthContextBase";



export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? parseJwt(token) : null;
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");

      if (token && !isTokenExpired(token)) {
        setAccessToken(token);
        setUser(parseJwt(token));
        setLoading(false);
        return;
      }

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error();

        const res = await api.post("/auth/refresh-token", { refreshToken });
        const newToken = res.data.accessToken;

        localStorage.setItem("token", newToken);
        setAccessToken(newToken);
        setUser(parseJwt(newToken));
      } catch {
        setAccessToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.post("/auth/register", { name, email, password });
      const { accessToken, refreshToken } = res.data;

      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      setAccessToken(accessToken);
      setUser(parseJwt(accessToken));
      return true;
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.post("/auth/login", { email, password });
      const { accessToken, refreshToken } = res.data;

      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      setAccessToken(accessToken);
      setUser(parseJwt(accessToken));
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      setAccessToken(null);
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        login,
        logout,
        register,
        isAuthenticated: !!user,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
