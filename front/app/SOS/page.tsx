'use client'
import React from "react";
import Navbar from "../shaed/constants/navbar";
import Navbarvol from "../shaed/constants/navbarvol";
import api from "../shaed/utils/my-axios";
interface Imagen {
  imag: string;
}
export default function SOSPage() {
  const [foto, setFoto] = React.useState<Imagen>({ imag: '' })
  const getData = (e: any) => {
    const { name, value } = e.target
    setFoto({ ...foto, [name]: value })
  }
  const subimit = async (e: any) => {
    e.preventDefault()
const response = await api.post('/sos/uploadFile', foto)
console.log(response);

  }
  return (
    <main className="w-screen h-screen  px-48 py-10">
      <div style={{ borderRadius: '2rem', background: '#EC6161' }} className="w-full h-full ">
        Coloque uma imagen <br />
        <input type="file" name="imag" id="imag" onChange={getData} /> <br />
        <button className="text-white" onClick={subimit}>mandar</button>
      </div>

    </main>
  )
}