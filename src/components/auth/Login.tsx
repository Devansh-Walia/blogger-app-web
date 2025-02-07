import React from "react";
import { useNavigate } from "react-router-dom";
import Google from "../../assets/svgs/google";
import Facebook from "../../assets/svgs/facebook";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSocialLogin = (provider: "google" | "facebook") => {
    // TODO: Implement actual social login logic
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <div className="mt-8 space-y-4">
          <button
            onClick={() => handleSocialLogin("google")}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Google />
            Continue with Google
          </button>
          <button
            onClick={() => handleSocialLogin("facebook")}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-[#1877F2] hover:bg-[#166FE5]"
          >
            <Facebook />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
