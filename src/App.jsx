import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Layout from "./components/Layout"

import Home from "./pages/Home"
import ImpactoSocial from "./pages/ImpactoSocial"
import Beneficios from "./pages/Beneficios"
import Chatbot from "./pages/Chatbot";
import FaleConosco from "./pages/FaleConosco/FaleConosco";
import ChatbotButton from './components/ChatBotao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/impacto" element={<ImpactoSocial />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/fale" element={<FaleConosco />} />
        </Route>
      </Routes>
      <ChatbotButton />
    </BrowserRouter>
  );
}


export default App;
