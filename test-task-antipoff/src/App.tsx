import React from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import Header from "./components/Header";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";

function App() {
  return (
    
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/:id"
            element={
              <CardPage
                user={{
                  id: 7,
                  email: "michael.lawson@reqres.in",
                  first_name: "Michael",
                  last_name: "Lawson",
                  avatar: "https://reqres.in/img/faces/7-image.jpg",
                }}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
  );
}

export default App;
