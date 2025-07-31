"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, AlertCircle, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", message: "" })

        toast({
          title: "✅ Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
          duration: 6000,
        })

        // Reset success state after 8 seconds
        setTimeout(() => setIsSubmitted(false), 8000)
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)

      toast({
        title: "❌ Failed to send message",
        description: error instanceof Error ? error.message : "Please try again or contact me directly.",
        duration: 8000,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="pt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full animate-pulse"></div>
              </div>
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto relative z-10" />
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-green-400">Message Sent Successfully! 🎉</h3>
            <p className="text-gray-300 mb-2">
              Thank you for reaching out! Your message has been delivered to my inbox.
            </p>
            <p className="text-sm text-gray-400 mb-6">
              I typically respond within 24 hours. Looking forward to connecting with you!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="border-slate-700 hover:bg-slate-800"
              >
                Send Another Message
              </Button>
              <Button variant="ghost" asChild className="text-primary hover:text-primary/80 hover:bg-primary/10">
                <a href="mailto:t.shaiknaushad@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Directly
                </a>
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardContent className="pt-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Send a Message</h3>
          <p className="text-gray-400 text-sm">Fill out the form below and I'll get back to you as soon as possible.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="bg-slate-800 border-slate-700 focus-visible:ring-primary focus-visible:border-primary"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="bg-slate-800 border-slate-700 focus-visible:ring-primary focus-visible:border-primary"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Your Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Hi Naushad, I'd like to discuss..."
              required
              className="bg-slate-800 border-slate-700 focus-visible:ring-primary focus-visible:border-primary min-h-[120px] resize-none"
              disabled={isSubmitting}
            />
            <p className="text-xs text-gray-500">{formState.message.length}/500 characters</p>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 transition-all duration-200"
            disabled={isSubmitting || !formState.name.trim() || !formState.email.trim() || !formState.message.trim()}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>

        {/* Alternative Contact Info */}
        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-blue-400 mb-1">Prefer direct contact?</p>
              <p className="text-gray-300 mb-2">You can also reach me directly at:</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="mailto:t.shaiknaushad@gmail.com"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="mr-1 h-3 w-3" />
                  t.shaiknaushad@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
