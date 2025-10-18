import axios, { InternalAxiosRequestConfig } from "axios";
import { jwtDecode } from "jwt-decode";
import { store } from "./store/store";
import { clearToken } from "./authSlice/authSlice";
import { navigationRef } from "../routing/stack/navigation";

interface DecodedToken {
  exp?: number;
  expiresIn?: number;
  [key: string]: any;
}

export const APIClient = axios.create({
  baseURL: "https://dummyjson.com",
});

export function isTokenExpire(token: string): boolean {
  try {
    const { exp, expiresIn } = jwtDecode<DecodedToken>(token);
    const now = Date.now() / 1000;
    return (exp ?? expiresIn ?? 0) < now;
  } catch {
    return true;
  }
}

export const publicRoutes = ["/auth/register", "/auth/login"];

APIClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (config.url && !publicRoutes.includes(config.url)) {
      const token = store.getState().auth.token as string | null;
      if (!token || isTokenExpire(token)) {
        store.dispatch(clearToken());
        if (navigationRef.isReady()) {
          navigationRef.navigate("Login");
        }
        return config;
      }
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);
