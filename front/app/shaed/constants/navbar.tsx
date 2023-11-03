import React, { useEffect, useState } from "react";
import api from "../utils/my-axios";



interface Usuario {
  name: 'matheus';
}
export default function Navbar() {
  const [cor, setCor] = useState("#717EC7");
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState<Usuario | null>(null);
  const [menu, setMenu] = useState(false)
  const genericHamburgerLine = `h-2 w-12 my-1 rounded-full bg-white transition ease transform duration-300`;
  const InteragirMenu = () => {
    setMenu(!menu);
    console.log('tese');
  }
  const deslogar = () => {
    localStorage.removeItem("token")
    location.href = '/'
  }
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
          onClick={() => {
            setIsOpen(!isOpen);
            InteragirMenu();
          }}
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
        {menu ?
          <div style={{ background: '#6773b5', borderRadius: '0 0 0 100px' }} className="p-5 absolute right-0 top-20 w-96 h-1/2 flex justify-center flex-col">
            <button className="mx-5 mt-10 text-white text-3xl flex items-center"> <img src="/imagens/alterna.png" alt="" className="w-14" />Alterar Conta</button>
            <button className="mx-5 mt-10 text-white text-3xl flex items-center"> <img src="/imagens/sobre.png" alt="" className="w-14" />Sobre</button>
            <button className="mx-5 mt-10 text-white text-left text-3xl flex items-center"> <img src="/imagens/termos.png" alt="" className="w-16" />Termos de Política e Privacidade</button>
            <button className="mx-5 mt-10 text-white text-3xl flex items-center" onClick={deslogar}> <img src="/imagens/log-in.png" alt="" className="w-14" />Sair</button>
          </div> : null}
      </div>
    </nav>
  );
}
