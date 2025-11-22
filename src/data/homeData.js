// ================================
// BANCO DE DADOS LOCAL - HOME
// ================================

import capaAtual from "../../public/capa.jpeg";
import capaJan from "../../public/janeiro.jpeg";
import capaFev from "../../public/fevereiro.jpeg";
import capaMar from "../../public/marco.jpeg";

const homeData = {
  edicaoAtual: {
    id: "2025-03",
    titulo: "Periódico Espírita Fraternité",
    subTitulo: "Edição dedicada ao estudo, reflexão e difusão da Doutrina Espírita.",
    mesAno: "Março de 2025",
    capa: capaAtual,
    pdf: "/pdfs/periodico-marco-2025.pdf",
    descricao: `
      Nesta edição apresentamos temas fundamentais para o entendimento da 
      Doutrina Espírita, trazendo reflexões atuais, estudos aprofundados, 
      mensagens edificantes e conteúdos selecionados para seu crescimento 
      moral e espiritual.
    `,
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

  edicoesAnteriores: [
    {
      id: "2025-02",
      mesAno: "Fevereiro de 2025",
      capa: capaFev,
      pdf: "/pdfs/periodico-fevereiro-2025.pdf",
    },
    {
      id: "2025-01",
      mesAno: "Janeiro de 2025",
      capa: capaJan,
      pdf: "/pdfs/periodico-janeiro-2025.pdf",
    },
    {
      id: "2024-12",
      mesAno: "Dezembro de 2024",
      capa: capaMar,
      pdf: "/pdfs/periodico-dezembro-2024.pdf",
    },
  ],
};

export default homeData;
