import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import "./scss/app.scss";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/card/:id" element={<CardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
