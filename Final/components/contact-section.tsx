"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  const contactLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Shaiknaushad",
      username: "Shaiknaushad",
      description: "Check out my code repositories",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/naushad-shaik-a6916225a",
      username: "naushad-shaik-a6916225a",
      description: "Connect with me professionally",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:t.shaiknaushad@gmail.com",
      username: "t.shaiknaushad@gmail.com",
      description: "Send me a direct email",
    },
    {
      name: "Phone",
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+918142590815",
      username: "+91 8142590815",
      description: "Call me directly",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Have a question or want to work together? Feel free to reach out through any of these channels!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900 border-slate-800 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1">{link.name}</h3>
                        <p className="text-primary text-sm mb-1 break-all">{link.username}</p>
                        <p className="text-gray-400 text-sm">{link.description}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-sm text-gray-400">Bangalore, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Availability</h4>
                      <p className="text-sm text-gray-400">Open to opportunities</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-center text-gray-300">
                    <span className="text-primary font-medium">Let's collaborate!</span> I'm always interested in
                    discussing new opportunities, innovative projects, and ways to solve complex problems together.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
