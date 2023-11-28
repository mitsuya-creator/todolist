import { React, useReducer } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import BottomNavigation from "./components/button/ButtonNavigation";
import LandingPage from "@/pages/Index";
import EventsHere from "@/pages/Events";
import Calendar from "@/pages/Calendar";
import FormAdd from "@/pages/FormAdd";
import FormEdit from "@/pages/FormEdit";
import DetailEvent from "@/pages/DetailEvent";
import { EventsContext, DispatchContext } from "@/utils/contex";
import { eventsReducer } from "@/utils/reducer";
import { getItemFromLocalStorage } from "@/utils/itemLocalStorage";
import "./style/style.css";

function App() {
    let initialEvents = getItemFromLocalStorage();
    const [events, dispatch] = useReducer(eventsReducer, initialEvents);
    console.log(events);
    return (
        <EventsContext.Provider value={events}>
            <DispatchContext.Provider value={dispatch}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/dashboard" element={<BottomNavigation />} >
                            <Route index element={<Home />} />
                            <Route path="/dashboard/events" element={<EventsHere />}>
                            </Route>
                            <Route path="/dashboard/calendar" element={<Calendar />} />
                        </Route>
                        <Route path="/events/detail/:id" element={<DetailEvent />}>
                            {/* <Route path="/events/detail/:id/edit" element={<FormEdit />} /> */}
                        </Route>
                        <Route path="/newtask" element={<FormAdd />} />
                    </Routes>
                </BrowserRouter>
            </DispatchContext.Provider>
        </EventsContext.Provider>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(
    <App />
)