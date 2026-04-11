import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const getNavItems = (pathname: string) => {
  if (pathname === "/projects") {
    return [{ label: "Back to Home", href: "/" }];
  }
  return [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Qualification", href: "#qualification" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "#contact" },
  ];
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const scrollToSection = (id) => {
    const element = document.getElementById(id.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("#")) {
      return location.pathname === "/" && (
        (href === "#about" && location.hash === "#about") ||
        (href === "#qualification" && location.hash === "#qualification") ||
        (href === "#contact" && location.hash === "#contact")
      );
    }
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Code2 className="w-6 h-6" />
          Akash
        </a>

        <div className="hidden md:flex items-center gap-8">
          {getNavItems(pathname).map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault();
                  scrollToSection(item.href);
                }
              }}
              className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`
            >
              {item.label}
            </a>
          ))}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden text-foreground">
            <button>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <div className="flex flex-col h-full py-8 px-6 space-y-4">
              {getNavItems(pathname).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }
                    setOpen(false);
                  }}
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer py-2 px-3 rounded-md ${
                    isActive(item.href) ? "text-primary bg-primary/10 border-r-4 border-primary" : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
