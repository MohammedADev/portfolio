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
      className="border-border bg-card/5 flex h-full flex-col items-center justify-center rounded-xl border p-8 text-center backdrop-blur-sm"
    >
      <div className="bg-primary/10 mb-6 flex h-20 w-20 items-center justify-center rounded-full">
        <CheckCircle className="text-primary h-10 w-10" />
      </div>
      <h2 className="text-foreground mb-4 text-2xl font-bold">Message Sent!</h2>
      <p className="text-muted-foreground max-w-md">
        Thank you for reaching out. I&apos;ll get back to you as soon as
        possible.
      </p>
      <Button onClick={onReset} variant="outline" className="mt-8">
        Send Another Message
      </Button>
    </motion.div>
  );
}
