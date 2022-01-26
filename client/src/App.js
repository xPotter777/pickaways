//libs
import { Route, Routes, Navigate } from "react-router";
//components
import Header from "./components/Header/Header";
//routes
import BetRefsPage from "./routeHandlers/BetRefsPage";
import MainPage from "./routeHandlers/MainPage";
import FaqPage from "./routeHandlers/FaqPage";
import SkinAwaysPage from "./routeHandlers/SkinAwaysPage";
import ProPlanPage from "./routeHandlers/ProPlanPage";
//styles
import "./App.module.scss";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/skin-aways" element={<SkinAwaysPage />} />
        <Route path="/pro-plan" element={<ProPlanPage />} />
        <Route path="/bet-refs" element={<BetRefsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
