export default function Projects() {
  const pro = [
    {
      name: "JavaScript",
      description: "web application",
      tag: "design",
      link: "#",
    },
    {
      name: "Python",
      description: "python game",
      tag: "develop",
      link: "#",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      {pro.map((item) => (
        <div
          key={item.name}
          className="group rounded-xl p-5 border border-green-900 bg-green-950/30 hover:border-green-600 hover:bg-green-950/50 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-green-100 group-hover:text-green-400 transition-colors duration-300">
              {item.name}
            </h2>
            <span className="text-[11px] font-mono tracking-widest text-green-400 bg-green-900/50 px-2 py-1 rounded">
              {item.tag}
            </span>
          </div>
          <p className="text-sm text-green-300/70 leading-relaxed">
            {item.description}
          </p>

        </div>
      ))}
    </section>
  );
}