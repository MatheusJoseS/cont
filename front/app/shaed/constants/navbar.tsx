import React, { useEffect, useState } from "react";
import api from "../utils/my-axios";



interface Usuario {
  name: 'matheus';
}
export default function Navbar() {
  const [cor, setCor] = useState("#717EC7");
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState<Usuario | null>(null); // Inicialize como null
  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    try {
      const response = await api.get('/users/pegaPorId');
      const data = response.data.res;
      if (data) {
        setShow(data);
      } else {
        console.error("A resposta da API está vazia ou em um formato inesperado.");
      }
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados: " + error);
    }    
  
    
  }

  const genericHamburgerLine = `h-2 w-12 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <nav style={{ background: cor }} className="w-full h-24 flex justify-between">
      <div className="flex justify-between">
        <a tabIndex={1} href="http://localhost:3000/">
          <img tabIndex={1} className="w-20 mt-2 ml-2" src="/imagens/logo2.png" alt="Logo do contínua (a Azul)" />
        </a>
        <h1 tabIndex={2} className="text-white text-5xl mt-6 ml-4">
          Olá, {show ? show.name : 'Carregando...'}
        </h1>
      </div>
      <div>
        <button
          className="flex flex-col h-16 w-16 border-4 border-white rounded justify-center items-center group mt-3 mr-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${isOpen
              ? "rotate-45 translate-y-4 group-hover:opacity-100"
              : "group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "group-hover:opacity-100"}`}
          />
          <div
            className={`${genericHamburgerLine} ${isOpen
              ? "-rotate-45 -translate-y-4 group-hover:opacity-100"
              : "group-hover:opacity-100"
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
