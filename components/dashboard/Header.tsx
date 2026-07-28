"use client";

import { useState } from "react";
import { Bell, Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}

export function Header({ title, onMenuClick }: HeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-outline-variant/30 bg-background/90 px-4 backdrop-blur-xl sm:px-6 lg:left-64 lg:px-8">
      <div className="flex min-w-0 items-center gap-3 sm:gap-5">
        <button
          type="button"
          aria-label="Open navigation"
          onClick={onMenuClick}
          className="shrink-0 rounded-lg p-2 text-on-surface-variant hover:bg-white/5 hover:text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h2 className="truncate text-lg font-bold text-white sm:text-2xl">{title}</h2>
        <div className="hidden h-6 w-px bg-outline-variant/40 sm:block" />
        <div className="hidden items-center gap-4 md:flex">
          <span className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
            Market: <span className="text-primary">Open</span>
          </span>
          <span className="font-mono text-sm uppercase tracking-tighter text-white/80">
            EST 10:42:15
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="relative p-2 text-on-surface-variant transition-colors hover:text-primary"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
        </button>
        <button
          type="button"
          aria-label="Quick command"
          className={cn(
            "flex items-center gap-2 rounded-xl border px-2.5 py-2 transition-all sm:px-3 sm:py-1.5",
            isSearchFocused
              ? "border-primary bg-primary/5"
              : "glass-panel border-outline-variant/50 hover:border-primary"
          )}
          onClick={() => setIsSearchFocused(!isSearchFocused)}
        >
          <Search className="h-4 w-4 text-on-surface-variant" />
          <span className="hidden text-xs font-medium text-on-surface-variant sm:inline">
            Quick Command
          </span>
          <span className="ml-2 hidden font-mono text-[10px] opacity-40 md:inline">⌘ K</span>
        </button>
      </div>
    </header>
  );
}
