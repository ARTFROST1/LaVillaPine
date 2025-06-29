import { Link } from "wouter";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-lg",
    md: "w-12 h-12 text-xl", 
    lg: "w-16 h-16 text-2xl"
  };

  return (
    <Link href="/" className={`flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 ${className}`}>
      {/* Placeholder Logo - Replace with actual logo image */}
      <div className={`bg-accent/10 rounded-full flex items-center justify-center ${sizeClasses[size]}`}>
        {/* TODO: Replace with <img src="/assets/logos/logo.png" alt="La Villa Pine" className="w-full h-full object-contain rounded-full" /> */}
        <span className="text-accent font-bold">LP</span>
      </div>
      <span className="text-2xl font-bold text-primary">La Villa Pine</span>
    </Link>
  );
}