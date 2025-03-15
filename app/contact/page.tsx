"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import ContactInfoCard from "@/components/ContactInfoCard";
import ContactSuccessMessage from "@/components/ContactSuccessMessage";
import ContactForm from "@/components/ContactForm";
import PageLayout from "@/components/ui/PageLayout";
import { FormData, formSchema } from "@/lib/schemas/contact-form";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout currentSection="contact">
      <div className="min-h-screen p-4 pt-12 sm:p-8 md:p-16 md:pt-24">
        <div className="animate-fade-in mx-auto grid max-w-6xl gap-8 sm:gap-16 md:grid-cols-2">
          <div className="space-y-4 sm:space-y-8">
            <div>
              <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                Contact
              </h1>
              <div className="from-primary to-secondary mt-2 h-1 w-20 bg-gradient-to-r"></div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Let&apos;s discuss your next project or collaboration opportunity.
              I&apos;m always open to new ideas and challenges.
            </p>

            <div className="space-y-8">
              <ContactInfoCard
                icon="Mail"
                title="Email"
                content="work@mohammedabdelaziz.com"
                href="mailto:work@mohammedabdelaziz.com"
              />
              <ContactInfoCard
                icon="MapPin"
                title="Location"
                content="Los Angeles, CA"
              />
            </div>

            <div className="relative mt-12 hidden md:block">
              <div className="border-primary/20 absolute -top-20 -left-20 h-40 w-40 rounded-full border"></div>
              <div className="border-secondary/20 absolute -right-10 -bottom-10 h-20 w-20 rounded-full border"></div>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <ContactSuccessMessage onReset={() => setIsSubmitted(false)} />
            ) : (
              <ContactForm
                onSubmit={handleSubmit(onSubmit)}
                register={register}
                errors={errors}
                isSubmitting={isSubmitting}
              />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
