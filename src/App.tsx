import React from "react";
import { SignInPage } from "./pages/SignInPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/route/ProtectedRoute";
import { ConfirmSignUpPage } from "./pages/ConfirmSignUp";
import { SignUpPage } from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import { DashboardLayout, NormalLayout } from "./components/layout/Layouts";
import { AppRoute } from "./components/route/AppRoute";
import { Home } from "./pages/Home";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              layout={DashboardLayout}
              path="/"
              exact
              component={Home}
            />
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              path="/profile"
              layout={DashboardLayout}
              component={ProfilePage}
            />
          }
        ></Route>
        <Route
          path="/settings"
          element={
            <ProtectedRoute
              path="/settings"
              layout={DashboardLayout}
              component={SettingsPage}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <AppRoute
              layout={NormalLayout}
              path="/login"
              exact
              component={SignInPage}
            />
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <AppRoute
              layout={NormalLayout}
              path="/signup"
              exact
              component={SignUpPage}
            />
          }
        ></Route>
        <Route
          path="/confirm"
          element={
            <AppRoute
              layout={NormalLayout}
              path="/confirm"
              exact
              component={ConfirmSignUpPage}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
