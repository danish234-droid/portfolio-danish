"use client";

import React from "react";
import {
  Kanban,
  Gamepad2,
  CreditCard,
  Coffee,
  Puzzle,
  CheckCircle2,
  DollarSign,
  Layers,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Terminal,
} from "lucide-react";

interface ProjectPreviewProps {
  projectId: string;
  className?: string;
}

export function ProjectPreview({ projectId, className = "" }: ProjectPreviewProps) {
  switch (projectId) {
    case "workspace-manager":
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-slate-900 via-[#0a1224] to-[#040814] flex flex-col justify-between p-4 overflow-hidden select-none ${className}`}>
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/15 blur-2xl rounded-full" />

          {/* Mini Kanban Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5 bg-slate-800/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/60 text-[11px] font-mono text-cyan-400">
              <Kanban className="w-3.5 h-3.5" />
              <span>Workspace / Kanban</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-slate-400">Active Sprint</span>
            </div>
          </div>

          {/* Mini Kanban Columns */}
          <div className="grid grid-cols-3 gap-2.5 my-auto z-10">
            {/* Column 1 */}
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold uppercase">
                <span>To Do</span>
                <span className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[9px]">3</span>
              </div>
              <div className="bg-slate-900/90 border border-slate-700/50 rounded-lg p-1.5 text-[10px] text-slate-200">
                <span className="block font-medium truncate">API Auth flow</span>
                <span className="inline-block mt-1 px-1.5 py-0.2 text-[8px] rounded bg-cyan-500/20 text-cyan-300 font-mono">High</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-slate-950/70 border border-cyan-500/30 rounded-xl p-2 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center justify-between text-[10px] text-cyan-400 font-semibold uppercase">
                <span>In Progress</span>
                <span className="w-4 h-4 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center text-[9px]">1</span>
              </div>
              <div className="bg-slate-900/90 border border-cyan-500/40 rounded-lg p-1.5 text-[10px] text-slate-200">
                <span className="block font-medium truncate">Drag &amp; Drop dnd</span>
                <span className="inline-block mt-1 px-1.5 py-0.2 text-[8px] rounded bg-emerald-500/20 text-emerald-300 font-mono">Done 80%</span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2 flex flex-col gap-1.5 shadow-sm">
              <div className="flex items-center justify-between text-[10px] text-emerald-400 font-semibold uppercase">
                <span>Done</span>
                <span className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[9px]">5</span>
              </div>
              <div className="bg-slate-900/90 border border-slate-700/50 rounded-lg p-1.5 text-[10px] text-slate-400">
                <span className="block truncate line-through">Redux Setup</span>
                <span className="inline-block mt-1 px-1.5 py-0.2 text-[8px] rounded bg-slate-800 text-slate-400 font-mono">Passed</span>
              </div>
            </div>
          </div>

          {/* Footer stats */}
          <div className="flex items-center justify-between z-10 text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-2">
            <span>Next.js 15 App Router</span>
            <span className="text-cyan-400 font-semibold">dnd-kit + Redux</span>
          </div>
        </div>
      );

    case "gaming-ecommerce":
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-purple-950 via-[#130722] to-[#090214] flex flex-col justify-between p-4 overflow-hidden select-none ${className}`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/15 blur-2xl rounded-full" />

          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5 bg-purple-900/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-purple-700/50 text-[11px] font-mono text-purple-300">
              <Gamepad2 className="w-3.5 h-3.5 text-pink-400" />
              <span>Gaming Gear Store</span>
            </div>
            <div className="flex items-center gap-1.5 bg-pink-500/20 px-2 py-0.5 rounded-full border border-pink-500/30 text-[10px] font-semibold text-pink-300">
              <ShoppingBag className="w-3 h-3" />
              <span>Cart (3)</span>
            </div>
          </div>

          {/* Product Showcase Mockup */}
          <div className="my-auto z-10 flex items-center gap-3 bg-black/40 border border-purple-500/30 rounded-xl p-3 backdrop-blur-sm shadow-lg">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-100 truncate">Pro RGB Gaming Headset</span>
              </div>
              <p className="text-[10px] text-slate-400 truncate">7.1 Surround Sound | Spatial Audio</p>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-xs font-extrabold text-pink-400 font-mono">$129.99</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-medium border border-purple-500/30">
                  Add to Cart
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 text-[10px] font-mono text-slate-400 border-t border-purple-900/50 pt-2">
            <span>Redux Toolkit Store</span>
            <span className="text-pink-400 font-semibold">Dynamic Cart</span>
          </div>
        </div>
      );

    case "atm-management-system":
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-emerald-950 via-[#041d14] to-[#020e0a] flex flex-col justify-between p-4 overflow-hidden select-none ${className}`}>
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/15 blur-2xl rounded-full" />

          {/* Terminal / ATM Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5 bg-emerald-900/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-700/50 text-[11px] font-mono text-emerald-300">
              <Terminal className="w-3.5 h-3.5" />
              <span>TypeScript ATM Simulator</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
              <CreditCard className="w-3.5 h-3.5" />
              <span>PIN: ••••</span>
            </div>
          </div>

          {/* Terminal Screen Mockup */}
          <div className="my-auto z-10 bg-black/60 border border-emerald-500/30 rounded-xl p-3 font-mono text-[11px] text-emerald-300 shadow-inner">
            <div className="flex items-center justify-between pb-1.5 border-b border-emerald-900/50">
              <span className="text-slate-400 text-[10px]">CURRENT BALANCE</span>
              <span className="text-emerald-400 font-bold text-sm">$4,850.00 USD</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-lg p-1.5 text-center text-[10px] text-emerald-200">
                [1] Fast Cash
              </div>
              <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-lg p-1.5 text-center text-[10px] text-emerald-200">
                [2] Deposit Funds
              </div>
              <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-lg p-1.5 text-center text-[10px] text-emerald-200">
                [3] Transaction Log
              </div>
              <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-lg p-1.5 text-center text-[10px] text-emerald-200">
                [4] Secure Exit
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 text-[10px] font-mono text-slate-400 border-t border-emerald-900/50 pt-2">
            <span>TypeScript Strict Mode</span>
            <span className="text-emerald-400 font-semibold">Validated Transactions</span>
          </div>
        </div>
      );

    case "coffee-shop-website":
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-amber-950 via-[#1c0f06] to-[#0a0502] flex flex-col justify-between p-4 overflow-hidden select-none ${className}`}>
          <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/15 blur-2xl rounded-full" />

          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5 bg-amber-900/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-700/50 text-[11px] font-mono text-amber-300">
              <Coffee className="w-3.5 h-3.5 text-amber-400" />
              <span>Artisan Coffee Roasters</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-semibold border border-amber-500/30">
              Organic Blend
            </span>
          </div>

          {/* Coffee Card Mockup */}
          <div className="my-auto z-10 flex items-center gap-3 bg-black/40 border border-amber-500/30 rounded-xl p-3 backdrop-blur-sm shadow-md">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
              <Coffee className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold text-amber-100 block truncate">Signature Caramel Macchiato</span>
              <p className="text-[10px] text-amber-300/80 truncate">Freshly brewed single-origin beans</p>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-xs font-extrabold text-amber-400 font-mono">$4.75</span>
                <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 font-medium">
                  Order Online
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 text-[10px] font-mono text-slate-400 border-t border-amber-900/50 pt-2">
            <span>Semantic HTML5 &amp; CSS3</span>
            <span className="text-amber-400 font-semibold">Responsive Web App</span>
          </div>
        </div>
      );

    case "javascript-games-collection":
    default:
      return (
        <div className={`relative w-full h-full bg-gradient-to-br from-blue-950 via-[#071328] to-[#030914] flex flex-col justify-between p-4 overflow-hidden select-none ${className}`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/15 blur-2xl rounded-full" />

          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5 bg-blue-900/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-blue-700/50 text-[11px] font-mono text-cyan-300">
              <Puzzle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Games Hub</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-semibold border border-cyan-500/30">
              DOM Engine
            </span>
          </div>

          {/* Interactive Tic-Tac-Toe & Mini-Game Preview */}
          <div className="my-auto z-10 flex items-center justify-between gap-3 bg-black/40 border border-blue-500/30 rounded-xl p-3 backdrop-blur-sm">
            {/* 3x3 Mini Grid */}
            <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-lg border border-slate-700">
              <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center font-bold text-cyan-400 text-xs">X</span>
              <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center font-bold text-pink-400 text-xs">O</span>
              <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center font-bold text-cyan-400 text-xs">X</span>
              <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center font-bold text-pink-400 text-xs">O</span>
              <span className="w-6 h-6 rounded bg-cyan-500/20 border border-cyan-400 flex items-center justify-center font-bold text-cyan-400 text-xs">X</span>
              <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-slate-500 text-xs">-</span>
              <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-slate-500 text-xs">-</span>
              <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center font-bold text-pink-400 text-xs">O</span>
              <span className="w-6 h-6 rounded bg-cyan-500/20 border border-cyan-400 flex items-center justify-center font-bold text-cyan-400 text-xs">X</span>
            </div>

            {/* Scoreboard / Guess The Number */}
            <div className="flex-1 flex flex-col gap-1 text-[11px] font-mono">
              <div className="flex items-center justify-between text-slate-300">
                <span>Player X:</span>
                <span className="text-cyan-400 font-bold">3 Wins</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Player O:</span>
                <span className="text-pink-400 font-bold">1 Win</span>
              </div>
              <div className="mt-1 pt-1 border-t border-slate-700 text-[10px] text-emerald-400 font-semibold truncate">
                ✓ Guess The Number: #42
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 text-[10px] font-mono text-slate-400 border-t border-blue-900/50 pt-2">
            <span>Vanilla JavaScript (ES6+)</span>
            <span className="text-cyan-400 font-semibold">4 Interactive Apps</span>
          </div>
        </div>
      );
  }
}
