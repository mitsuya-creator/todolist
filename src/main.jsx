import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import BottomNavigation from "./components/button/ButtonNavigation";
import LandingPage from "@/pages/Index";
import EventsHere from "@/pages/Events";
import Calendar from "@/pages/Calendar";
import Form from "@/pages/Form";
import "./style/style.css";
import DetailEvents from "@/pages/DetailsEvents";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<BottomNavigation />} >
                    <Route index element={<Home />} />
                    <Route path="/dashboard/events" element={<EventsHere />}>
                    </Route>
                    <Route path="/dashboard/calendar" element={<Calendar />} />
                </Route>
                <Route path="/events/detail/:id" element={<DetailEvents />} />
                <Route path="/newtask" element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(
    <App />
)