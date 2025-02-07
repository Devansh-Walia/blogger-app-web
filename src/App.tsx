import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthCallback } from "./components/auth/AuthCallback";
import Login from "./components/auth/Login";
import Dashboard from "./components/blog/Dashboard";
import CreatePost from "./components/blog/CreatePost";
import Posts from "./components/blog/Posts";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Post from "./components/blog/Post";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/post" element={<Post />} />
          <Route path="/posts" element={<Posts />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-post"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />

          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
