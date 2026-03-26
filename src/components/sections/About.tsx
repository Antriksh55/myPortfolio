"use client";

import Image from "next/image";
import { Wrench } from "lucide-react";
import { personalInfo } from "~/data/personal";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";

const stats = [
  { value: "3rd Year", label: "B.Tech CSE Student" },
  { value: "5+", label: "Projects Built" },
  { value: "1", label: "Freelance Client" },
];

export function About() {
  return (
    <AnimatedSection id="about">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Profile photo */}
          <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 blur-xl opacity-50 z-0" />
            <div className="relative z-10 w-full h-full">
              <Image
                src="/profile/photosrb.jpeg"
                alt="Saurabh Kumar"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div>
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              {personalInfo.bio}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-lg p-4 text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
                >
                  <p className="text-2xl font-bold text-[#fafafa]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#a1a1aa]/60 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
              <a
                href="#projects"
                className="glass rounded-lg p-4 text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] group/card flex flex-col items-center justify-center"
              >
                <Wrench className="w-6 h-6 text-red-400 group-hover/card:rotate-12 transition-transform duration-300" />
                <p className="text-sm text-[#a1a1aa]/60 mt-2">
                  Building Useful Tools
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
