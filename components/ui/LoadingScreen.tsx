
interface LoadingScreenProps {
  isLoading: boolean
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-fade-in">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-2 border-purple-500 rounded-full animate-pulse-scale" />
        <div className="absolute inset-0 m-auto w-16 h-16 border border-cyan-500 rounded-full animate-spin duration-1500" />
        <div className="absolute inset-0 m-auto w-2 h-2 bg-cyan-500 rounded-full" />
      </div>
    </div>
  )
} 