import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-primary">Touch</span></h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Whether you have an automation project in mind or just want to talk data, I'm always open to discussing new opportunities.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12">
        <motion.div 
          className="lg:col-span-5 space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:hello@alexmorgan.dev" className="text-lg font-medium hover:text-primary transition-colors">hello@alexmorgan.dev</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-lg font-medium">San Francisco, CA (Remote)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border/50">
              <h4 className="text-lg font-medium mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Your Name</label>
                  <Input {...form.register("name")} placeholder="John Doe" />
                  {form.formState.errors.name && <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                  <Input {...form.register("email")} placeholder="john@example.com" />
                  {form.formState.errors.email && <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Subject</label>
                <Input {...form.register("subject")} placeholder="Project Inquiry" />
                {form.formState.errors.subject && <p className="text-sm text-destructive">{form.formState.errors.subject.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <Textarea {...form.register("message")} placeholder="How can I help you?" className="min-h-[150px]" />
                {form.formState.errors.message && <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>}
              </div>
              
              <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting || isSuccess}>
                {isSubmitting ? (
                  "Sending..."
                ) : isSuccess ? (
                  <><CheckCircle2 className="w-5 h-5 mr-2" /> Message Sent</>
                ) : (
                  <><Send className="w-5 h-5 mr-2" /> Send Message</>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
