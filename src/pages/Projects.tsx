import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectCard } from "@/components/FeaturedProjects";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import API from "@/services/api";
import { motion } from "framer-motion";

const categories = [
  { key: "all", label: "All" },
  { key: "react", label: "React" },
  { key: "fullstack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");

      // 🔥 Featured first
      const sorted = res.data.sort((a, b) => b.featured - a.featured);

      setProjects(sorted);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding pt-32">
        <div className="container mx-auto">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-2"
          >
            All <span className="text-gradient">Projects</span>
          </motion.h1>

          <p className="text-muted-foreground text-center mb-10 max-w-md mx-auto">
            Explore my complete portfolio of work
          </p>

          {/* Filters */}
          <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 🔥 Loading Skeleton */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-60 bg-gray-200 animate-pulse rounded-lg"
                />
              ))}
            </div>
          ) : (
            <>
              {/* Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {filtered.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} onShowMore={() => setSelectedProject(project)} />
                  </motion.div>
                ))}
              </div>

              {/* Empty state */}
              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">
                    No projects found in this category.
                  </p>
                </div>
              )}

              {/* Project Detail Modal */}
              <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent className="max-w-4xl w-[95vw] h-[90vh] sm:rounded-none p-0 max-h-[90vh] overflow-hidden">
                  {selectedProject && (
                    <div className="p-8 md:p-12 max-w-6xl mx-auto h-full flex flex-col overflow-y-auto">
                      {/* Image */}
                      <div className="aspect-video mb-8 overflow-hidden rounded-lg">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Title & Tech */}
                      <div className="mb-8">
                        <DialogTitle className="text-3xl font-bold mb-4">
                          {selectedProject.title}
                        </DialogTitle>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.techStack?.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Full Description */}
                        <DialogDescription className="text-lg leading-relaxed max-w-3xl">
                          <p className="whitespace-pre-wrap">
                            {selectedProject.description}
                          </p>
                        </DialogDescription>
                      </div>

                      {/* Links */}
                      <DialogFooter className="gap-4 pt-8 border-t border-border">
                        {selectedProject.liveLink && (
                          <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="gap-2">
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                        {selectedProject.url && (
                          <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="gap-2">
                              <Github className="w-4 h-4" />
                              Source Code
                            </Button>
                          </a>
                        )}

                      </DialogFooter>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;