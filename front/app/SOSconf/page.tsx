'use client'
import { log } from "console";
import React, { useEffect, useState } from "react";
import Navbar from "../shaed/constants/navbar";
import Navbarvol from "../shaed/constants/navbarvol";
import api from "../shaed/utils/my-axios";
interface imag {
  user_url: string;
  id: string;
  user: string;
}
export default function SOSPage() {
  const [foto, setFoto] = React.useState<imag[]>([])

  useEffect(() => {
    info();
  }, [])
  const tudo = {
    foto,
  }
  const info = async () => {
    const response = await api.get('/sos/findFile')
    const data = response.data.res
    console.log(data);
    
    setFoto(data)
    console.log(data.res.id);
  }
  const deletar = async () => {
    const resp = await api.get('/users/pegaPorId')
    const data = resp.data.res.id
    const todo ={
      data,foto
    }
    console.log(todo);
    
    const response = await api.delete("/sos/deleteFile/"+todo)
  }
  return (
    <main className="w-screen h-screen px-48 pt-10 pb-36">
      <div style={{ borderRadius: '2rem', background: '#EC6161' }} className="w-full h-full ">
        <nav className="w-full h-24 flex justify-between p-10">
          <a href="/home"><img src="/imagens/sete.png" alt="voltar" className="w-24" /></a>
          <div className="flex justify-between ">
            <img src="/imagens/logo2.png" alt="Logo do cont;nue" className="w-24 h-24" /> <strong className="text-6xl mt-5 ml-3 " style={{ color: '#3D50B6' }}>Cont;nue</strong>
          </div>
          <a href="/SOS"><img src="/imagens/mais.png" alt="" className="w-24 h-24" /></a>
        </nav>
        <div style={{ borderRadius: '2rem', background: '#EC6161' }} className="w-full h-full">
          <main className="mt-20">
            {foto.map(foto => {
              return (
                <div className="bg-white">
                  <img src={foto.user_url} alt="imagen do usuario" />
                  <button onClick={deletar}>deletar</button>
                </div>
              )
            })}
          </main>
        </div>
      </div >
    </main >
  )
}