import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import API from "@/services/api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");

      // 🔥 filter + sort + limit
      const featured = res.data
        .filter((p) => p.featured)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, 3);

      setProjects(featured);
    } catch (err) {
      console.error("Error fetching featured projects", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-2"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Some of my recent work
        </p>

        {/* 🔥 Loading Skeleton */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-60 bg-gray-200 animate-pulse rounded-lg"
              />
            ))}
          </div>
        ) : (
          <>
            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} onShowMore={() => alert('Full description: ' + (project.description || 'No description available'))} />
                </motion.div>
              ))}
            </div>

            {/* Empty state */}
            {projects.length === 0 && (
              <p className="text-center text-muted-foreground py-20">
                No featured projects yet.
              </p>
            )}
          </>
        )}

        {/* Button */}
        <div className="text-center mt-10">
          <Link to="/projects">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const ProjectCard = ({ project, onShowMore }: { project: any; onShowMore?: () => void }) => (
  <div className="card-gradient border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:glow-shadow group hover:scale-[1.02] duration-300">

    {/* Image */}
    <div className="aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="font-semibold text-foreground text-lg mb-2">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Show More Button */}
      {onShowMore && (
        <button
          onClick={onShowMore}
          className="text-xs text-primary/80 hover:text-primary font-medium flex items-center gap-1 mb-4 group"
        >
          Show more <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack?.map((tech, i) => (
          <Badge
            key={i}
            variant="secondary"
            className="bg-secondary text-secondary-foreground text-xs font-mono"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* Live Link */}
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          <ExternalLink className="w-4 h-4" /> Live Demo
        </Button>
      </a>
    </div>
  </div>
);

export default FeaturedProjects;