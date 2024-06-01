// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import { ThemeProvider } from "@mui/material/styles";
import ForgotPasswordPage from "./components/ForgotPasswordPage/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./components/ResetPasswordPage/ResetPasswordPage.jsx";
import theme from "./theme.js";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />{" "}
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route
              path="/auth/reset-password"
              element={<ResetPasswordPage />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
