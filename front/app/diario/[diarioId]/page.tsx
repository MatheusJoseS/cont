'use client'
import { useRouter } from "@/node_modules/next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../shaed/constants/navbar";
import Navbarvol from "../../shaed/constants/navbarvol";
import api from "../../shaed/utils/my-axios";
interface Diario {
  title: string;
  question1:string;
  question2:string;
  question3:string;
  description:string;
  updated_at: string;
}
export default function diarioPage({ params }: { params: { diarioId: string } }) {
  const [diario, setDiario] = React.useState<Diario>({  title: '', description: '', question1: '', question2: '', question3: '', updated_at: '' })
  const [loading, setLoading] = React.useState<boolean>(false)
  
  const token = localStorage.getItem('token');
  useEffect(() => {
    info();
  }, []);
  const info = async () => {
   const response = await api.get('/diary/findDiary/'+ params.diarioId)
   console.log(response.data);
   setDiario (response.data)
   
  }
  const diarioid = () => {
    const diario = api.get('/findDiary')
  }
  const getData = (e: any) => {
    const { name, value } = e.target
    setDiario({ ...diario, [name]: value })
  }
  const dataFrom = {
    title: diario.title,
    description: diario.description,
    question1: diario.question1,
    question2: diario.question2,
    question3: diario.question3,
  }
  const atualizar = async (e: any) => {
    setLoading(true);
    e.preventDefault()
    await api.put('/diary/updateDiary/'+ params.diarioId, dataFrom);
    location.href='http://localhost:3000/meudiario'


  }
  const deletar = async (e: any) => {
    const response = await api.delete('/diary/deleteDiary/'+ params.diarioId);
    console.log(response);
    location.href='http://localhost:3000/meudiario'
  }
  console.log(params.diarioId);
  
  return (
    <main className="w-screen h-screen  px-48 py-10">
      <div style={{ borderRadius: '2rem', background: '#9BDA9E' }} className="w-full h-full ">
        <header className="flex justify-between">
          <div className="flex justify-between">
            <a href="/meudiario"><img src="/imagens/livro2.png" alt="" className="ml-32 pt-5 w-20 h-24" /></a>
            <h1 className="pt-11 text-2xl text-white">Meu Diario</h1>
          </div>
          <div className="flex justify-between mt-11 text-2xl text-white">
            <button onClick={atualizar} style={{color: '#9BDA9E'}} className="bg-white hover:bg-green-200 font-bold py-1 px-2 text-lg rounded-2xl mr-20 relative -top-3">Atualizar</button>
            <button onClick={deletar} style={{color: '#9BDA9E'}} className="bg-white hover:bg-green-200 font-bold py-1 px-2 text-lg rounded-2xl mr-20 relative -top-3">Deletar</button>
          </div>
        </header>
        <form>
          <div className="text-center">
            <label htmlFor='title' className="text-center text-3xl text-white">Titulo</label> <br />
            <input className="border-b-2 w-1/2 text-gray-900 shadow-sm " type="text" value={diario?.title} style={{ background: '#9BDA9E' }} name="title" id="title" onChange={getData} required />
          </div>
          <label htmlFor="description">descrição</label>
          <textarea name="description" value={diario?.description} id="description" onChange={getData}  rows={20}  className="block p-2.5 mt-5 w-9/12 m-auto text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

          <label htmlFor="question1" className="block mb-2 mt-2 ml-48 text-sm font-medium text-gray-900 dark:text-white">Quais sentimentos emergiram enquanto você anotava no diário?</label>
          <textarea name="question1" id="question1"  value={diario?.question1} onChange={getData} rows={1} className="block p-2.5 w-9/12 m-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva aqui"></textarea>

          <label htmlFor="question2" className="block mb-2 ml-48 text-sm font-medium text-gray-900 dark:text-white">Quais de minhas crenças e valores emergiram durante a anotação do diário?</label>
          <textarea name="question2" id="question2"  value={diario?.question2} onChange={getData} rows={1} className="block p-2.5 w-9/12 m-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva aqui"></textarea>

          <label htmlFor="question3" className="block mb-2 ml-48 text-sm font-medium text-gray-900 dark:text-white">Como esta pagina do diário vai direcionar as minhas ações?</label>
          <textarea name="question3" id="question3"  value={diario?.question3} onChange={getData} rows={1} className="block p-2.5 w-9/12 m-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva aqui"></textarea>
        </form>
      </div>
      <main>
      </main>
    </main>
  )
}