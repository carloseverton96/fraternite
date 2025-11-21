import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contatos from "./pages/Contatos";
import Inicio from "./pages/Inicio";
import BackToTop from "./components/BackToTop";
import Periodico from "./pages/Periodico";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contatos" element={<Contatos />} /> {/* Corrigido: contatos */}
          <Route path="/periodico/:id" element={<Periodico />} />
        </Routes>
        <BackToTop/>
      </main>
    </>
  );
}