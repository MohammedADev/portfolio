"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import PageLayout from "@/components/ui/PageLayout";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <PageLayout currentSection="contact">
      <div className="min-h-screen p-8 pt-16 md:p-16 md:pt-24">
        <div className="animate-fade-in mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Contact
              </h1>
              <div className="from-primary to-secondary mt-2 h-1 w-20 bg-gradient-to-r"></div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Let&apos;s discuss your next project or collaboration opportunity.
              I&apos;m always open to new ideas and challenges.
            </p>

            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6"
              >
                <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
                  <Mail className="text-primary h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-foreground text-lg font-medium">Email</h3>
                  <a
                    href="mailto:work@mohammedabdelaziz.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    work@mohammedabdelaziz.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6"
              >
                <div className="bg-accent/10 flex h-16 w-16 items-center justify-center rounded-full">
                  <MapPin className="text-accent h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-foreground text-lg font-medium">
                    Location
                  </h3>
                  <p className="text-muted-foreground">Los Angeles, CA</p>
                </div>
              </motion.div>
            </div>

            <div className="relative mt-12 hidden md:block">
              <div className="border-primary/20 absolute -top-20 -left-20 h-40 w-40 rounded-full border"></div>
              <div className="border-secondary/20 absolute -right-10 -bottom-10 h-20 w-20 rounded-full border"></div>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-border bg-card/5 flex h-full flex-col items-center justify-center rounded-xl border p-8 text-center backdrop-blur-sm"
              >
                <div className="bg-primary/10 mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                  <CheckCircle className="text-primary h-10 w-10" />
                </div>
                <h2 className="text-foreground mb-4 text-2xl font-bold">
                  Message Sent!
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Thank you for reaching out. I&apos;ll get back to you as soon
                  as possible.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-8"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="border-border bg-card/5 relative overflow-hidden rounded-xl border p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-br opacity-50"></div>
                <div className="relative z-10 space-y-6">
                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-medium">
                      Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="border-border bg-background/50 focus:border-primary/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-medium">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="border-border bg-background/50 focus:border-primary/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message"
                      className="border-border bg-background/50 focus:border-primary/50 min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="group relative w-full overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </span>
                    <span className="from-primary via-secondary to-primary group-hover:animate-shimmer absolute inset-0 bg-gradient-to-r bg-[length:200%_100%] opacity-0 transition-opacity group-hover:opacity-50"></span>
                  </Button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
