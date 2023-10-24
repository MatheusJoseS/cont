'use client'
import Navbar from "../shaed/constants/navbar";
import React, { useEffect, useState } from 'react';
import api from "../shaed/utils/my-axios";
import { log } from "console";

export default function HomePage() {
  const [dica, setDica] = useState(false)
  const [item, setItem] = React.useState(0);
  
  const ndica = () => {
    const novoestado = false;
    setDica(novoestado)
  }
  const sdica = () => {
    const novoestado = true;
    setDica(novoestado)
  }
  const imag = [
    "/imagens/teste1.png",
    "/imagens/teste2.png",
    "/imagens/teste3.png",
    "/imagens/teste4.png",
  ]
  const mudarimagBack = () => {
    const num = (item - 1 + 4) % 4;
    setItem(num);
  };

  const mudarimagNext = () => {
    const num = (item + 1) % 4;
    setItem(num);
  };
  return (
    <div className="">
      <Navbar />
      {dica ?
        <div className="w-full h-full absolute bottom-40 px-72 py-72 z-20">
          <div style={{ background: '#D8CADB', borderRadius: '2rem' }} className="p-4">
            <header>
              <div className="flex justify-between">
                <div className="flex justify-between m-auto">
                  <img src="/imagens/Captura de tela 2023-10-23 214953.png" alt="imagen de dica" className="w-20 " />
                  <strong className="text-4xl mt-8 ml-3 text-white">Dicas Rápidas</strong>
                </div>
                <button onClick={ndica}><img src="/imagens/x.png" alt="X" className="w-20" /></button>
              </div>
            </header>
            <div className="flex justify-between">
              <img src="/imagens/source.gif" alt="bola de respiração" className="m-auto w-7/12 h-full ml-64 -my-24 " />
              <button><img src="/imagens/sete.png" alt="" className="w-20" /></button>
            </div>
            <p className="text-2xl text-white text-center px-10 h-full">1. Respiração Profunda:  <br />
              Pratique respiração lenta e profunda para acalmar os nervos e reduzir a ansiedade.</p>
          </div>
        </div>
        : null}
      <main className="flex justify-between">
        <div className="w-1/2">
          <button onClick={sdica} style={{ background: '#D8CADB', borderRadius: '2rem', marginLeft: '10rem' }} className=" h-24 w-2/3 ml-36 mt-16 p-9 flex justify-between" tabIndex={7}><img src="/imagens/Captura de tela 2023-10-23 214953.png" alt="Imagen do Dicas" className="w-16 ml-6 -mt-7" /> <strong className="mr-80 pr-1 text-white text-3xl">Dicas</strong></button>
          <a href="/meudiario"><div style={{ background: '#9BDA9E', borderRadius: '2rem' }} className="flex justify-between h-24 w-2/3 m-auto mt-16 p-9" tabIndex={6}><img src="/imagens/livro2.png" alt="Imagen do Diario" className="w-24 h-20 -mt-8" /><strong className="mr-64 text-white text-3xl">Meu Diario</strong></div></a>
          <a href="/depoimento"><div style={{ background: '#ACF0F4', borderRadius: '2rem' }} className="flex justify-between h-24 w-2/3 m-auto mt-16 p-9" tabIndex={8}><img src="/imagens/depoimento.png" alt="Imagen do Robo" className="w-20 ml-5 h-20 -mt-8" /> <strong className="mr-60 text-white text-3xl">Depoimento</strong></div></a>
          <a href="/configSOS"><div style={{ background: '#EC6161', borderRadius: '2rem' }} className="flex justify-between h-24 w-2/3 m-auto mt-16 p-9" tabIndex={5}><img src="/imagens/engrenagem1.png" alt="Imagen do SOS" className="w-24 h-20 ml-2 -mt-8" /> <strong className="mr-28 text-white text-3xl">Configuração do SOS</strong></div></a>
        </div>
        <div className="m-auto w-1/2 flex justify-between px-36">
          <button onClick={mudarimagBack} className="mt-80 w-20 h-20 text-white text-xl " ><img src="/imagens/seta-esquerda.1.png" alt="" className="w-10 m-auto" /></button>
          <div className="w-3/4">
            <img src={imag[item]} alt="Carosel" className="m-auto h-96 mt-52" />
          </div>
          <button onClick={mudarimagNext} className="mt-80 w-20 h-20 text-white text-xl" ><img src="/imagens/seta-direita.png" alt="" className="w-10 m-auto" /></button>
        </div>
      </main>

    </div>
  )
}