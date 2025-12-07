// Arquivo: src/pages/Eventos.jsx
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../css/index.css";
import eventosData from "../data/eventos.js";

export default function Eventos() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 9;
  const [modalAberto, setModalAberto] = useState(false);
  const [fotosModal, setFotosModal] = useState([]);
  const [tituloModal, setTituloModal] = useState("");
  const [descricaoModal, setDescricaoModal] = useState("");

  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const eventosPagina = eventosData.slice(indiceInicial, indiceFinal);

  const totalPaginas = Math.ceil(eventosData.length / itensPorPagina);

  const abrirModal = (evento) => {
    setFotosModal(evento.fotos || []);
    setTituloModal(evento.titulo || evento.title);
    setDescricaoModal(evento.descricao || evento.descritao || "");
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setFotosModal([]);
    setTituloModal("");
    setDescricaoModal("");
  };

  // Função para obter URL pública compatível com Vite e outros ambientes
  const getPublicUrl = (path) => {
    // Para Vite
    if (import.meta.env) {
      const baseUrl = import.meta.env.BASE_URL || '/';
      return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
    }
    // Fallback para outros ambientes
    return path;
  };

  return (
    <div className="eventos-container">
      <Helmet>
        <title>Eventos - Fraternite's</title>
        <meta name="description" content="Coberturas de eventos espíritas realizados pela Fraternite's" />
      </Helmet>
      
      <header>
        <h1>Coberturas de Eventos</h1>
        <p>Acompanhe nossos principais momentos</p>
      </header>

      {/* GRID DE EVENTOS */}
      <div className="eventos-grid">
        {eventosPagina.map((evento) => (
          <div key={evento.id} className="evento-card">
            <h3 onClick={() => abrirModal(evento)}>{evento.titulo}</h3>
            <p>{evento.descricao.substring(0, 150)}...</p>

            <button onClick={() => abrirModal(evento)}>
              Ver Fotos ({evento.fotos ? evento.fotos.length : 0})
            </button>
          </div>
        ))}
      </div>

      {/* PAGINAÇÃO */}
      {eventosData.length > itensPorPagina && (
        <div className="eventos-paginacao">
          <button
            onClick={() => setPaginaAtual((p) => Math.max(1, p - 1))}
            disabled={paginaAtual === 1}
            className="paginacao-btn"
          >
            ‹ Anterior
          </button>

          <span>Página {paginaAtual} de {totalPaginas}</span>

          <button
            onClick={() => setPaginaAtual((p) => Math.min(totalPaginas, p + 1))}
            disabled={paginaAtual === totalPaginas}
            className="paginacao-btn"
          >
            Próxima ›
          </button>
        </div>
      )}

      {/* MODAL */}
      {modalAberto && (
        <div className="evento-modal-bg" onClick={fecharModal}>
          <div className="evento-modal" onClick={(e) => e.stopPropagation()}>
            <div className="evento-modal-header">
              <h2>{tituloModal}</h2>
              <button className="evento-modal-fechar" onClick={fecharModal}>
                ×
              </button>
            </div>

            {/* DESCRIÇÃO COMPLETA */}
            <div className="evento-modal-descricao">
              <p>{descricaoModal}</p>
            </div>

            {/* FOTOS */}
            <div className="evento-modal-fotos">
              {fotosModal.length > 0 ? (
                fotosModal.map((foto, idx) => (
                  <div key={idx} className="foto-container">
                    <img 
                      src={getPublicUrl(`/eventos/${foto}`)} 
                      alt={`${tituloModal} - Foto ${idx + 1}`}
                      onError={(e) => {
                        console.error(`Erro ao carregar imagem: ${foto}`);
                        e.target.onerror = null; // Evita loop infinito de erros
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="foto-erro">Imagem indisponível</div>`;
                      }}
                    />
                  </div>
                ))
              ) : (
                <p className="sem-fotos">Nenhuma foto disponível</p>
              )}
            </div>

            <div className="evento-modal-footer">
              <button className="btn-fechar-modal" onClick={fecharModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}