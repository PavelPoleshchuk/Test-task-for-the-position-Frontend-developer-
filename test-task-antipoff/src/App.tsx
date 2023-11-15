import React from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import { Form } from "./components/Form";
import Modal from "./components/Modal";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/form" element={<FormPage/>} />
      <Route path="/modal" element={<Modal getClickCloseModal={()=>{}} children={<Form/>}/>} />
      <Route path="/:id" element={<CardPage/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

