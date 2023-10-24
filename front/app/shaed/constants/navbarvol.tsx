'use client'
import React, { useState } from "react"

export default function Navbarvol() {
  const [cor, setCor] = React.useState("#717EC7")
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-3 w-16 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <nav className="w-full h-24 flex justify-between p-10">
      <a href="/home"><img src="/imagens/sete.png" alt="voltar" className="w-24" /></a>
      <div className="flex justify-between ">
        <img src="/imagens/logo2.png" alt="Logo do cont;nue" className="w-24 h-24"/> <strong className="text-6xl mt-5 ml-3 " style={{color:'#3D50B6'}}>Cont;nue</strong>
      </div>
      <img src="/imagens/mais.png" alt="" />
       
    </nav>
  )
}