'use client'
import React, { useEffect, useState } from "react";
import api from "../shaed/utils/my-axios";
interface imag {
  user_url: string;
  id: string;
  user: string;
  description:string;
}
export default function SOSPage() {
  const [foto, setFoto] = React.useState<imag[]>([]);
  useEffect(() => {
    info();
  }, [])

  const info = async () => {
    const response = await api.get('/sos/findFile')
    const data = response.data.res
    console.log(data);
    
    setFoto(data)
 
  }
  const deletar = async () => {
    //  const response = await api.delete("/sos/deleteFile/"+)
    // console.log(response);
    
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
                <div style={{background:'rgb(232, 163, 163)'}} className="p-10 text-center">
                  <img src={'http://localhost:38000/images/'+foto.user_url} alt="imagen do usuario" className="w-1/2 m-auto"/>
                  <p className="text-white">{foto.description}</p>
                  <button onClick={deletar} className='float-left'>deletar</button>
                </div>
              )
            })}
          </main>
        </div>
      </div >
    </main >
  )
}