interface ViewfinderOverlayProps {
  currentSection: string;
}

export default function ViewfinderOverlay({
  currentSection,
}: ViewfinderOverlayProps) {
  return (
    <div className="pointer-events-none fixed inset-0">
      <div className="absolute left-8 top-8 font-mono text-sm text-primary">
        <div>REC 00:00:00</div>
        <div>ISO AUTO</div>
      </div>
      <div className="absolute right-24 top-8 font-mono text-sm text-secondary">
        <div>ƒ/2.8</div>
        <div>1/125</div>
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-sm text-primary">
        {currentSection.toUpperCase()}
      </div>
      <div className="absolute bottom-8 right-24 font-mono text-sm text-secondary">
        AF
      </div>
    </div>
  );
}
