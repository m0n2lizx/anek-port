
export default function About() {

  const skills = ["javascript","python","tailwind","Microsoft Office","Photoshop"];
  return (
    
    <section className="py-20 px-8 t flex flex-wrap gap-4 ">
      
                  {skills.map((skill) => (
                    <div className="flex flex-wrap rounded-xl gap-3 p-3 bg-gradient-to-br from-orange-400 to-fuchsia-600 text-3xl">
                     
                        <span key={skill}>{skill}</span>
                    </div>
            ))}
    </section>
    )
  
}