import React from "react";
import "./assets/App.css";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/views/Home";
import Login from "./Components/views/Login";
import Register from "./Components/views/Register";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{ m: 1, p: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
