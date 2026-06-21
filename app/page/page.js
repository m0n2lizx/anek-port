import Image from "next/image";
import Hero from "../components/hero";
      function greeting({ namee }){
        return <h1> hello {namee} </h1>
      }
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-olive-950 p-4">
      <Hero />
      <greeting
      namee = "amek"
      
      />

      <Image
        className="aspect-square animate-up delay-1 rounded-full object-cover"
        src="/img/a.jpg"
        alt="Anek Rienpreecha"
        width={200}
        height={200}
      />
      
      <div className="text-8xl mb-6">{/* emoji */}</div>
      
      {/* ชื่อ */}
      <h1 className="text-7xl animate-up delay-2 font-bold text-white mb-4 text-shadow-md text-shadow-mist-50">
        Anek rienpreecha ✨
      </h1>
      
      {/* Tagline */}
      <p className="text-2xl animate-up delay-3 text-stone-950 font-bold italic rounded-lg p-3 text-center bg-white mb-4 w-full max-w-md">
        Marketing of ranchum
      </p>
      <p className="text-2xl animate-up delay-3 text-stone-950 font-bold italic rounded-lg p-3 text-center bg-white mb-8 w-full max-w-md">
        เอนก เหรียญปรีชา
      </p>
      
      {/* 2 ปุ่ม */}
      <div className="flex gap-4 mt-6 animate-up delay-4">
        <button className="px-6 py-3 bg-white text-stone-950 font-semibold rounded-md shadow-lg hover:scale-105 transition">
          Projects
        </button>

        <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-stone-950 transition">
          Contact
        </button>
      </div>
    </main>
  );
}

