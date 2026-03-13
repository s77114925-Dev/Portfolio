import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillsData = [
  { category: "Data Processing", name: "Python", level: 95 },
  { category: "Data Processing", name: "SQL", level: 90 },
  { category: "Microsoft Stack", name: "Excel (Advanced)", level: 100 },
  { category: "Microsoft Stack", name: "VBA Macros", level: 90 },
  { category: "Microsoft Stack", name: "Power Query", level: 95 },
  { category: "Microsoft Stack", name: "Power Pivot", level: 85 },
  { category: "Analysis", name: "Data Analysis", level: 90 },
  { category: "Automation", name: "Workflow Automation", level: 95 },
  { category: "Automation", name: "AI/LLM Integration", level: 80 },
];

export default function SkillsSection() {
  const categories = Array.from(new Set(skillsData.map(s => s.category)));

  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
        <p className="text-muted-foreground max-w-2xl text-lg">
          A comprehensive overview of my technical toolkit, focused on extracting value from data and automating the mundane.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {categories.map((category, idx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
              {category}
            </h3>
            <div className="space-y-6">
              {skillsData.filter(s => s.category === category).map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-center"
      >
        <h3 className="text-lg font-semibold mb-6">Tools & Libraries</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Pandas', 'NumPy', 'Selenium', 'BeautifulSoup', 'Git', 'Jupyter', 'PowerBI', 'Tableau', 'Airflow', 'Docker', 'OpenAI API'].map(tool => (
            <Badge key={tool} variant="outline" className="px-4 py-2 text-sm bg-card hover:bg-primary/10 transition-colors cursor-default border-border/50">
              {tool}
            </Badge>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
