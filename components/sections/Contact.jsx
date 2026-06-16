"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thanks for your message! This is a demo form.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm currently looking for new opportunities, whether it's a full-time role, 
              an internship, or an exciting freelance project.
            </p>

            <div className="space-y-6">
              <a href="mailto:tinnapop122@gmail.com" className="flex items-center text-muted-foreground hover:text-cyan-500 transition-colors group">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4 group-hover:bg-cyan-500/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>tinnapop122@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/tinnapop-sinsap-b824ba415/" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-cyan-500 transition-colors group">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4 group-hover:bg-cyan-500/10 transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/AofFy-122" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-cyan-500 transition-colors group">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4 group-hover:bg-cyan-500/10 transition-colors">
                  <Code2 className="w-5 h-5" />
                </div>
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-border">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-foreground placeholder-muted-foreground transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-foreground placeholder-muted-foreground transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-foreground placeholder-muted-foreground transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-cyan-600 hover:bg-cyan-700 transition-colors shadow-[0_0_15px_rgba(8,145,178,0.3)]"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
