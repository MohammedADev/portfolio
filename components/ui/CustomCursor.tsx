import * as motion from "motion/react-client"

interface CustomCursorProps {
  position: { x: number; y: number }
}

export default function CustomCursor({ position }: CustomCursorProps) {
  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-full h-full border border-cyan-500 rounded-full" />
      <div className="absolute inset-0 m-auto w-1 h-1 bg-cyan-500 rounded-full" />
    </motion.div>
  )
} 