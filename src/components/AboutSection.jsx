import { BookOpen, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Passionate Software Developer
          </h3>
          <p className="text-muted-foreground">
            With knowledge in fullstack development, I enjoy building robust and
            scalable applications that provide real value to users through
            thoughtful design and performance.
          </p>
          <p className="text-muted-foreground">
            I'm passionate about solving complex problems with elegant solutions
            and always learning new technologies to stay ahead in the evolving
            tech world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get in Touch
            </a>
            <a
              href="resume-link"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
