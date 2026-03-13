import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Section Components
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import AutomationSection from "./components/sections/AutomationSection";
import InsightsSection from "./components/sections/InsightsSection";
import ResumeSection from "./components/sections/ResumeSection";
import ContactSection from "./components/sections/ContactSection";

const queryClient = new QueryClient();

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Automation Work",
  "Insights / Blog",
  "Resume",
  "Contact",
];

function PortfolioLayout() {
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Scroll to top of main content when section changes
  useEffect(() => {
    const mainContent = document.getElementById("main-scroll-area");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Home": return <HomeSection navigateTo={handleNavClick} />;
      case "About": return <AboutSection />;
      case "Skills": return <SkillsSection />;
      case "Projects": return <ProjectsSection />;
      case "Automation Work": return <AutomationSection />;
      case "Insights / Blog": return <InsightsSection />;
      case "Resume": return <ResumeSection />;
      case "Contact": return <ContactSection />;
      default: return <HomeSection navigateTo={handleNavClick} />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-background text-foreground overflow-hidden font-sans">
      
      {/* Header (Fixed) */}
      <header className="h-20 shrink-0 border-b border-border/40 glass-panel z-50 flex items-center justify-between px-6 md:px-10">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick("Home")}
          style={{ filter: "none", transition: "filter 0.2s ease" }}
          onMouseEnter={e => (e.currentTarget.style.filter = "brightness(1.15) drop-shadow(0 0 8px rgba(0,114,255,0.5))")}
          onMouseLeave={e => (e.currentTarget.style.filter = "none")}
        >
          {/* Square icon with gradient */}
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: 22,
                fontFamily: "'Poppins', 'Inter', sans-serif",
                lineHeight: 1,
                letterSpacing: "-0.5px",
              }}
            >
              S
            </span>
          </div>

          {/* Brand text */}
          <span
            style={{
              fontFamily: "'Poppins', 'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: "-0.5px",
              lineHeight: 1,
            }}
          >
            <span style={{ color: "#ffffff" }}>Sai</span>
            <span
              style={{
                background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              .dev
            </span>
          </span>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Mini Contact */}
        <div className="hidden md:flex items-center text-sm font-medium text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
          Available for projects
        </div>
      </header>

      {/* Navigation Bar (Fixed below header on desktop) */}
      <nav className="hidden md:flex h-14 shrink-0 border-b border-border/40 bg-card/50 backdrop-blur items-center px-10 gap-8 overflow-x-auto no-scrollbar z-40">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className={`whitespace-nowrap text-sm font-medium transition-all duration-200 relative h-full flex items-center ${
              activeSection === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item}
            {activeSection === item && (
              <motion.div 
                layoutId="activeNav"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Menu (Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border/40 bg-card z-40 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeSection === item 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area (Scrollable) */}
      <main id="main-scroll-area" className="flex-1 overflow-y-auto relative scroll-smooth bg-background">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8 min-h-full flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer (Fixed) */}
      <footer className="h-12 shrink-0 border-t border-border/40 bg-card/50 backdrop-blur z-40 flex items-center justify-between px-6 md:px-10 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
        <div className="flex gap-4">
          <button onClick={() => handleNavClick("Contact")} className="hover:text-primary transition-colors">Contact</button>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </footer>

    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PortfolioLayout />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
