'use client'
import React, { useState } from "react";
import api from "../shaed/utils/my-axios";


interface Imagen {
  imag: File | undefined;
}

export default function SOSPage() {
  const [foto, setFoto] = useState<Imagen>({ imag: undefined });
  
  const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFoto({ imag: file });
  }

  const subimit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (foto.imag) {
      const formData = new FormData();
      formData.append("file", foto.imag);

      try {
        const response = await api.post('/sos/uploadFile', formData);
        console.log(response);
        location.href='http://localhost:3000/SOSconf'
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  }

  return (
    <main className="w-screen h-screen px-48 py-10">
      <div style={{ borderRadius: '2rem', background: '#EC6161' }} className="w-full h-full">
        Coloque uma imagem <br />
        <input type="file" name="file" onChange={getData} /> <br />
        <button className="text-white" onClick={subimit}>Enviar</button>
      </div>
    </main>
  );
}
