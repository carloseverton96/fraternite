import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Contatos from "./pages/Contatos";
import Inicio from "./pages/Inicio";
import BackToTop from "./components/BackToTop";
import Periodico from "./pages/Periodico";
import Edicoes from "./pages/Edicoes";

export default function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/edicoes" element={<Edicoes />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/periodico/:id" element={<Periodico />} />
        {/* Adicione uma rota alternativa caso precise */}
        <Route path="/edicao/:id" element={<Periodico />} />
      </Routes>
      <BackToTop/>
    </HelmetProvider>
  );
}