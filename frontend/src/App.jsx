import React from "react";
import Left from "./Home/Leftpart/Left";
import Right from "./Home/Rightpart/Right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [authUser] = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex w-screen h-screen overflow-hidden">
                {/* LEFT */}
                <div className="flex-shrink-0 basis-[30%] max-w-[30%]">
                  <Left />
                </div>

                {/* RIGHT */}
                <div className="flex-1 basis-[70%] max-w-[70%]">
                  <Right />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;