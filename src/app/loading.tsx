// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#090a0f] text-zinc-400">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-emerald-500/20 border-t-emerald-400 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
        </div>
      </div>
      <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mt-4">
        Loading System Telemetry…
      </span>
    </div>
  );
}