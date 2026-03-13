import { motion } from "framer-motion";
import { Terminal, Database, Lightbulb } from "lucide-react";

export default function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-square rounded-3xl overflow-hidden border-2 border-border relative group">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src={`${import.meta.env.BASE_URL}images/avatar.png`} 
              alt="Alex Morgan" 
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 blur-3xl rounded-full -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full -z-10" />
        </motion.div>

        <motion.div 
          className="lg:col-span-7 space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="text-lg text-muted-foreground leading-relaxed">
            I am an <strong className="text-foreground">Operations and Data Analytics professional</strong> with experience in healthcare operations, MIS reporting, and workflow optimization. I work with operational data to track KPIs, prepare reports, and support decision-making through structured analysis.
          </motion.p>
          
          <motion.p variants={item} className="text-lg text-muted-foreground leading-relaxed">
            My focus is on improving reporting accuracy, optimizing processes, and turning operational data into meaningful insights using Excel and analytics tools.
          </motion.p>

          <motion.div variants={item} className="grid sm:grid-cols-2 gap-6 pt-6">
            <div className="glass-panel p-6 rounded-2xl border border-border/50">
              <Database className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2 text-foreground">MIS Reporting &amp; Data Analysis</h3>
              <p className="text-sm text-muted-foreground">Working with operational data to track KPIs, validate datasets, and generate structured MIS reports that support business and operational decision-making.</p>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl border border-border/50">
              <Terminal className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Operational Process Optimization</h3>
              <p className="text-sm text-muted-foreground">Improving operational workflows by organizing data, streamlining reporting processes, and ensuring accuracy across systems and cross-functional teams.</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="pt-6 border-t border-border/50">
            <h3 className="flex items-center font-bold text-xl mb-4">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
              Work Philosophy
            </h3>
            <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4 py-2">
              "Operational efficiency begins with accurate data, structured processes, and meaningful insights."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
