import Link from "next/link"
import { ArrowLeft, Github, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This is a mock function to simulate fetching project data
// In a real application, you would fetch this from a database or API
function getProjectData(slug: string) {
  const projects = {
    ecommerce: {
      title: "Crop Yield Predictor",
      description: "Machine learning model for crop forecasting using soil and environmental data.",
      longDescription:
        "This machine learning model was built to help farmers predict crop yields based on soil and environmental data. It was deployed via Streamlit for easy access by farmers and agricultural experts.",
      tags: ["Python", "Machine Learning", "Streamlit", "Scikit-learn"],
      image: "/images/project1.jpeg",
      liveUrl: "https://cropyieldprediction-naushad.streamlit.app/",
      githubUrl: "https://github.com/Shaiknaushad",
      features: [
        "Soil data analysis",
        "Environmental factor consideration",
        "Accurate yield predictions",
        "User-friendly interface",
        "Data visualization",
        "Export functionality",
      ],
      technologies: [
        "Python for backend logic",
        "Scikit-learn for machine learning",
        "Streamlit for deployment",
        "Pandas for data manipulation",
        "Matplotlib for data visualization",
      ],
    },
    "task-app": {
      title: "Blockchain Land Registry",
      description: "Ethereum-based registry using smart contracts for secure land ownership transfer.",
      longDescription:
        "This blockchain-based land registry system uses Ethereum smart contracts to enable secure land ownership transfer with immutable records and transparent transaction history.",
      tags: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
      image: "/images/project2.jpeg",
      liveUrl: "#",
      githubUrl: "https://github.com/Shaiknaushad/Land-Registry",
      features: [
        "Secure land ownership records",
        "Transparent transaction history",
        "Smart contract automation",
        "Immutable record keeping",
        "Decentralized verification",
        "User-friendly interface",
      ],
      technologies: [
        "Solidity for smart contracts",
        "Ethereum blockchain",
        "Web3.js for frontend integration",
        "Truffle for development",
        "Metamask for wallet integration",
      ],
    },
    portfolio: {
      title: "Farmer E-Commerce Site",
      description: "Full-stack responsive platform to connect farmers and buyers.",
      longDescription:
        "This full-stack e-commerce platform was built to connect farmers directly with buyers, eliminating middlemen and ensuring fair prices. It features product listings, user authentication, and secure payment processing.",
      tags: ["JavaScript", "HTML", "CSS", "Responsive Design"],
      image: "/images/project3.png",
      liveUrl: "https://shaiknaushad.github.io/Mini-Project/",
      githubUrl: "https://github.com/Shaiknaushad/Mini-Project",
      features: [
        "Responsive design",
        "Product listings",
        "User authentication",
        "Secure payment processing",
        "Farmer profiles",
        "Order tracking",
      ],
      technologies: [
        "JavaScript for frontend logic",
        "HTML for structure",
        "CSS for styling",
        "Responsive design principles",
        "GitHub Pages for deployment",
      ],
    },
  }

  return projects[slug as keyof typeof projects]
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  if (!project) {
    return (
      <div className="container py-12 space-y-8 text-center">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-12 space-y-8">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to projects</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{project.title}</h1>
      </div>

      <div className="aspect-video overflow-hidden rounded-lg border">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover w-full h-full" />
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Globe className="mr-2 h-4 w-4" /> Live Demo
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> View Code
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Technologies Used</h2>
          <ul className="space-y-2">
            {project.technologies.map((tech, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8">
        <Button asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </div>
  )
}
