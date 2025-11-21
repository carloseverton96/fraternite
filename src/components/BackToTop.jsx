import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200); // aparece só depois de rolar um pouco
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        padding: "8px 12px",
        fontSize: "14px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        background: "rgba(0,0,0,0.45)",
        color: "#fff",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transition: "opacity 0.3s ease",
        zIndex: 999
      }}
    >
      ↑
    </button>
  );
}
