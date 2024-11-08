/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BotMessageSquare, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function LandingPage() {
  // State management
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const { toast } = useToast();

  // Toggle contact form visibility
  const toggleContactForm = () => setContactFormVisible((prev) => !prev);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit form data to Web3Forms
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    // Format form data for API
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        // Reset form and show success toast
        setFormData({ name: "", email: "", message: "" });
        toast({ title: "Email Sent", description: "Your message has been sent successfully!" });
        toggleContactForm();
      } else {
        // Show error toast if sending failed
        toast({ variant: "destructive", title: "Error", description: "Failed to send email. Try again." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {/* SEO and Open Graph meta tags */}
      <Head>
        <title>SimuGen - Realistic Healthcare Simulation Scenarios</title>
        <meta
          name="description"
          content="SimuGen helps healthcare educators, students, and professionals generate realistic scenarios based on UK guidelines."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SimuGen - Realistic Healthcare Simulation Scenarios" />
        <meta property="og:description" content="Generate healthcare scenarios with ease using SimuGen." />
        <meta property="og:image" content="/screenshot.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Header with logo and CTA button */}
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
          <img src="/logo.png" alt="SimuGen Logo" className="h-10 w-10" />
          <Link href="https://chatgpt.com/g/g-eTexeFjiJ-simugen">
            <Button className="ml-auto">
              <BotMessageSquare /> Try SimuGen
            </Button>
          </Link>
        </header>

        {/* Main content area with introduction and action buttons */}
        <main className="flex-1 flex items-center justify-center">
          <section className="w-full max-w-[1200px] px-4 md:px-8 lg:px-12 py-12 md:py-16 flex justify-center items-center">
            <div className="text-center space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Realistic Healthcare Scenarios, Effortlessly
              </h1>
              <p className="max-w-[800px] text-muted-foreground mx-auto md:text-xl">
                SimuGen leverages ChatGPT to help healthcare educators, students, and professionals generate realistic
                scenarios quickly, adhering to current UK guidelines.
              </p>
              <div className="flex justify-center items-center space-x-4">
                <Link href="https://chatgpt.com/g/g-eTexeFjiJ-simugen">
                  <Button>
                    <BotMessageSquare /> Try SimuGen Now
                  </Button>
                </Link>
                <Button onClick={toggleContactForm}>
                  <Mail /> Contact Us
                </Button>
              </div>
              <img
                src="/screenshot.png"
                alt="SimuGen interface screenshot showing realistic healthcare scenario generation"
                className="w-full h-auto max-w-[80%] object-cover rounded-lg mx-auto mt-4"
              />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full h-14 flex items-center justify-center border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 SimuGen. All rights reserved.</p>
        </footer>

        {/* Contact Form Modal */}
        {isContactFormVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full border border-gray-300 p-2 rounded"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button" onClick={toggleContactForm} variant="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </div>
                {statusMessage && <p className="mt-4 text-sm">{statusMessage}</p>}
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
