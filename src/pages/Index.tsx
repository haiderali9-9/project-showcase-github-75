
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const projects = [
    {
      title: "Deploying Applications on Kubernetes using GitOps and Argo CD",
      description: "A comprehensive guide on implementing GitOps practices with Kubernetes and Argo CD for streamlined application deployment and management.",
      link: "https://medium.com/@haidersarfraz0323/how-to-deploy-applications-on-kubernetes-using-gitops-and-argo-cd-0fb9ef5d15f8",
    },
    {
      title: "Monster Rolodex",
      description: "A React application that displays a collection of monsters with search functionality and responsive design.",
      link: "https://github.com/haiderali9-9/-monster-rolodox",
    },
    {
      title: "Meal Search",
      description: "An application to search for meals and recipes with detailed information and instructions.",
      link: "https://github.com/haiderali9-9/mealsearch",
    },
    {
      title: "Find Pokemon",
      description: "A Pokemon search application built with modern web technologies to explore and discover Pokemon.",
      link: "https://github.com/haiderali9-9/FindPokemon",
    },
    {
      title: "Carpool",
      description: "A carpooling platform to connect drivers and passengers for shared rides and sustainable transportation.",
      link: "https://github.com/haiderali9-9/Carpool",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
