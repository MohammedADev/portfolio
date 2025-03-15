import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSuccessMessageProps {
  onReset: () => void;
}

export default function ContactSuccessMessage({
  onReset,
}: ContactSuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-border bg-card/5 flex h-full flex-col items-center justify-center rounded-lg p-4 text-center backdrop-blur-sm sm:rounded-xl sm:p-6 md:p-8"
    >
      <div className="bg-primary/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full sm:mb-6 sm:h-20 sm:w-20">
        <CheckCircle className="text-primary h-8 w-8 sm:h-10 sm:w-10" />
      </div>
      <h2 className="text-foreground mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
        Message Sent!
      </h2>
      <p className="text-muted-foreground max-w-md text-sm sm:text-base">
        Thank you for reaching out. I&apos;ll get back to you as soon as
        possible.
      </p>
      <Button onClick={onReset} variant="outline" className="mt-6 sm:mt-8">
        Send Another Message
      </Button>
    </motion.div>
  );
}
