"use client";

import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-background/80 backdrop-blur-xl border-b border-outline-variant/30 h-16 px-8 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <h2 className="text-2xl font-bold text-white">Overview</h2>
        <div className="h-6 w-px bg-outline-variant/40" />
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
            Market: <span className="text-primary">Open</span>
          </span>
          <span className="text-sm text-white/80 font-mono uppercase tracking-tighter">
            EST 10:42:15
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-on-surface-variant hover:text-primary transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
        </button>

        <button
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 border rounded-xl transition-all",
            isSearchFocused
              ? "border-primary bg-primary/5"
              : "border-outline-variant/50 glass-panel hover:border-primary"
          )}
          onClick={() => setIsSearchFocused(!isSearchFocused)}
        >
          <Search className="h-4 w-4 text-on-surface-variant" />
          <span className="text-xs font-medium text-on-surface-variant">
            Quick Command
          </span>
          <span className="ml-2 text-[10px] opacity-40 font-mono">⌘ K</span>
        </button>
      </div>
    </header>
  );
}