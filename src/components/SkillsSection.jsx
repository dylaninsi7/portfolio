export const SkillsSection = () => {
  const skills = [
    { src: "/images/c++.png", alt: "Skill 1" }, 
    { src: "/images/csharp.png", alt: "Skill 2" },
    { src: "/images/python.png", alt: "Skill 3" },
    { src: "/images/javascript.png", alt: "Skill 4" },
    { src: "/images/css.png", alt: "Skill 5" },
    { src: "/images/html.png", alt: "Skill 6" },
    { src: "/images/tailwindcss.png", alt: "Skill 7" },
    { src: "/images/react.svg", alt: "Skill 8" },
    { src: "/images/nextjs.png", alt: "Skill 9" },
    { src: "/images/mongodb.svg", alt: "Skill 10" },
    { src: "/images/php.svg", alt: "Skill 11" },
    { src: "/images/java.png", alt: "Skill 12" },
    { src: "/images/mysql.svg", alt: "Skill 13" },
    { src: "/images/nodejs.svg", alt: "Skill 14" },

 
  ];
    const ANIMATION_DURATION = 20;
  return (
    <section className="py-16 px-2" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
      <div className="slider relative mx-auto w-full max-w-3xl h-24 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)" }}>
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="slider-item absolute top-0 animate-autoRun"
            style={{
              width: "90px",
              height: "100px",
              left: "100%",
              animationDelay: `calc((${ANIMATION_DURATION}s / ${skills.length}) * ${idx} - ${ANIMATION_DURATION}s)`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-22 h-22 object-contain"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
