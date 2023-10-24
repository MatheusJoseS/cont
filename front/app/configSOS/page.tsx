import Navbar from "../shaed/constants/navbar";
import Navbarvol from "../shaed/constants/navbarvol";

export default function HomePage() {
  return (
    <main className="w-screen h-screen  px-48 py-10">
      <div style={{borderRadius: '2rem',background: '#EC6161'}}  className="w-full h-full ">
          <Navbarvol/>
      </div>
      <a href="/SOS">SOS</a>
    </main>
  )
}