"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-6">
            Tinnapop Sinsap
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mt-4 max-w-2xl text-xl md:text-2xl text-muted-foreground mx-auto font-medium">
            Computer Science Student <span className="text-cyan-500">|</span> Developer
          </p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground mx-auto">
            Passionate about building scalable web applications and exploring the world of artificial intelligence. Currently in my 4th year at Rangsit University.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-cyan-600 hover:bg-cyan-700 transition-colors shadow-[0_0_15px_rgba(8,145,178,0.5)]"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-foreground border border-border hover:bg-muted transition-colors backdrop-blur-sm"
          >
            Contact Me
            <Mail className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
