import { useState } from "react";
import Marquee from "react-fast-marquee";

export const SkillsSection = () => {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(null);

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
    { src: "/images/nodejs.svg", alt: "Node.js" },
    { src: "/images/mongodb.svg", alt: "MongoDB" },
    { src: "/images/php.svg", alt: "PHP" },
    { src: "/images/java.png", alt: "Java" },
    { src: "/images/mysql.svg", alt: "MySQL" },
  ];

  return (
    <section className="py-16 px-2" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        My <span className="text-primary"> Skills</span>
      </h2>
      <div
        className="overflow-hidden w-full max-w-5xl mx-auto"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 16%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 16%, black 80%, transparent 100%)",
        }}
      >
        <div className="mt-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setHovered(null);
          }}
        >
          <Marquee
            speed={80}
            pauseOnHover={false}
            pauseOnClick={false}
            play={!paused}
          >
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-32 h-32 mx-4"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className={
                    paused
                      ? hovered === idx
                        ? "w-30 h-30 object-contain transition duration-300"
                        : "w-28 h-28 object-contain transition duration-300 grayscale"
                      : "w-28 h-28 object-contain transition duration-300"
                  }
                  draggable={false}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div>
        <h1 className="mx-auto pt-8 mt-8 text-center text-2xl font-semibold min-h-[4rem]">
        {hovered !== null ? (
          <span className="px-6 py-2 rounded-full border border-primary text-primary">
          {skills[hovered].alt} 
          </span>
        ) : (
          ""
        )}
        </h1>
      </div>
    </section>
  );
};
