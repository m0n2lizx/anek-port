import Skill from "./components/skill";
import Navbar from "./components/nav";
import Project from "./components/project";
import Hero from "./components/hero";
import About from "./components/about";

function Section({ label, title, children }) {
  return (
    <section className="w-full max-w-5xl mx-auto py-24 px-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400">
          {label}
        </span>
        <div className="flex-1 h-px bg-green-900" />
      </div>
      <h2 className="text-4xl font-bold text-green-50 mb-12 tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

function GlowCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl border border-green-900 bg-[#0b1a0e]
        shadow-[0_0_40px_-8px_rgba(74,222,128,0.12)]
        hover:shadow-[0_0_60px_-8px_rgba(74,222,128,0.22)]
        hover:border-green-700
        transition-all duration-500
        w-full
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-green-50 antialiased">

        <Navbar />
     
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px]" />
      </div>

  
      <div className="relative w-full max-w-5xl mx-auto px-6 pt-10 pb-4 mt-8">
        <GlowCard className="p-0 overflow-hidden">
          <Hero />
        </GlowCard>
      </div>


      <div className="w-full max-w-5xl mx-auto px-6 my-2 flex items-center gap-2 opacity-40">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-700 to-transparent" />
      </div>

 
      <div className="relative w-full max-w-5xl mx-auto px-6 pb-4">
        <GlowCard className="p-0 overflow-hidden">
          <About />
        </GlowCard>
      </div>

    
      <Section label="// what I work with" title="Skills">
        <GlowCard className="p-8">
          <Skill />
        </GlowCard>
      </Section>


      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-green-800 to-transparent" />
      </div>

   
      <Section label="// things I've built" title="Projects">
        <GlowCard className="p-8">
          <Project />
        </GlowCard>
      </Section>


      <footer className="w-full max-w-5xl mx-auto px-6 py-10 flex items-center justify-between border-t border-green-950">
        <span className="text-xs font-mono text-green-700 tracking-widest">
          ANEK.DEV
        </span>

      </footer>

    </main>
  );
}