import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <span className="font-display font-bold text-xl tracking-tight text-primary">AI System Lab</span>
      </div>
      <nav>
        <Link 
          href="/login" 
          className="bg-surface-low text-primary px-6 py-2 rounded-full font-medium text-sm hover:scale-105 transition-transform"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
