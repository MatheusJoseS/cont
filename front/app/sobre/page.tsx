'use client'
import React from "react";
import Navbar from "../shaed/constants/navbar";
import Navbarvol from "../shaed/constants/navbarvols";

export default function HomePage() {
  const [cor, setCor] = React.useState("#717EC7")
  return (
    <div style={{ backgroundColor: '#F7F4FF' }} className="w-screen h-screen">
      <Navbarvol/>
      <div className="flex justify-between">
      <div className="m-auto text-center text-4xl mt-56 w-1/2">
        <p className=" m-auto">
          <strong>
          Sobre a Cont;nue: Promovendo o Bem-Estar Emocional
Olá, somos a Cont;nue, uma plataforma dedicada ao seu bem-estar emocional! Fundada com paixão e comprometimento, nossa missão é auxiliar você a encontrar equilíbrio e serenidade na vida cotidiana, fornecendo ferramentas e recursos inovadores para melhorar sua saúde mental.

Nosso Propósito:
Na Cont;nue, acreditamos que a saúde mental é fundamental para uma vida plena e significativa. Nosso projeto de conclusão de curso, realizado na FIEC em 2023, é o resultado do nosso compromisso em criar um espaço digital acolhedor, onde você pode encontrar apoio, compreensão e orientação.

O que Oferecemos
Explore uma variedade de recursos cuidadosamente elaborados para atender às suas necessidades emocionais. Desde exercícios de respiração até diários, nossa plataforma oferece ferramentas práticas para ajudá-lo a gerenciar o estresse, cultivar a positividade e fortalecer sua resiliência emocional.          </strong>
          </p>
      </div>
      <div className="m-auto mt-28">
        <img className="m-auto w-full" tabIndex={7} src="/imagens/logo2.png" alt="Logo do cont;nui(a Azul)" id='logo' />
        <strong className="relative top-5 left-52 text-4xl text-blue-700" >Cont;nue</strong>
      </div>
      </div>
    </div>
  )
}