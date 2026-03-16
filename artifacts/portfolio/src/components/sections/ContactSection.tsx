import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Send, Download, MessageCircle, Loader2 } from "lucide-react";

const WHATSAPP_NUMBER = "919121511764";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [location, setLocation] = useState<string>("Detecting location...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location unavailable");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`,
            { headers: { "Accept-Language": "en" } }
          );
          const data = await res.json();
          const city =
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.county ||
            "";
          const country = data.address?.country || "";
          setLocation(city && country ? `${city}, ${country}` : country || "Location unavailable");
        } catch {
          setLocation("Location unavailable");
        }
      },
      () => setLocation("Location unavailable")
    );
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    const msg =
      `*New Portfolio Inquiry*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Email:* ${data.email}\n` +
      `*Subject:* ${data.subject}\n` +
      `*Message:* ${data.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  };

  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Whether you have an automation project in mind or just want to talk data, I'm always open
          to discussing new opportunities.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* ── Left panel ── */}
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
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:yaswanthsailalam02@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Yaswanth%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      yaswanthsailalam02@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-lg font-medium flex items-center gap-2">
                      {location === "Detecting location..." ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                          <span className="text-muted-foreground text-base">Detecting…</span>
                        </>
                      ) : (
                        location
                      )}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mr-4 shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-green-400 hover:text-green-300 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border/50 space-y-6">
              {/* Social icons */}
              <div>
                <h4 className="text-lg font-medium mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/yaswanth-sai-lalam-4969b236a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:yaswanthsailalam02@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Yaswanth%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Download Resume */}
              <div>
                <h4 className="text-lg font-medium mb-3">My Resume</h4>
                <a
                  href="#"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:brightness-110 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
                    boxShadow: "0 4px 14px rgba(0,114,255,0.3)",
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right panel — form ── */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in the form and it will open WhatsApp with your message pre-filled — ready to send.
            </p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Your Name</label>
                  <Input {...form.register("name")} placeholder="John Doe" />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                  <Input {...form.register("email")} placeholder="john@example.com" />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Subject</label>
                <Input {...form.register("subject")} placeholder="Project Inquiry" />
                {form.formState.errors.subject && (
                  <p className="text-sm text-destructive">{form.formState.errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <Textarea
                  {...form.register("message")}
                  placeholder="How can I help you?"
                  className="min-h-[150px]"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg gap-2 bg-green-600 hover:bg-green-500 text-white"
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
