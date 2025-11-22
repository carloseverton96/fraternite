import React, { useState } from "react";
import { Link } from "react-router-dom";
// Importando os dados existentes dos periódicos
import homeData from "../data/homeData.js";

export default function Edicoes() {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 8;

  // Combinar edição atual com edições anteriores
  const todasEdicoes = [
    homeData.edicaoAtual,
    ...homeData.edicoesAnteriores
  ].map((periodico, index) => ({
    id: periodico.id || index + 1,
    mes: periodico.mes || periodico.mesAno?.split(' ')[0] || "Edição",
    ano: periodico.ano || periodico.mesAno?.split(' ')[1] || "2024",
    capa: periodico.capa || periodico.imagem || "/capa-default.jpg",
    descricao: periodico.descricao || periodico.titulo || "Edição do Periódico Fraternité",
    mesAno: periodico.mesAno || `${periodico.mes} ${periodico.ano}`,
    pdf: periodico.pdf,
    // Usar a mesma estrutura de link do Inicio
    link: `/periodico/${periodico.id || index + 1}`
  }));

  // Calcular edições da página atual
  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const edicoesPaginaAtual = todasEdicoes.slice(indiceInicial, indiceFinal);

  // Calcular total de páginas
  const totalPaginas = Math.ceil(todasEdicoes.length / itensPorPagina);

  // Funções de navegação
  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const irParaPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  return (
    <div className="edicoes-container">
      {/* Cabeçalho da Página */}
      <header className="edicoes-header">
        <h1 className="edicoes-titulo">Edições do Periódico</h1>
        <p className="edicoes-subtitulo">
          Explore todas as nossas publicações mensais
        </p>
      </header>

      {/* Grid de Edições */}
      <div className="edicoes-grid">
        {edicoesPaginaAtual.map((edicao) => (
          <div key={edicao.id} className="edicao-card">
            <div className="edicao-imagem-container">
              <img 
                src={edicao.capa} 
                alt={`Capa da edição de ${edicao.mesAno}`}
                className="edicao-imagem"
                onError={(e) => {
                  e.target.src = "/capa-default.jpg";
                }}
              />
              <div className="edicao-overlay">
                <Link to={edicao.link} className="edicao-ver-mais">
                  Ver Edição
                </Link>
              </div>
            </div>
            
            <div className="edicao-info">
              <h3 className="edicao-mes">{edicao.mesAno}</h3>
              <p className="edicao-descricao">{edicao.descricao}</p>
              
              <div className="edicao-buttons">
                <a
                  href={edicao.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edicao-link pdf-link"
                >
                  📘 Baixar PDF
                </a>
                
                <Link 
                  to={edicao.link}
                  className="edicao-link online-link"
                >
                  👓 Ler Online
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de Paginação */}
      {todasEdicoes.length > itensPorPagina && (
        <div className="paginacao">
          <button 
            onClick={paginaAnterior}
            disabled={paginaAtual === 1}
            className={`paginacao-btn ${paginaAtual === 1 ? 'disabled' : ''}`}
          >
            ‹ Anterior
          </button>

          <div className="paginacao-numeros">
            {[...Array(totalPaginas)].map((_, index) => {
              const numeroPagina = index + 1;
              if (
                numeroPagina === 1 ||
                numeroPagina === totalPaginas ||
                (numeroPagina >= paginaAtual - 1 && numeroPagina <= paginaAtual + 1)
              ) {
                return (
                  <button
                    key={numeroPagina}
                    onClick={() => irParaPagina(numeroPagina)}
                    className={`paginacao-numero ${
                      numeroPagina === paginaAtual ? 'ativo' : ''
                    }`}
                  >
                    {numeroPagina}
                  </button>
                );
              } else if (
                numeroPagina === paginaAtual - 2 ||
                numeroPagina === paginaAtual + 2
              ) {
                return <span key={numeroPagina} className="paginacao-pontos">...</span>;
              }
              return null;
            })}
          </div>

          <button 
            onClick={proximaPagina}
            disabled={paginaAtual === totalPaginas}
            className={`paginacao-btn ${paginaAtual === totalPaginas ? 'disabled' : ''}`}
          >
            Próxima ›
          </button>
        </div>
      )}

      {/* Informação da Página Atual */}
      <div className="paginacao-info">
        Página {paginaAtual} de {totalPaginas} • 
        Mostrando {edicoesPaginaAtual.length} de {todasEdicoes.length} edições
      </div>
    </div>
  );
}