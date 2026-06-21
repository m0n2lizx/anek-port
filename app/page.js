
import Skill from "./components/skill";
import Project from "./components/project";
import Hero from "./components/hero";
import About from "./components/about";
     function Greeting({ name }){
        return <h1> hello {name} </h1>
      }
     function Greetin({ namee }){
        return <h1> {namee} </h1>
      }
function Section({ title, children }) {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}

function Container({ children }) {
  return (
    <div className="bb p-3 flex flex-col items-center justify-center rounded-xl">
      {children}
    </div>
  );
}

export default function home() {

    return(

        <main className="min-h-screen gap-4 flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-olive-950 p-8">
            
            <Container className="bb p-0 ">
            <Hero />
            </Container>
            <Container className="bb p-0">
            <About />
            </Container>
            <div className="text-8xl">
                <h1 className="text-5xl font-stretch-extra-condensed text-center italic font-bold mt-5" >SKILL</h1>
                <hr></hr>
            <Skill />
            </div>
            <div className="text-8xl">
                <h1 className="text-5xl font-stretch-extra-condensed text-center italic font-bold mt-5" >Project</h1>
                <hr></hr>
            <Project />
            </div>


        </main>


    )
}