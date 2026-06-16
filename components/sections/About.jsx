"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0"
          >
            <div className="absolute inset-0 bg-cyan-500 rounded-2xl transform rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-card rounded-2xl overflow-hidden border border-border flex items-center justify-center">
              <Image 
                loading="lazy"
                src="/me.jpg" 
                alt="Profile Photo" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Hello! I'm Tinnapop
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I am a dedicated Computer Science student with a strong passion for software development. 
              My journey in tech revolves around crafting elegant solutions to complex problems, 
              whether it's building responsive web applications or exploring the capabilities of AI and machine learning.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <GraduationCap className="w-5 h-5 mr-3 text-cyan-400" />
                <span>Rangsit University (มหาวิทยาลัยรังสิต) - 4th Year Student</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                <span>Computer Science (วิทยาการคอมพิวเตอร์)</span>
              </div>
            </div>

            <a
              href="/Resume.pdf"
              download="Tinnapop_Sinsap_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg text-foreground bg-muted hover:bg-muted/80 transition-colors border border-border"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
