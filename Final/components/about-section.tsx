"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            I'm a passionate software engineer with a focus on building scalable web and blockchain applications. My
            journey in tech is driven by curiosity and a desire to create meaningful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800 h-full">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <GraduationCap size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <h4 className="font-medium">B.E. in Computer Science</h4>
                    <p className="text-sm text-gray-400">The Oxford College of Engineering</p>
                    <p className="text-sm text-gray-400">2022 - 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800 h-full">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <BookOpen size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Philosophy</h3>
                <p className="text-gray-300">
                  I believe in writing clean, maintainable code and approaching problems with systems thinking. My work
                  is guided by a commitment to continuous learning and innovation in technology.
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Clean Code Advocate
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Systems Thinker
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">•</span>
                    Continuous Learner
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800 h-full">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Award size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Interests</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Backend Systems",
                    "Machine Learning",
                    "Blockchain",
                    "Web Development",
                    "RESTful APIs",
                    "Data Structures",
                  ].map((interest, index) => (
                    <div key={index} className="bg-slate-800 rounded-md px-3 py-2 text-sm text-center">
                      {interest}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
