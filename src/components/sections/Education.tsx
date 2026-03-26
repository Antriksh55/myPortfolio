"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "~/lib/motion";

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Lovely Professional University (LPU)",
    period: "2023 – 2027",
    score: "CGPA: 7.70",
  },
  {
    degree: "12th — Science (PCM)",
    institution: "DAV Public School, Muzaffarpur",
    period: "2022",
    score: "80%",
  },
  {
    degree: "10th",
    institution: "DAV Public School, Muzaffarpur",
    period: "2020",
    score: "92%",
  },
];

export function Education() {
  return (
    <AnimatedSection id="education">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Education" subtitle="My academic background" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-6"
        >
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] timeline-line" />

          {education.map((edu, i) => (
            <motion.div key={i} variants={staggerItem} className="relative pl-10">
              <div className="absolute left-0 top-3 h-[16px] w-[16px] rounded-full border-2 border-red-500 bg-[#0c0a08] timeline-dot" />
              <div className="glass glass-hover rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-base font-semibold text-[#fafafa]">{edu.degree}</h3>
                  <span className="text-sm text-[#a1a1aa]/60 font-mono">{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <GraduationCap className="w-4 h-4 text-red-400 shrink-0" />
                  <p className="text-sm font-medium text-red-400">{edu.institution}</p>
                </div>
                <p className="mt-2 text-sm text-[#a1a1aa] font-mono">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
