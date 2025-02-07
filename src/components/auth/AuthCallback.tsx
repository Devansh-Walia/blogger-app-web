import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import { AUTH_TOKEN_KEY, USER_COOKIE_KEY } from "../../utils/constants";

export function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("access_token");
    const userData = params.get("user");

    if (token && userData) {
      Cookies.set(AUTH_TOKEN_KEY, token);
      Cookies.set(USER_COOKIE_KEY, userData);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      navigate("/dashboard");
    }
  }, [navigate]);

  return <div>Processing authentication...</div>;
}
