import React from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./components/landingPage";
import Home from "./components/home";
import "./style/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
    <Home />
)