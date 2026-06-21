import Image from "next/image";
export default function Hero() {
      const myName = "Anek";
    const mylast = "Rienpreecha";
  return (
<div className="flex text-8xl flex items-center justify-center gap-8" >
               <Image
                    className="aspect-square animate-up delay-1 rounded-full object-cover"
                    src="/img/a.jpg"
                    alt="Anek Rienpreecha"
                    width={200}
                    height={200}
                  />
                  <div className="">
                    <h1 className="p-0 ">{myName}</h1>
                    <h6 className="p-0 text-6xl">{mylast}</h6>
                  </div>
                </div>
  );
  
}