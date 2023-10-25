'use client'
import { useEffect, useState } from "react";
import Navbar from "../shaed/constants/navbar";
import Navbarvol from "../shaed/constants/navbarvol";
import api from "../shaed/utils/my-axios";
interface imag {
  user_url: string;
}

export default function SOSPage() {
  const [foto , setFoto] = useState<imag[]>([])
  useEffect (()=>{
    info();
  },[])
  const info =  async () => {
    const response = await api.get('/sos/findFile')
    const data = response.data.res
    setFoto(data)
  }
  return (
    <main className="w-screen h-screen  px-48 py-10">
      <div style={{ borderRadius: '2rem', background: '#EC6161' }} className="w-full h-full ">
      <nav className="w-full h-24 flex justify-between p-10">
          <a href="/home"><img src="/imagens/sete.png" alt="voltar" className="w-24" /></a>
          <div className="flex justify-between ">
            <img src="/imagens/logo2.png" alt="Logo do cont;nue" className="w-24 h-24" /> <strong className="text-6xl mt-5 ml-3 " style={{ color: '#3D50B6' }}>Cont;nue</strong>
          </div>
          <a href="/SOS"><img src="/imagens/mais.png" alt="" className="w-24 h-24" /></a>
        </nav>
        <div style={{ borderRadius: '2rem', background: '#EC6161' }} className="w-full h-full">
      
       {foto.map((file, index) => (
          <div key={index}>
           <img src={file.user_url} alt={`Image ${index}`} />
          </div>
        ))};
      </div>

      </div>
    </main>
  )
}