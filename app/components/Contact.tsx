"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // For demonstration, we'll just set it to success
    // In a real application, you'd handle the form submission here
    setFormStatus("success")
  }

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24" id="contact">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Interested in collaboration or have a question? Feel free to reach out!
          </p>
        </div>
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div className="mt-1">
                <Input type="text" name="first-name" id="first-name" autoComplete="given-name" required />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div className="mt-1">
                <Input type="text" name="last-name" id="last-name" autoComplete="family-name" required />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <Textarea id="message" name="message" rows={4} required />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="w-full" disabled={formStatus === "submitting"}>
                {formStatus === "submitting" ? "Sending..." : "Send"}
              </Button>
            </div>
          </form>
          {formStatus === "success" && (
            <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md">
              Thank you for your message. We'll get back to you soon!
            </div>
          )}
          {formStatus === "error" && (
            <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-md">
              An error occurred. Please try again later.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

