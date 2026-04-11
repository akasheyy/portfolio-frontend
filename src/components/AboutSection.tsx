import { Code2, Database, Server, Layout, GitBranch, Globe, Flame, ShieldCheck } from "lucide-react";

const skills = [
  { icon: Layout, label: "React.js", desc: "Frontend Development" },
  { icon: Server, label: "Node.js & Express", desc: "Backend Development" },
  { icon: Database, label: "MongoDB", desc: "Database Management" },
  { icon: Code2, label: "TypeScript", desc: "Type-Safe Code" },
];

// New list for additional technologies
const extraTech = [
  "HTML5", "CSS3", "JavaScript", "Bootstrap", 
  "Tailwind CSS", "Git", "Firebase"
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          About <span className="text-gradient font-extrabold">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          A passionate developer who loves building things for the web
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a MERN Stack Developer with a passion for creating dynamic and responsive web applications. 
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With experience in both frontend and backend technologies, I can build complete 
              web applications from scratch. I'm always eager to learn new technologies and 
              improve my skills.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or learning about system design and architecture.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:glow-shadow group"
              >
                <skill.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground text-sm mb-1">{skill.label}</h3>
                <p className="text-muted-foreground text-xs">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- NEW SECTION START --- */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Additional <span className="text-gradient">Technologies</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {extraTech.map((tech) => (
              <div 
                key={tech}
                className="px-4 py-2 bg-secondary/30 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        {/* --- NEW SECTION END --- */}
        
      </div>
    </section>
  );
};

export default AboutSection;