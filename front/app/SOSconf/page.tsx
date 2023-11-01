'use client'
import React, { useEffect, useState } from "react";
import api from "../shaed/utils/my-axios";
import lixo from "../../public/imagens/vercel.svg"
interface imag {
  user_url: string;
  id: string;
  user: string;
  description: string;
  title: string;
}
interface Imagen {
  imag: File | undefined;
  description: string;
  title:string;
}
export default function SOSconfPage() {
  const [foto, setFoto] = React.useState<imag[]>([]);
  const [ecadastro, setecadastro] = useState(false)
  const [fotos, setFotos] = useState<Imagen>({ imag: undefined, description: '',title:'' });
  const TitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFotos((prevFoto) => ({ ...prevFoto, title: e.target.value }));
  }
  const FileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFotos((prevFoto) => ({ ...prevFoto, imag: file }));
  }

  const DescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFotos((prevFoto) => ({ ...prevFoto, description: e.target.value }));
  }
  

  const Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('oi');
    console.log(fotos);
    if (fotos.imag) {
      const formData = new FormData();
      formData.append("file", fotos.imag);
      formData.append("description", fotos.description);
      formData.append("title", fotos.title);
      try {
        const response = await api.post('/sos/uploadFile', formData);
        console.log(response);
        
        
        
        location.href = 'http://localhost:3000/SOSconf';
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  }

  const login = () => {
    const novoestado = false;
    setecadastro(novoestado)
  }
  const cadastro = () => {
    const novoestado = true;
    setecadastro(novoestado)
  }
  useEffect(() => {
    info();
  }, [])

  const info = async () => {
    const response = await api.get('/sos/findFile')
    const data = response.data.res
    console.log(data);

    setFoto(data)

  }
  const deletar = async (id: string) => {
    const response = await api.delete("/sos/deleteFile/" + id)
    location.href = '/SOSconf'
    console.log(response);
  }
  return (
    <main style={{ background: 'rgb(232, 163, 163)' }} className="w-screen h-screen flex">
      <div style={{ background: '#ea8282' }} className="w-1/4 h-full border-r-2 border-solid border-white">
        <a href="/home"><img src="/imagens/sete.png" alt="" className="w-20 ml-5 pt-5" /></a>
        {ecadastro ? <button style={{ color: '#e53838' }} onClick={login} className="w-full h-20 mt-10 text-white text-3xl" tabIndex={5}><strong>Todas as imagens</strong> </button> : <button className="w-full h-20 mt-10 text-white text-3xl" style={{ background: '#ec6161' }} tabIndex={5}><strong>Todas as imagens</strong></button>}
        {ecadastro ? <button className="w-full h-20 mt-10 text-white text-3xl" style={{ background: '#ec6161' }} tabIndex={6}><strong>Adicionar</strong></button> : <button style={{ color: '#e53838' }} onClick={cadastro} className="w-full h-20 mt-10 text-white text-3xl" tabIndex={6}><strong>Adicionar</strong></button>}
      </div>
      {ecadastro ?
          <div  className="w-full h-full">
                        <h1 className="text-white text-5xl mt-5 text-center">Cont;nue</h1>
        <form onSubmit={Submit} className="p-10">
        
          <input type="text" name="title" id="title" placeholder="Titulo:" style={{background: 'rgb(232, 163, 163)'}} onChange={TitleChange} className='placeholder:text-white text-3xl w-1/2 mx-96' maxLength={20}/><br />
          <input type="file" name="file" onChange={FileChange} /><br />
          <div className='w-full ml-96'>
          <label htmlFor="description" className="text-right text-white text-3xl">Decrição</label> <br />
          <textarea name="description" id="description" onChange={DescriptionChange} maxLength={400} rows={10} className='w-1/2'/><br />
          </div>
          <button className="" type="submit">Enviar</button>
        </form>
      </div>
        :
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-white text-5xl mt-5">Cont;nue</h1>
            <input style={{ background: '#ec6161' }} className="w-1/2 pl-5 h-11 mt-6 text-white placeholder:text-white placeholder:pl-5 rounded-3xl" type="text" placeholder="pesquisar por título ..." />
          </div><div style={{ overflow: "auto", border: "5px solid rgb(232, 163, 163)", height: '44em' }} className="w-11/12 m-auto mt-5">
            {foto.map(foto => {
              return (
                <div className="m-5 p-5">
                  <h1 className="text-white text-3xl pb-5 ml-72"> <strong>{foto.title}</strong></h1>
                  <img src={'http://localhost:38000/images/' + foto.user_url} alt="imagen do usuario" className="m-auto rounded-3xl border-solid border-red-700 border-2" style={{ width: '50em' }} />
                  <p className="text-white text-center break-words overflow-hidden	">{foto.description}</p>
                  <button onClick={() => { deletar(foto?.id) }} className='float-left'><img src="lixo" alt="" /></button>
                </div>
              )
            })}
          </div>
        </div>}

    </main >
  )
}