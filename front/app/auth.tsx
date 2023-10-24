'use client'

import Login from "./page"

export default function Auth({ 
    children,
  }: {
    children: React.ReactNode
  })  {
   if(localStorage && localStorage.getItem("token")){
    return (<div>{children}</div>)
   } else{
    return (<Login/>)
   }
}