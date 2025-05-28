export const SkillsSection = () => {
  const skills = [
    { src: "/images/c++.png", alt: "C++" },
    { src: "/images/csharp.png", alt: "C#" },
    { src: "/images/python.png", alt: "Python" },
    { src: "/images/javascript.png", alt: "JavaScript" },
    { src: "/images/css.png", alt: "CSS" },
    { src: "/images/html.png", alt: "HTML" },
    { src: "/images/tailwindcss.png", alt: "TailwindCSS" },
    { src: "/images/react.svg", alt: "React" },
    { src: "/images/nextjs.png", alt: "Next.js" },
    { src: "/images/mongodb.svg", alt: "MongoDB" },
    { src: "/images/php.svg", alt: "PHP" },
    { src: "/images/java.png", alt: "Java" },
    { src: "/images/mysql.svg", alt: "MySQL" },
    { src: "/images/nodejs.svg", alt: "Node.js" },
  ];

  const allSkills = [...skills, ...skills];

  return (
    <section className="py-16 px-2" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Skills
      </h2>
      <div className="overflow-hidden w-full max-w-3xl mx-auto"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 16%, black 80%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 16%, black 80%, transparent 100%)",
      }}
      >
        <div className="flex gap-12 animate-marquee w-max">
          {allSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-24 h-24"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-20 h-20 object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
