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
      className="flex items-center gap-6"
    >
      <div
        className={`${bgClassName} flex h-16 w-16 items-center justify-center rounded-full`}
      >
        <Icon className={`${className} h-7 w-7`} />
      </div>
      <div>
        <h3 className="text-foreground text-lg font-medium">{title}</h3>
        {contentElement}
      </div>
    </motion.div>
  );
}
