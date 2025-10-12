import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Hero = ({ searchQuery, setSearchQuery }: HeroProps) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Tech-themed decorative elements */}
      <div className="absolute top-10 left-10 text-5xl opacity-10 animate-pulse" style={{ animationDuration: '3s' }}>
        &lt;/&gt;
      </div>
      <div className="absolute top-32 right-16 text-4xl opacity-10 animate-pulse" style={{ animationDuration: '4s' }}>
        ⚙️
      </div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-10 animate-pulse" style={{ animationDuration: '3.5s' }}>
        🔧
      </div>
      <div className="absolute bottom-32 right-32 text-5xl opacity-10 animate-pulse" style={{ animationDuration: '4.5s' }}>
        {'{ }'}
      </div>
      
      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--gradient-start)_/_0.1)] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[hsl(var(--gradient-end)_/_0.1)] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] bg-clip-text text-transparent drop-shadow-sm">
          My Projects Portfolio
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
            <span key={skill} className="bg-gradient-to-r from-[hsl(var(--gradient-start)_/_0.15)] to-[hsl(var(--gradient-end)_/_0.15)] px-3 py-1.5 rounded-full text-sm font-medium text-foreground border border-primary/20 hover:scale-105 transition-transform">
              {skill}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Hero;
