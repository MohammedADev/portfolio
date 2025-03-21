import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "@/lib/schemas/contact-form";

interface ContactFormProps {
  onSubmit: () => void;
  register: UseFormReturn<FormData>["register"];
  errors: UseFormReturn<FormData>["formState"]["errors"];
  isSubmitting: boolean;
}

export default function ContactForm({
  onSubmit,
  register,
  errors,
  isSubmitting,
}: ContactFormProps) {
  return (
    <motion.form
      onSubmit={onSubmit}
      className="border-border bg-card/5 relative overflow-hidden rounded-lg p-3 sm:rounded-xl sm:p-4 md:p-6 lg:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-br opacity-50"></div>
      <div className="relative z-10 space-y-4 sm:space-y-6">
        <div className="space-y-1 sm:space-y-2">
          <label className="text-foreground text-xs font-medium sm:text-sm">
            Name
          </label>
          <Input
            {...register("name")}
            type="text"
            placeholder="Your Name (min 2 characters)"
            className="border-border bg-background/50 focus:border-primary/50"
          />
          {errors.name && (
            <p className="text-xs text-red-500 sm:text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1 sm:space-y-2">
          <label className="text-foreground text-xs font-medium sm:text-sm">
            Email
          </label>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter valid email (min 5 characters)"
            className="border-border bg-background/50 focus:border-primary/50"
          />
          {errors.email && (
            <p className="text-xs text-red-500 sm:text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-1 sm:space-y-2">
          <label className="text-foreground text-xs font-medium sm:text-sm">
            Message
          </label>
          <Textarea
            {...register("message")}
            placeholder="Enter 10-1000 characters"
            className="border-border bg-background/50 focus:border-primary/50 min-h-[150px]"
          />
          {errors.message && (
            <p className="text-xs text-red-500 sm:text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="group relative w-full overflow-hidden text-sm sm:text-base"
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
  );
}
