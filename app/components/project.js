
export default function Projects() {
const pro = [
    {
      name: "JavaScript",
      description: "ภาษาสำหรับพัฒนาเว็บไซต์และแอปพลิเคชันแบบ Interactive"
    },
    {
      name: "Python",
      description: "ภาษาที่ใช้งานง่าย เหมาะสำหรับ AI, Data Science และ Backend"
    }
  ];

  return (
    <section className="py-20 px-8 flex flex-col gap-4">
      {pro.map((item) => (
        <div
          key={item.name}
          className="rounded-xl p-4 bg-white text-black"
        >
          <h2 className="text-3xl font-bold text-blue-600">{item.name}</h2>
          <p className="text-lg mt-2">{item.description}</p>
        </div>
      ))}
    </section>
  );
  
}