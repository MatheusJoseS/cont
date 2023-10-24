import React, { useState } from "react"

export default function Navbarvols() {
  const [cor, setCor] = React.useState("#717EC7")
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-2 w-12 my-1.5 rounded-full bg-white transition ease transform duration-300`;
  return (
    <header style={{ background: cor }} className="w-full h-24 flex justify-between">
      <div className="flex justify-between">
        <a href="/"><img src="/imagens/sete.png" alt="voltar" className="w-20 ml-5 pt-2" /></a>
        <h1 className="text-white text-6xl mt-4 ml-5"><strong>Sobre</strong></h1>
      </div>
      <button
        className="flex flex-col h-20 w-20 border-4 border-white rounded-full justify-center items-center group mt-2 mr-3" onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${isOpen
            ? "rotate-45 translate-y-5 group-hover:opacity-100"
            : " group-hover:opacity-100"
            }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "group-hover:opacity-100"
            }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen
            ? "-rotate-45 -translate-y-5 group-hover:opacity-100"
            : "group-hover:opacity-100"
            }`}
        />
      </button>
    </header>
  )
}