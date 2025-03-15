import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

interface ContactInfoCardProps {
  icon: "Mail" | "MapPin";
  title: string;
  content: string;
  href?: string;
}

export default function ContactInfoCard({
  icon,
  title,
  content,
  href,
}: ContactInfoCardProps) {
  const Icon = icon === "Mail" ? Mail : MapPin;
  const className = icon === "Mail" ? "text-primary" : "text-accent";
  const bgClassName = icon === "Mail" ? "bg-primary/10" : "bg-accent/10";

  const contentElement = href ? (
    <Link
      href={href}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {content}
    </Link>
  ) : (
    <p className="text-muted-foreground">{content}</p>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6"
    >
      <div
        className={`${bgClassName} flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16`}
      >
        <Icon className={`${className} h-5 w-5 sm:h-7 sm:w-7`} />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-foreground text-base font-medium sm:text-lg">
          {title}
        </h3>
        {contentElement}
      </div>
    </motion.div>
  );
}
