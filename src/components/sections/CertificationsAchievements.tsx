"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "~/lib/motion";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    year: "2024",
  },
];

const achievements = [
  {
    title: "BinaryBlitz Hackathon 2024 – Round 3 Qualifier",
    description:
      "Attended the BinaryBlitz Hackathon 2024 and progressed to Round 3 by solving multiple challenging problem statements under time constraints.",
    year: "2024",
  },
];

export function CertificationsAchievements() {
  return (
    <AnimatedSection id="certifications">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Certifications & Achievements" subtitle="Milestones along the way" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-red-400" />
              <h3 className="text-base font-semibold text-[#fafafa]">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="glass glass-hover rounded-xl p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]"
                >
                  <p className="text-sm font-medium text-[#fafafa] leading-snug">{cert.title}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-red-400 font-medium">{cert.issuer}</span>
                    <span className="text-xs text-[#a1a1aa]/60 font-mono">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-red-400" />
              <h3 className="text-base font-semibold text-[#fafafa]">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="glass glass-hover rounded-xl p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]"
                >
                  <p className="text-sm font-medium text-[#fafafa] leading-snug">{ach.title}</p>
                  <p className="text-sm text-[#a1a1aa] mt-2 leading-relaxed">{ach.description}</p>
                  <span className="text-xs text-[#a1a1aa]/60 font-mono mt-2 block">{ach.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
