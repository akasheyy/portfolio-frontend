import { GraduationCap, BookOpen, Code } from "lucide-react";

const qualifications = [
  {
    icon: BookOpen,
    title: "10th Standard",
    institution: "GVHSS Nellikuth",
    year: "2022-23",
    description: "Completed secondary education .",
  },
  {
    icon: GraduationCap,
    title: "12th Standard",
    institution: "GHSS Nellikuth",
    year: "2023-25",
    description: "Completed higher secondary education in Science stream.",
  },
  {
    icon: Code,
    title: "MERN Stack Development",
    institution: "SINET It solution",
    year: "2025-26",
    description: "Completed comprehensive full-stack development course covering MongoDB, Express.js, React, and Node.js.",
  },
];

const QualificationSection = () => {
  return (
    <section id="qualification" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          My <span className="text-gradient">Qualification</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          My educational journey
        </p>

        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {qualifications.map((qual, i) => (
            <div
              key={qual.title}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 top-2 z-10 ring-4 ring-background" />
              <div className="ml-14 md:ml-0 md:w-1/2 card-gradient border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <qual.icon className="w-5 h-5 text-primary" />
                  <span className="text-primary font-mono text-sm">{qual.year}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{qual.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{qual.institution}</p>
                <p className="text-muted-foreground text-xs">{qual.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
