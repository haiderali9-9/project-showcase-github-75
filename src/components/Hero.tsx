
import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Hero = ({ searchQuery, setSearchQuery }: HeroProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
          Projects
        </h1>
        
        <div className="mt-8 relative max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search projects..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <p className="mt-8 text-lg leading-8 text-muted-foreground flex flex-wrap justify-center gap-2">
          {[
            "DevOps",
            "Cloud Architect",
            "Kubernetes",
            "Terraform",
            "AWS",
            "CI/CD",
            "GitOps",
            "Automation",
            "Ansible",
            "Docker",
            "Helm",
            "CloudNative",
            "OpenStack",
            "IaC",
            "MERN Stack",
            "Linux",
            "Bash"
          ].map((skill) => (
            <span key={skill} className="bg-secondary px-2 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Hero;
