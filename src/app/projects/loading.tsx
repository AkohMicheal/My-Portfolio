// src/app/projects/loading.tsx
export default function ProjectsLoading() {
  return (
    <div className="tech-grid-bg ambient-glow min-h-screen text-zinc-100 p-8">
      <div className="max-w-7xl mx-auto pt-24">
        {/* Header Skeletons */}
        <div className="h-4 w-28 bg-zinc-800/60 rounded-md animate-pulse mb-3" />
        <div className="h-10 w-64 bg-zinc-800/40 rounded-md animate-pulse mb-4" />
        <div className="h-4 w-96 max-w-full bg-zinc-800/30 rounded-md animate-pulse mb-10" />

        {/* Project cards grid placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl h-80 border border-zinc-800/60 animate-pulse overflow-hidden flex flex-col justify-between p-5"
            >
              <div className="aspect-video bg-zinc-900/80 rounded-xl mb-4" />
              <div className="space-y-2">
                <div className="h-5 w-3/4 bg-zinc-800/60 rounded" />
                <div className="h-3 w-full bg-zinc-800/30 rounded" />
                <div className="h-3 w-5/6 bg-zinc-800/30 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
