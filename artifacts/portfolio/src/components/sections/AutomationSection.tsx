import { motion } from "framer-motion";
import { Bot, FileSpreadsheet, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const automationAreas = [
  {
    icon: <FileSpreadsheet className="w-10 h-10 text-emerald-400" />,
    title: "Excel & VBA Ecosystems",
    description: "I don't just write macros; I build robust applications within Excel. From multi-workbook consolidations to automated email generation, I turn static spreadsheets into dynamic software.",
    features: ["Custom Ribbon Menus", "ADO/SQL inside Excel", "Complex Data Cleaning"]
  },
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "Python Data Pipelines",
    description: "When data exceeds Excel's limits, Python takes over. I build headless scripts that run on schedules, pulling data via APIs, scraping the web, and pushing processed data to dashboards.",
    features: ["API Integrations", "Web Scraping", "Scheduled Cron Jobs"]
  },
  {
    icon: <Cpu className="w-10 h-10 text-accent" />,
    title: "AI-Assisted Workflows",
    description: "The modern frontier of automation. Integrating Large Language Models to handle qualitative automation: reading emails, classifying intent, extracting entities from PDFs, and drafting replies.",
    features: ["LLM API Integration", "Document Parsing", "Sentiment Analysis"]
  }
];

export default function AutomationSection() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Art of <span className="text-primary">Automation</span></h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          My core philosophy: If a digital task is done more than three times the exact same way, it needs to be automated. Here is how I approach different scales of automation.
        </p>
      </motion.div>

      <div className="relative mb-20">
        <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl" />
        <div className="relative glass-panel rounded-3xl p-8 md:p-12 overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-cover bg-center mix-blend-screen"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/abstract-data.png)` }}
          />
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {automationAreas.map((area, idx) => (
              <motion.div 
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col"
              >
                <div className="bg-background/80 w-20 h-20 rounded-2xl flex items-center justify-center border border-border/50 shadow-lg mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {area.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {area.features.map(feature => (
                    <li key={feature} className="flex items-center text-sm font-medium">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center glass-panel max-w-3xl mx-auto p-8 rounded-2xl border-border/50"
      >
        <h3 className="text-2xl font-bold mb-4">Have a repetitive process dragging down your team?</h3>
        <p className="text-muted-foreground mb-6">Let's map it out and see how much time we can win back.</p>
        <Button size="lg" className="px-8 shadow-primary/20 shadow-lg">
          Discuss a Workflow
        </Button>
      </motion.div>
    </div>
  );
}
