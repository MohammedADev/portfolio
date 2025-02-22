import * as motion from "motion/react-client";

interface CustomCursorProps {
  position: { x: number; y: number };
}

export default function CustomCursor({ position }: CustomCursorProps) {
  return (
    <motion.div
      className="pointer-events-none fixed z-50 h-8 w-8 mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="h-full w-full rounded-full border border-primary" />
      <div className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-primary" />
    </motion.div>
  );
}
