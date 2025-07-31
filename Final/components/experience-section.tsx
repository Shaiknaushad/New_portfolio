"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            My professional journey and work experience in the tech industry.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800 mb-8 overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">SDE Intern</h3>
                    <p className="text-primary">Octanet Technologies</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>Jun 2024 - Jul 2024</span>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p>
                    Contributed to production-grade features in a distributed development team. Applied agile practices
                    and Git workflows for rapid iteration.
                  </p>

                  <ul className="space-y-2 pl-5 list-disc">
                    <li>Collaborated with senior developers to implement new features</li>
                    <li>Participated in code reviews and agile development processes</li>
                    <li>Utilized Git for version control and collaborative development</li>
                    <li>Gained experience in production-level software development</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Git", "Agile", "Team Collaboration", "Software Development"].map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
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
            className="text-center"
          >
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-slate-900 border border-slate-800 text-primary">
              <Briefcase size={24} />
            </div>
            <p className="mt-4 text-gray-400">Open to new opportunities and collaborations</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
