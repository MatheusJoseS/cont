'use client'
import React from "react";
import Navbar from "../shaed/constants/navbar";
import Navbarvol from "../shaed/constants/navbarvol";
import api from "../shaed/utils/my-axios";

export default function diarioPage() {
  const [from, setFrom] = React.useState<{ id_user: string; title: string; description: string; question1: string; question2: string; question3: string; question4: string; }>({ id_user: '', title: '', description: '', question1: '', question2: '', question3: '', question4: '' })
  const [loading, setLoading] = React.useState<boolean>(false)
 
  const getData = (e: any) => {
    const { name, value } = e.target
    setFrom({ ...from, [name]: value })
  }
  const dataFrom = {
    title: from.title,
    description: from.description,
    question1: from.question1,
    question2: from.question2,
    question3: from.question3,
  }
  const submit = async (e: any) => {
    setLoading(true);
    e.preventDefault()
    const response = await api.post('/diary/createDiary', dataFrom);
    location.href='http://localhost:3000/meudiario'
  }
  return (
    <main className="w-screen h-screen  px-48 py-10">
      <div style={{ borderRadius: '2rem', background: '#9BDA9E' }} className="w-full h-full ">
        <header className="flex justify-between">
          <div className="flex justify-between">
            <a href="/meudiario"><img src="/imagens/livro2.png" alt="" className="ml-32 pt-5 w-20 h-24" /></a>
            <h1 className="pt-11 text-2xl text-white">Meu Diario</h1>
          </div>

          <div className="flex justify-between mt-11 text-2xl text-white">
          
            <button onClick={submit} style={{color: '#9BDA9E'}} className="bg-white hover:bg-green-200 font-bold py-1 px-2 text-lg rounded-2xl mr-36 relative -top-3">Salvar</button>
          </div>
        </header>
        <form>
          <div className="text-center">
            <h1 className="text-center text-3xl text-white">Titulo:</h1>
            <input className="border-b-2 w-1/2 text-gray-900 shadow-sm " type="text" style={{ background: '#9BDA9E' }} name="title" id="title" onChange={getData} required />
          </div>
          <textarea name="description" id="description" onChange={getData}  rows={20}  className="block p-2.5 mt-5 w-9/12 m-auto text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

          <label htmlFor="question1" className="block mb-2 mt-2 ml-48 text-sm font-medium text-gray-900 dark:text-white">Quais sentimentos emergiram enquanto você anotava no diário?</label>
          <textarea name="question1" id="question1" onChange={getData} rows={1} className="block p-2.5 w-9/12 m-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva aqui"></textarea>

          <label htmlFor="question2" className="block mb-2 ml-48 text-sm font-medium text-gray-900 dark:text-white">Quais de minhas crenças e valores emergiram durante a anotação do diário?</label>
          <textarea name="question2" id="question2" onChange={getData} rows={1} className="block p-2.5 w-9/12 m-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva aqui"></textarea>

          <label htmlFor="question3" className="block mb-2 ml-48 text-sm font-medium text-gray-900 dark:text-white">Como esta pagina do diário vai direcionar as minhas ações?</label>
          <textarea name="question3" id="question3" onChange={getData} rows={1} className="block p-2.5 w-9/12 m-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva aqui"></textarea>
        </form>
      </div>
      <main>
      </main>
    </main>
  )
}