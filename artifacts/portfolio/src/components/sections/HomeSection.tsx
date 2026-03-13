import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

interface HomeSectionProps {
  navigateTo: (section: string) => void;
}

export default function HomeSection({ navigateTo }: HomeSectionProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] w-full rounded-3xl overflow-hidden glass-panel border-0">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium tracking-wide"
        >
          Open to new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-balance"
        >
          Hi, I'm <span className="text-gradient">Alex Morgan</span>
          <br />
          <span className="text-3xl md:text-5xl text-muted-foreground">Automation & Data Specialist</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I transform complex data into actionable insights and build automated workflows that save hundreds of hours. Expert in Python, Excel, and AI-driven processes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto group" onClick={() => navigateTo('Projects')}>
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => navigateTo('Contact')}>
            <Mail className="mr-2 w-4 h-4" />
            Contact Me
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
