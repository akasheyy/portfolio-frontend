import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
          Hello,
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">I'M </span>
          <span className="text-gradient">AKASH</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          MERN Stack Developer
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          I build modern, scalable web applications using MongoDB, Express.js, React, and Node.js. 
          Passionate about clean code and great user experiences.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a href="#contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Get In Touch
            </Button>
          </a>
          <a href="#about">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              About Me
            </Button>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <a href="https://github.com/akasheyy" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/akash-v-s-309815380/" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:Vadakkangaraakash@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
        </div>

        <a href="#about" className="inline-block mt-16 animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
