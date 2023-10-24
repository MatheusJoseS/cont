"use client"
import React, { useState } from 'react'
import Image from '@/node_modules/next/image'
import axios from '@/node_modules/axios/index'
import api from './shaed/utils/my-axios'
// import api from './shaed/utils/my-axios'

interface TokenResponse {
  data: {
    token: string;
  }
}
export default function Login() {
  const [ecadastro, setecadastro] = useState(false)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [from, setFrom] = React.useState<{ email_user: string; nome_user: string; senha_user: string; senha_user_comfir: string; tel_user: string; tel_emg_user: string; }>({ email_user: '', nome_user: '', senha_user: '', senha_user_comfir: '', tel_user: '', tel_emg_user: '' })
  const [cor, setCor] = React.useState("#1E3A8A")
  const [erro, setErro] = React.useState('')
  const googleLogoUrl = "https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1691100843~exp=1691101443~hmac=a30f55d5ff66b960de01a09d3cc7882cd6fd49341fdc97cfb099ed6a7bcde8a9"

  const mudanca = () => {
    limpar();
    login();
  }
  const limpar = () => {
    const nada = {
      nome_user: '',
      tel_user: '',
      tel_emg_user: ''
    };
    const novoEstado = {
      ...from,
      ...nada
    };

    setFrom(novoEstado);
  }
  const login = () => {
    const novoestado = false;
    setecadastro(novoestado)
  }
  const cadastro = () => {
    const novoestado = true;
    setecadastro(novoestado)
  }
  const getData = (e: any) => {
    const { name, value } = e.target
    setFrom({ ...from, [name]: value })
  }
  const mudarCor = () => {
    const vermelho = ("#F60000")
    setCor(vermelho)
  }
  const erroo = () => {
    const eroo = ('senha errada')
    setErro(eroo)
  }
  const submit = async (e: any) => {
    try {
      setLoading(true);
      e.preventDefault()
      if (from.senha_user_comfir == '' || from.tel_user == '' || from.tel_emg_user == '') {
        const login = {
          email: from.email_user,
          password: from.senha_user
        }
        console.log(login);
        const reponse = await api.post("/auth/login", login)
        console.log({ reponse });
        localStorage.setItem("token", reponse.data.token)
        console.log("Login:ok");
        location.href = "http://localhost:3000/home"
        setLoading(false)
      } else {
        if (from.senha_user == from.senha_user_comfir) {
          console.log(from);
          const response = await api.post("/auth/sign-up", from)
          console.log(response);
          alert("cadastro:ok")
          setLoading(false)
        } else {
          erroo()
        }
      }
    } catch (err) {
      console.log(err);
      alert("Login:erro")
      mudarCor();
    }
  }
  return (
    <main style={{background:"#717EC7"}} className='flex justify-between p-12 w-screen h-screen'>
      <img src="/imagens/imagem3.png" alt="C do cont;nue" tabIndex={20} />
      <div className='mr-28 -mt-10'>
        <div className='px-28 pb-6 pt-5'>
          {ecadastro ? <button onClick={mudanca} className="bg-blue-700 w-40 mr-20 hover:bg-blue-500  text-white font-bold py-2 px-4 rounded-full" tabIndex={5}>login </button> : <button className="bg-white w-40 hover:bg-blue-200 text-blue-500 font-bold py-2 px-4 rounded-full mr-20 " tabIndex={5}>login </button>}
          {ecadastro ? <button className="bg-white w-40 hover:bg-blue-200 text-blue-500 font-bold py-2 px-4 rounded-full" tabIndex={6}>Cadastro</button> : <button onClick={cadastro} className="bg-blue-700 w-40 hover:bg-blue-500  text-white font-bold py-2 px-4 rounded-full" tabIndex={6}>Cadastro</button>}
        </div>
        <div style={{borderRadius:'5rem'}} className='bg-slate-50'>
          <div className="flex flex-col justify-center px-6 py-12 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img tabIndex={7} className="mx-auto h-36 w-36" src="/imagens/logo2.png" alt="Logo do cont;nui(a Azul)" id='logo' />
              <h2 tabIndex={8} style={{fontFamily:'coustard'}} id="cont" className="font-sans mt-1 text-6xl font-bold leading-9 tracking-tight text-blue-700 text-center ">Cont;nue</h2>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <div className="mt-2">
                    {ecadastro ?
                      <input tabIndex={9} style={{ borderColor: cor }} onChange={getData} id="nome_user" name="nome_user" type="text" placeholder='Nome:' autoComplete="current-password" min={0} required className="mt-5 border-b-2  block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-200 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      : null}
                  </div>
                  <div className="mt-2">
                    <input tabIndex={10} style={{ borderColor: cor }} onChange={getData} id="email_user" name="email_user" type="email" placeholder='Email:' value={from.email_user} required className="mt-5 border-b-2 w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-200 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      {ecadastro ? null : <a tabIndex={12} href="#" className="relative top-12 ml-60 font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a Senha?</a>}
                    </div>
                  </div>
                  <div className="mt-2">
                    <input tabIndex={11} style={{ borderColor: cor }} onChange={getData} id="senha_user" name="senha_user" type="password" placeholder='Senha:' value={from.senha_user} required className="mt-5 border-b-2  block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-200 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                  <div className="mt-2">
                    {ecadastro ?
                      <div>
                        <input tabIndex={12} onChange={getData} id="senha_user_comfir" style={{ borderColor: cor }} name="senha_user_comfir" type="password" placeholder='Confirmar a senha:' autoComplete="current-password" required className="mt-5 border-b-2  block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-200 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        <div style={{ color: '#F60000', fontSize: '10px' }} tabIndex={13}>{erro}</div>
                      </div>
                      : null}
                  </div>
                  <div className="mt-2">
                    {ecadastro ?
                      <input tabIndex={14} style={{ borderColor: cor }} onChange={getData} id="tel_user" name="tel_user" type="text" placeholder='Telefone:' autoComplete="current-password" maxLength={11} min={0} required className="mt-5 border-b-2  block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-200 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      : null}
                  </div>
                  <div className="mt-2">
                    {ecadastro ?
                      <input tabIndex={15} style={{ borderColor: cor }} onChange={getData} id="tel_emg_user" name="tel_emg_user" type="text" placeholder='Numero de Emergencia:' autoComplete="current-password" maxLength={11} min={0} required className="mt-5 border-b-2  block w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-200 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      : null}
                  </div>

                </div>
                <div>
                  <button onClick={submit} tabIndex={16} type="submit" className="mt-5 flex h-14 w-full justify-center rounded-md bg-indigo-600 p-4 text-4xl  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-auto"> {ecadastro ? "Cadastrar-se" : "Entrar"}</button>
                  {ecadastro ? null :
                    <div>
                      <p tabIndex={17} className='text-blue-700 text-5xl font-black text-center mt-5 mb-5'>ou</p>
                      <button type='submit' className='text-2xl hover:bg-slate-200 bg-white w-full h-20 rounded-xl' tabIndex={18}><img src={googleLogoUrl} alt="Logo do google" className='w-12 relative top-4 left-3' /><div className='relative bottom-5'>Entrar com google</div></button>
                    </div>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
        <h1 tabIndex={19} style={{ color: "#3D50B6" }} className='text-4xl underline text-center mt-6'><a href="/sobre"><strong> Sobre</strong></a></h1>
      </div>

    </main>
  )
}
