'use client'
import React, { FormEvent, useEffect, useState } from 'react';
import api from '../shaed/utils/my-axios';


interface Usuario {
  id: string;
  email: string;
  name: string;
  telEmgUser: string;
  telUser: string;
}

export default function Teste() {
  const [usuario, setUsuario] = useState<Usuario[]>([]);
  const [show, setShow] = useState<Usuario[]>([]);
  const token = localStorage.getItem('token')
  useEffect(() => {
    console.log(show);
  }, [show]);
  useEffect(() => {
    async function getallUser() {
      try {
        const response = await api.get('http://localhost:38000/users/listUser', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const data = await response.data.usuarios
        await setUsuario(data)
        setShow(data)
      } catch (err) {
        console.log(err)
      }
    }
    getallUser()
  }, []);

  return (
    <div>
      <h1>Usuario</h1>

      <section>
        <ul>
          {show.map(show => {
            return (
              <li key={show.id}>
               <label>id:</label> {show.id} <br />
               <label>name:</label> {show.name} <br />
               <label>email:</label>{show.email} <br />
               <label>telEmgUser:</label>{show.telEmgUser} <br />
               <label>telEmgUser:</label>{show.telUser} <br />
               <p>----------------------------------------------------------------------------</p>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
