// ================================
// BANCO DE DADOS LOCAL - HOME (AUTOMÁTICO)
// ================================

import { getEdicaoAtual, getEdicoesAnteriores } from "./periodicos";

const homeData = {
  // Pega automaticamente a edição mais recente
  get edicaoAtual() {
    return getEdicaoAtual();
  },

  carrossel: [
    {
      id: 1,
      titulo: "Allan Kardec — O Codificador",
      texto: "Conheça aspectos essenciais da vida e da obra de Kardec.",
      imagem: "/carrossel/kardec.jpg",
      link: "/artigos/kardec",
    },
    {
      id: 2,
      titulo: "Estudo do Livro dos Espíritos",
      texto: "Uma jornada de aprendizado contínuo e esclarecedor.",
      imagem: "/carrossel/livro-espiritos.jpg",
      link: "/estudos/livro-dos-espiritos",
    },
    {
      id: 3,
      titulo: "Mensagens de Luz",
      texto: "Seleção de mensagens edificantes para harmonia interior.",
      imagem: "/carrossel/mensagens.jpg",
      link: "/mensagens",
    },
  ],

  // Pega automaticamente todas as edições anteriores
  get edicoesAnteriores() {
    return getEdicoesAnteriores().slice(0, 12); // Limita a 12 se quiser
  },
};

export default homeData;