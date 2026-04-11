import { Code2, Github, Linkedin, Heart, Instagram } from "lucide-react"; // Added Instagram here
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-2 text-primary font-bold">
        <Code2 className="w-5 h-5" />
        <span className="font-mono text-sm">&lt;Akash /&gt;</span>
      </Link>
      
      <p className="text-muted-foreground text-sm flex items-center gap-1">
        Built with <Heart className="w-3 h-3 text-primary" /> using React & Tailwind
      </p>

      <div className="flex gap-4">
        <a 
          href="https://github.com/akasheyy" 
          target="_blank" 
          rel="noreferrer" 
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/akash-v-s-309815380/" 
          target="_blank" 
          rel="noreferrer" 
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        {/* Instagram Icon */}
        <a 
          href="https://www.instagram.com/aka.sheyyy_?igsh=MWEzcTBrZHVjdzFjMA==" 
          target="_blank" 
          rel="noreferrer" 
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;