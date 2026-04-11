export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: "react" | "fullstack" | "frontend";
  url: string;
  featured: boolean;
}

const STORAGE_KEY = "portfolio_projects";

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, cart functionality, and payment integration using Stripe.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    category: "fullstack",
    url: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    category: "react",
    url: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media managers with real-time data visualization, scheduling, and reporting features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    techStack: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    category: "fullstack",
    url: "#",
    featured: true,
  },
  {
    id: "4",
    title: "Weather App",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and hourly/weekly predictions.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    techStack: ["React", "CSS3", "OpenWeather API"],
    category: "frontend",
    url: "#",
    featured: false,
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown editor, categories, comments, and SEO optimization.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    category: "fullstack",
    url: "#",
    featured: false,
  },
  {
    id: "6",
    title: "Portfolio Template",
    description: "A modern, responsive portfolio template with smooth animations, dark mode, and customizable sections.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    category: "frontend",
    url: "#",
    featured: false,
  },
];

export function getProjects(): Project[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
  return defaultProjects;
}

export function saveProjects(projects: Project[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function addProject(project: Omit<Project, "id">): Project {
  const projects = getProjects();
  const newProject = { ...project, id: Date.now().toString() };
  projects.push(newProject);
  saveProjects(projects);
  return newProject;
}

export function updateProject(id: string, data: Partial<Project>) {
  const projects = getProjects();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx !== -1) {
    projects[idx] = { ...projects[idx], ...data };
    saveProjects(projects);
  }
}

export function deleteProject(id: string) {
  const projects = getProjects().filter((p) => p.id !== id);
  saveProjects(projects);
}
