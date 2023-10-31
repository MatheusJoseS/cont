'use client'
import React, { useState } from "react";
import api from "../shaed/utils/my-axios";

interface Imagen {
  imag: File | undefined;
  description: string;
  title:string;
}

export default function SOSPage() {
  const [foto, setFoto] = useState<Imagen>({ imag: undefined, description: '',title:'' });
  const TitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoto((prevFoto) => ({ ...prevFoto, title: e.target.value }));
  }
  const FileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFoto((prevFoto) => ({ ...prevFoto, imag: file }));
  }

  const DescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoto((prevFoto) => ({ ...prevFoto, description: e.target.value }));
  }

  const Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (foto.imag) {
      const formData = new FormData();
      formData.append("file", foto.imag);
      formData.append("description", foto.description);
      formData.append("title", foto.title);
      try {
        const response = await api.post('/sos/uploadFile', formData);
        location.href = 'http://localhost:3000/SOSconf';
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  }

  return (
    <main className="w-screen h-screen px-48 py-10">
      <div style={{ borderRadius: '2rem', background: '#EC6161' }} className="w-full h-full">
        <form onSubmit={Submit} className="p-10">
          <label htmlFor="title">coloque um titulo</label> <br />
          <input type="text" name="title" id="title" onChange={TitleChange} maxLength={20}/><br />
          <label htmlFor="file">coloque um imagen</label> <br />
          <input type="file" name="file" onChange={FileChange} /><br />
          <label htmlFor="description">coloque um decrição</label> <br />
          <input type="text" name="description" id="description" onChange={DescriptionChange} maxLength={400} /><br />
          <button className="text-white" type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}
