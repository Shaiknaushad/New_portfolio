"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Cpu, Terminal, Layers } from "lucide-react"

const skillCategories = [
  {
    name: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Solidity", level: 80 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 88 },
      { name: "Java", level: 75 },
    ],
  },
  {
    name: "Frameworks",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      { name: "React.js", level: 88 },
      { name: "Streamlit", level: 85 },
      { name: "Web3.js", level: 82 },
      { name: "Scikit-learn", level: 80 },
    ],
  },
  {
    name: "Tools",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 90 },
      { name: "Heroku", level: 78 },
      { name: "Ethereum", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    name: "Concepts",
    icon: <Cpu className="h-6 w-6" />,
    skills: [
      { name: "Backend APIs", level: 87 },
      { name: "DSA", level: 83 },
      { name: "ML", level: 85 },
      { name: "RESTful Systems", level: 88 },
      { name: "Blockchain", level: 82 },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">My technical skills and areas of expertise.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900 border-slate-800 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-md bg-primary/10 text-primary mr-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-400"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-primary rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
