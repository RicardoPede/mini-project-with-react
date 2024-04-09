import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "../components/Header";
import List from "../components/List";
import Add from "../components/Add";
import Edit from "../components/Edit";
import { ElementProvider } from "../context/ElementContext";

const ApplicationRouter = () => {

    return (
        <BrowserRouter>
            <Header />
            <div className="main-container">
                <ElementProvider>
                    <Routes>
                        <Route exact path="/" element={<List/>} />
                        <Route path="/add" element={<Add/>} />
                        <Route path="/edit/:id" element={<Edit/>} />
                        <Route element={() => <NavLink to="/"/>} />
                    </Routes>
                </ElementProvider>
            </div>
        </BrowserRouter>
    );
}

export default ApplicationRouter;