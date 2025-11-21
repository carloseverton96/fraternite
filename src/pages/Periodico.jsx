import React from "react";
import { useParams } from "react-router-dom";
import { periodicos } from "../data/periodicos";

export default function Periodico() {
  const { id } = useParams();

  const periodico = periodicos.find((p) => p.id === Number(id));

  if (!periodico) {
    return <h2>Periódico não encontrado.</h2>;
  }

  return (
    <div className="periodico-container">
      <h1>{periodico.mes} / {periodico.ano}</h1>
      <p>{periodico.descricao}</p>

      <div className="pdf-viewer">
        <embed
          src={periodico.arquivo}
          type="application/pdf"
          width="100%"
          height="800px"
        />
      </div>
    </div>
  );
}
