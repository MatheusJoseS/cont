'use client'
import React, { useEffect, useState } from "react";
import api from "../shaed/utils/my-axios";
interface Imagen {
  id: string;
  description: string;
}
interface Depoimento {
  state: string;
  description: string;
  id: string;
}
export default function SOSconfPage() {
  const [imagen, setImagen] = useState(false)
  const [pag, setPag] = useState(false)
  const [adm, setAdm] = useState(false)
  const [fotos, setFotos] = useState<Imagen[]>([]);
  const [descri, setDescri] = useState<Depoimento[]>([]);
  const [avaliador, setAvaliador] = useState<{ state: string, description: string }>({ state: '', description: '' })
  const [from, setFrom] = React.useState<{ description: string; id: string }>({ description: '', id: '' })
  const data = {
    description: from.description
  }
  const Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await api.post('/brief/createBrief', data)
    location.href='/depoimento'

  }
  const getData = (e: any) => {
    const { name, value } = e.target
    setFrom({ ...from, [name]: value })
  }
  const login = () => {
    const novoestado = false;
    setImagen(novoestado)
  }
  const cadastro = () => {
    const novoestado = true;
    setImagen(novoestado)
  }
  const admVeriv = () => {
    setPag(!pag);
    console.log(pag);
  }
  const Aprovado = async (id: string, state: string) => {
    const response = await api.put('/brief/updateBriefByAdm/' + id,state)
    location.href='/depoimento'
  }
  useEffect(() => {
    info(),
      admmm();
  }, [])

  const info = async () => {
    const response = await api.get('/brief/listTrueBrief')
    const data = response.data
    setFotos(data)
  }
  const admmm = async () => {
    const admres = await api.get('/users/pegaPorId')
    const admAnalize = await api.get('/brief/listFalseBrief')
    const admdata = admres.data.saveUser.isAdmin
    if (admdata === true) {
      setAdm(true)
    } else {
      console.log('Não Adm');
    }
    const admava = admAnalize.data
    setDescri(admava)
  }
  return (
    <main style={{ background: '#75ced3' }} className="w-screen h-screen flex">
      <div style={{ background: '#c5e6e8' }} className="w-1/4 h-full border-r-2 border-solid border-white">
        <a href="/home"><img src="/imagens/sete.png" alt="" className="w-20 ml-5 pt-5" /></a>
        {imagen ? <button style={{ color: '#41a5ab' }} onClick={login} className="w-full h-20 mt-10 text-white text-3xl" tabIndex={5}><strong>Todas os comentarios</strong> </button> : <button className="w-full h-20 mt-10 text-white text-3xl" style={{ background: '#75ced3' }} tabIndex={5}><strong>Todas os comentarios</strong></button>}
        {imagen ? <button className="w-full h-20 mt-10 text-white text-3xl" style={{ background: '#75ced3' }} tabIndex={6}><strong>Adicionar</strong></button> : <button style={{ color: '#41a5ab' }} onClick={cadastro} className="w-full h-20 mt-10 text-white text-3xl" tabIndex={6}><strong>Adicionar</strong></button>}
        {adm && <button style={{ color: '#41a5ab' }} onClick={admVeriv} className="w-full h-20 mt-10 text-white text-3xl" tabIndex={5}> <strong>Analise</strong></button>}
      </div>
      <div>
        {pag ?
          <div>
            {descri.map(descri => {
              return (
                <div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="w-11/12 h-auto bg-white p-5 rounded-lg ml-5">
                      <p className="text-3xl">"<strong className="text-2xl">{descri.description}</strong>"</p>
                      <button onClick={() => Aprovado(descri?.id, descri?.state)}>apro</button> <button>negado</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div> :
          <div>
            {imagen ?
              <div className="w-full">
                <h1 className="text-white text-5xl mt-5 flex m-auto">Cont;nue</h1>
                <img src="" alt="" />
                <div>
                  <p>Compartilhe uma experiência pessoal em que você superou uma crise. Descreva os desafios que enfrentou, as ações que tomou e como superou a situação. Sua história pode ser inspiradora e proporcionar percepções valiosas para quem possa estar enfrentando situações semelhantes. Portanto, não hesite em compartilhar sua experiência. Isso pode ser de grande ajuda para outras pessoas.</p>
                </div>
                <img src="" alt="" />
                <textarea name="description" id="description" onChange={getData} cols={30} rows={10}></textarea>
                <button onClick={Submit}>Enviar <img src="" alt="" /></button>
              </div>
              :
              <div className="w-full">
                <div style={{ overflow: "auto", height: '55em' }} className="w-full p-10">
                  {fotos.map(fotos => {
                    return (
                      <div>
                        <div className="flex justify-between items-center mt-5">
                          <img src="/imagens/prerfil.png" alt="" className="w-20" />
                          <div className="w-11/12 h-auto bg-white p-5 rounded-lg ml-5">
                            <p className="text-3xl">"<strong className="text-2xl">{fotos.description}</strong>"</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            }
          </div>}
      </div>

    </main >
  )
}