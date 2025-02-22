interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 animate-pulse-scale rounded-full border-2 border-purple-500" />
        <div className="duration-1500 absolute inset-0 m-auto h-16 w-16 animate-spin rounded-full border border-cyan-500" />
        <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-cyan-500" />
      </div>
    </div>
  );
}
