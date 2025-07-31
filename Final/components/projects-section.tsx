"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Crop Yield Predictor",
    description:
      "Machine learning model for crop forecasting using soil and environmental data. Deployed via Streamlit for easy access by farmers and agricultural experts.",
    image: "/images/project1.jpeg",
    tags: ["Python", "Machine Learning", "Streamlit", "Scikit-learn"],
    liveLink: "https://cropyieldprediction-naushad.streamlit.app/",
    githubLink: "https://github.com/Shaiknaushad/Crop_Yield_Prediction",
  },
  {
    id: 2,
    title: "Blockchain Land Registry",
    description:
      "Ethereum-based registry using smart contracts. Enabled secure land ownership transfer with immutable records and transparent transaction history.",
    image: "/images/project2.jpeg",
    tags: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
    liveLink: "https://github.com/Shaiknaushad/Land-Registry",
    githubLink: "https://github.com/Shaiknaushad/Land-Registry",
  },
  {
    id: 3,
    title: "Farmer E-Commerce Site",
    description:
      "Full-stack responsive platform to connect farmers and buyers. Features product listings, user authentication, and secure payment processing.",
    image: "/images/project3.png",
    tags: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    liveLink: "https://shaiknaushad.github.io/Mini-Project/",
    githubLink: "https://github.com/Shaiknaushad/Mini-Project",
  },
]

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-slate-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="h-full"
            >
              <Card className="bg-slate-900 border-slate-800 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>

                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="border-t border-slate-800 pt-4 flex justify-between">
                  <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
            <a href="https://github.com/Shaiknaushad" target="_blank" rel="noopener noreferrer">
              View More on GitHub
              <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
