'use client'
import React, { useEffect, useState } from "react";
import Navbarvol from "../shaed/constants/navbarvol";
import api from "../shaed/utils/my-axios";
import { log } from "console";
import { useRouter } from "@/node_modules/next/navigation";

interface Diarios {
  title: string;
  updated_at: string;
  id: string;
}
export default function HomePage() {
  const [show, setShow] = useState<Diarios[]>([]);
  const router = useRouter();
  useEffect(() => {
    info();
  },[]);
  const info = async () => {
    try {
      const response = await api.get('/diary/listDiaryByUserId');
      const data = response.data.res
      setShow(data)
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados: " + error);
    }
  }
  return (
    <main className="w-screen h-screen  px-48 py-10">
      <div style={{ borderRadius: '2rem', background: '#9BDA9E' }} className="w-full h-full ">
        <nav className="w-full h-24 flex justify-between p-10">
          <a href="/home"><img src="/imagens/sete.png" alt="voltar" className="w-24" /></a>
          <div className="flex justify-between ">
            <img src="/imagens/logo2.png" alt="Logo do cont;nue" className="w-24 h-24" /> <strong className="text-6xl mt-5 ml-3 " style={{ color: '#3D50B6' }}>Cont;nue</strong>
          </div>
          <a href="/diario"><img src="/imagens/mais.png" alt="" className="w-24 h-24" /></a>
        </nav>
        <main className="mt-20">
          {show.map(show => {
            return (
              <div onClick={() => router.push("/diario/" + show.id)} style={{ color: '#BEBEBE' }} className="mx-5 my-5 h-16 bg-white flex justify-between text-3xl p-3">
                <div>
                  <label>Titulo:</label>{show.title}
                </div>
                <div>
                  {show.updated_at.split('T')[0].replaceAll('-', '/')}
                </div>
              </div>
            )
          })}
        </main>
      </div>
    </main>
  )
}