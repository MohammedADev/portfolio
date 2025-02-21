interface ViewfinderOverlayProps {
  currentSection: string
}

export default function ViewfinderOverlay({ currentSection }: ViewfinderOverlayProps) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-8 left-8 text-cyan-500 text-sm font-mono">
        <div>REC 00:00:00</div>
        <div>ISO AUTO</div>
      </div>
      <div className="absolute top-8 right-24 text-purple-500 text-sm font-mono">
        <div>ƒ/2.8</div>
        <div>1/125</div>
      </div>
      <div className="absolute bottom-8 left-8 text-cyan-500 text-sm font-mono">
        {currentSection.toUpperCase()}
      </div>
      <div className="absolute bottom-8 right-24 text-purple-500 text-sm font-mono">
        AF
      </div>
    </div>
  )
} 