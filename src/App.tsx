import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/auth/Login";
import Dashboard from "./components/blog/Dashboard";
import CreatePost from "./components/blog/CreatePost";
import Posts from "./components/blog/Posts";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Post from "./components/blog/Post";

function App() {
  return (
    <BrowserRouter>
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

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
