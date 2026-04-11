import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectCard } from "@/components/FeaturedProjects";
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
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
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;