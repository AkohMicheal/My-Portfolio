// src/components/hero/HeroImage.tsx
'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCpu, FiActivity, FiServer, FiLayers, FiPlay, FiCheckCircle } from "react-icons/fi";

const HeroImage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ai" | "cloud" | "lms">("ai");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(98.4);
  const [ping, setPing] = useState(18);

  // Subtle ping jitter to simulate real telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setPing(16 + Math.floor(Math.random() * 8));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const triggerScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      if (elapsed > 1200) {
        clearInterval(interval);
        setScanProgress(98.7);
        setIsScanning(false);
      } else {
        setScanProgress(Math.min(98.7, Math.floor((elapsed / 1200) * 98.7)));
      }
    }, 50);
  };

  return (
    <div className="w-full relative">
      {/* Ambient background glow behind the console */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-emerald-500/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

      {/* Main Console Box */}
      <div className="relative glass-panel rounded-2xl bg-zinc-950/90 border border-zinc-800/90 shadow-2xl overflow-hidden">
        {/* Console Header Bar */}
        <div className="px-4 py-3 bg-zinc-900/70 border-b border-zinc-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-zinc-300">
              ENGINEERING TELEMETRY
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px] text-zinc-400">
            <span className="hidden sm:inline px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300">
              AWS: US-EAST-1
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {ping}ms
            </span>
          </div>
        </div>

        {/* System Tab Selector */}
        <div className="grid grid-cols-3 bg-zinc-900/40 border-b border-zinc-800/60 p-1 text-xs font-mono">
          <button
            onClick={() => setActiveTab("ai")}
            className={`py-2 px-2 rounded-lg text-center transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "ai"
                ? "bg-zinc-800 text-emerald-400 font-semibold shadow-sm border border-zinc-700/60"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <FiCpu className="text-xs" />
            <span>AI Vision</span>
          </button>

          <button
            onClick={() => setActiveTab("cloud")}
            className={`py-2 px-2 rounded-lg text-center transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "cloud"
                ? "bg-zinc-800 text-emerald-400 font-semibold shadow-sm border border-zinc-700/60"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <FiServer className="text-xs" />
            <span>Cloud Infra</span>
          </button>

          <button
            onClick={() => setActiveTab("lms")}
            className={`py-2 px-2 rounded-lg text-center transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "lms"
                ? "bg-zinc-800 text-emerald-400 font-semibold shadow-sm border border-zinc-700/60"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <FiActivity className="text-xs" />
            <span>LMS Gateway</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="p-4 sm:p-5 min-h-[310px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeTab === "ai" && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Pipeline Title */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-400 flex items-center gap-1.5">
                    <FiLayers className="text-emerald-400" />
                    Dual-Stream CNN + DCT Pipeline
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[11px] font-semibold border border-emerald-500/20">
                    B.Tech Thesis
                  </span>
                </div>

                {/* Stream Architecture Representation */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {/* Stream A */}
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                      Stream A // Spatial
                    </div>
                    <div className="text-xs font-semibold text-zinc-200">MTCNN Alignment</div>
                    <div className="text-[11px] text-zinc-400 font-mono mt-1">
                      224×224×3 RGB Tensor
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-full animate-pulse" />
                    </div>
                  </div>

                  {/* Stream B */}
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                      Stream B // Frequency
                    </div>
                    <div className="text-xs font-semibold text-zinc-200">DCT Transform</div>
                    <div className="text-[11px] text-zinc-400 font-mono mt-1">
                      Artifact Saliency Map
                    </div>
                    <div className="mt-2 flex items-end gap-1 h-3">
                      {[40, 70, 45, 90, 60, 85, 30, 75].map((val, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-emerald-400/70 rounded-xs"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Model Fusion Confidence Display */}
                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-emerald-400 uppercase">
                      XAI Inference Result
                    </div>
                    <div className="text-sm font-bold text-zinc-100 flex items-center gap-1.5 mt-0.5">
                      <FiCheckCircle className="text-emerald-400" />
                      Authentic Verification
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xl font-extrabold text-emerald-400">
                      {isScanning ? `${scanProgress}%` : "98.4%"}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400">
                      Confidence
                    </div>
                  </div>
                </div>

                {/* Scan Action Button */}
                <button
                  onClick={triggerScan}
                  disabled={isScanning}
                  className="w-full py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700/80 text-zinc-200 text-xs font-mono font-medium border border-zinc-700 transition-all flex items-center justify-center gap-2 hover:border-emerald-500/40 disabled:opacity-60"
                >
                  <FiPlay className={`text-xs ${isScanning ? "animate-spin" : "text-emerald-400"}`} />
                  <span>{isScanning ? "Evaluating Tensors…" : "Run Live Verification Probe"}</span>
                </button>
              </motion.div>
            )}

            {activeTab === "cloud" && (
              <motion.div
                key="cloud"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-400 flex items-center gap-1.5">
                    <FiServer className="text-emerald-400" />
                    AWS Cloud Deployment Stack
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[11px] font-semibold border border-emerald-500/20">
                    High-Availability
                  </span>
                </div>

                {/* Nodes Display */}
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-300">AWS EC2 (Compute Cluster)</span>
                    <span className="text-emerald-400 text-[11px]">ACTIVE · 0.2% LOAD</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-300">AWS RDS (PostgreSQL/MySQL)</span>
                    <span className="text-emerald-400 text-[11px]">REPLICATED · FAST</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-300">Docker Container Pipeline</span>
                    <span className="text-emerald-400 text-[11px]">CI/CD AUTOMATED</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">Uptime SLA Guaranteed:</span>
                  <span className="text-sm font-mono font-bold text-emerald-400">99.98%</span>
                </div>
              </motion.div>
            )}

            {activeTab === "lms" && (
              <motion.div
                key="lms"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-400 flex items-center gap-1.5">
                    <FiActivity className="text-emerald-400" />
                    Lampnet Institute Engine
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[11px] font-semibold border border-emerald-500/20">
                    Production LMS
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Protocol:</span>
                    <span className="text-zinc-200">WebSocket / Socket.io</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Active Gateway:</span>
                    <span className="text-emerald-400">institute.lampnets.com</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Response Latency:</span>
                    <span className="text-emerald-400">32ms (P95)</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Student Admin Sync:</span>
                    <span className="text-zinc-200">Instant</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-300">Concurrent Cohort Capacity:</span>
                  <span className="text-sm font-mono font-bold text-emerald-400">500+ Students</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Console Footer */}
        <div className="px-4 py-2.5 bg-zinc-900/80 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span>ARCH: NEXT.JS 15 + FASTAPI</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            STANDALONE NODE
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
