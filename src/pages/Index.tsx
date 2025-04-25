
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const projects = [
    {
      title: "Deploying Applications on Kubernetes using GitOps and Argo CD",
      description: "A comprehensive guide on implementing GitOps practices with Kubernetes and Argo CD for streamlined application deployment and management.",
      link: "https://medium.com/@haidersarfraz0323/how-to-deploy-applications-on-kubernetes-using-gitops-and-argo-cd-0fb9ef5d15f8",
    },
    // More projects can be added here
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
