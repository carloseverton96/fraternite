import React from "react";
import "../css/index.css";
import { useParams, useNavigate } from "react-router-dom";
import { periodicos } from "../data/periodicos";

export default function Periodico() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Garantir que o ID seja tratado corretamente (string ou número)
  const periodico = periodicos.find((p) => 
    p.id.toString() === id.toString()
  );

  if (!periodico) {
    return (
      <div className="periodico-single-container">
        <div className="error-message">
          <h2>Periódico não encontrado</h2>
          <p>A edição solicitada não está disponível em nossa base de dados.</p>
          <button 
            onClick={() => navigate("/edicoes")}
            className="action-btn primary-btn"
          >
            ← Voltar para Todas as Edições
          </button>
        </div>
      </div>
    );
  }

  // Função para abrir o PDF em nova aba
  const handleOpenPDF = () => {
    window.open(periodico.pdf, '_blank', 'noopener,noreferrer');
  };

  // Função para fazer download do PDF
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = periodico.pdf;
    link.download = `periodico-fraternite-${periodico.mes?.toLowerCase()}-${periodico.ano}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="periodico-single-container">
      
      {/* Cabeçalho Simples */}
      <header className="periodico-header-simple">
        <h1 className="periodico-mes-ano">
          {periodico.mesAno || `${periodico.mes} ${periodico.ano}`}
        </h1>
        <p className="periodico-descricao-simple">
          {periodico.descricao || "Edição do Periódico Espírita Fraternité"}
        </p>
      </header>

      <hr className="periodico-divider" />

      {/* Informações Adicionais */}
      <div className="periodico-meta-info">
        <div className="meta-item">
          <strong>Publicação:</strong> Periódico Espírita Fraternité
        </div>
        <div className="meta-item">
          <strong>Periodicidade:</strong> Mensal
        </div>
        <div className="meta-item">
          <strong>Ano:</strong> {periodico.ano}
        </div>
        {periodico.edicao && (
          <div className="meta-item">
            <strong>Edição:</strong> {periodico.edicao}
          </div>
        )}
        {periodico.paginas && (
          <div className="meta-item">
            <strong>Páginas:</strong> {periodico.paginas}
          </div>
        )}
      </div>
      
      {/* Visualizador de PDF Embed */}
      <div className="pdf-viewer-container">
        <h3>Visualização do Periódico</h3>
        <div className="pdf-viewer">
          <embed
            src={`${periodico.pdf}#view=FitH`}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        </div>
        <p className="pdf-viewer-note">
          Se o PDF não carregar acima, use os botões abaixo para ler online ou baixar.
        </p>
      </div>

      {/* Ações Principais */}
      <div className="periodico-actions-simple">
        <button
          onClick={handleOpenPDF}
          className="action-btn primary-btn"
        >
          📖 Ler PDF Online (Nova Aba)
        </button>
        
        <button
          onClick={handleDownloadPDF}
          className="action-btn secondary-btn"
        >
          📥 Baixar PDF Completo
        </button>
        
        <button
          onClick={() => navigate("/edicoes")}
          className="action-btn outline-btn"
        >
          ← Voltar para Todas as Edições
        </button>
      </div>

      {/* Navegação entre edições */}
      <div className="periodico-navigation">
        <button
          onClick={() => navigate(-1)}
          className="action-btn outline-btn"
        >
          ↩ Voltar para Página Anterior
        </button>
      </div>

    </div>
  );
}