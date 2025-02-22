interface ViewfinderOverlayProps {
  currentSection: string;
}

export default function ViewfinderOverlay({
  currentSection,
}: ViewfinderOverlayProps) {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div className="absolute left-8 top-8 font-mono text-sm text-cyan-500">
        <div>REC 00:00:00</div>
        <div>ISO AUTO</div>
      </div>
      <div className="absolute right-24 top-8 font-mono text-sm text-purple-500">
        <div>ƒ/2.8</div>
        <div>1/125</div>
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-sm text-cyan-500">
        {currentSection.toUpperCase()}
      </div>
      <div className="absolute bottom-8 right-24 font-mono text-sm text-purple-500">
        AF
      </div>
    </div>
  );
}
