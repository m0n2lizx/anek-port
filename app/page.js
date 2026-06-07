import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-olive-950">
      
      <Image
        className="aspect-square animate-up delay-1 rounded-full object-cove"
        src="/img/a.jpg"
        alt=""
        width={200}
        height={200}
      />
      <div className="text-8xl mb-6">{/* emoji */}</div>
      
      {/* ชื่อ */}
      <h1 className="text-7xl animate-up delay-2 font-bold text-white mb-4 text-shadow-md text-shadow-mist-50">
        Anek rienpreecha ✨
      </h1>
      
      {/* Tagline */}
      <p className="text-2xl animate-up delay-3 text-stone-950 font-bold italic rounded-lg p-3 text-center bg-white text-bold mb-8 w-100">
        Marketing of ranchum
      </p>
      <p className="text-2xl animate-up delay-3 text-stone-950 font-bold italic rounded-lg p-3 text-center bg-white text-bold mb-8 w-100">
        เอนก เหรียญปรีชา
      </p>
      
      {/* 2 ปุ่ม */}
      <div className="flex gap-4 mt-6 animate-up delay-4">
        <button className="px-6 py-3  bg-white text-stone-950 font-semibold rounded-md shadow-lg hover:scale-105 transition">
            Projects
        </button>

        <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-stone-950 transition">
            Contact
        </button>
      </div>
      
    </main>
  );
}