import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import Userprompt from "./pages/Userprompt";
import ActorPage from "./pages/Actorpage";

function Page() {
    return (
        <BrowserRouter>
            <div className="page">
                <Navbar />
                <div>
                    <Routes>
                        <Route index exact path="/" element={<Userprompt />}>
                        </Route>
                        <Route exact path="/actors" element={<ActorPage />}>
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "80px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><Page /></React.StrictMode>);