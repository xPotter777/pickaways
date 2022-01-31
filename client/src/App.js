//libs
import { Navigate, Route, Routes } from "react-router";
import { createContext, useState } from "react";
//components
import Header from "./components/Header/Header";
import Modal from "./components/Modal";
//routes
import BetRefsPage from "./routeHandlers/BetRefsPage";
import MainPage from "./routeHandlers/MainPage";
import FaqPage from "./routeHandlers/FaqPage";
import SkinAwaysPage from "./routeHandlers/SkinAwaysPage";
import ProPlanPage from "./routeHandlers/ProPlanPage";
//styles
import "./App.module.scss";

export const ModalContext = createContext();

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <ModalContext.Provider value={{ modalActive, setModalActive }}>
      <div>
        <Header />
        <Modal active={modalActive} setActive={setModalActive} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/skin-aways" element={<SkinAwaysPage />} />
          <Route path="/pro-plan" element={<ProPlanPage />} />
          <Route path="/bet-refs" element={<BetRefsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </ModalContext.Provider>
  );
}

export default App;
