export default function Skill() {
  const skills = [
    { name: "JavaScript", icon: "JS" },
    { name: "Python",     icon: "PY" },
    { name: "Tailwind CSS", icon: "TW" },
    { name: "Microsoft Office", icon: "MS" },
    { name: "Photoshop", icon: "PS" },
  ];

  return (
    <section className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="
            group flex items-center gap-2 px-4 py-2
            rounded-xl border border-green-800 bg-green-950/50
            hover:border-green-500 hover:bg-green-900/40
            hover:shadow-[0_0_16px_-2px_rgba(74,222,128,0.25)]
            transition-all duration-300 cursor-default
          "
        >
          <span className="text-[10px] font-mono font-bold text-green-400 bg-green-900 px-1.5 py-0.5 rounded">
            {skill.icon}
          </span>
          <span className="text-sm font-medium text-green-100 group-hover:text-green-300 transition-colors duration-300">
            {skill.name}
          </span>
        </div>
      ))}
    </section>
  );
}