
import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Hero = ({ searchQuery, setSearchQuery }: HeroProps) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Fun decorative emojis */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
        💡
      </div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
        🎨
      </div>
      <div className="absolute bottom-10 left-1/4 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
        🔧
      </div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] bg-clip-text text-transparent">
          Projects 🚀
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
