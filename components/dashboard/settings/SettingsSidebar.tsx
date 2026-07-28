"use client";

import { cn } from "@/lib/utils";
import { SettingsSection } from "./SettingsTab";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Link,
  Users,
} from "lucide-react";

interface SettingsSidebarProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

interface NavItem {
  id: SettingsSection;
  icon: React.ReactNode;
  label: string;
  group: "general" | "security";
}

const navItems: NavItem[] = [
  { id: "user-preferences", icon: <User className="h-5 w-5" />, label: "User Preferences", group: "general" },
  { id: "notifications", icon: <Bell className="h-5 w-5" />, label: "Notifications", group: "general" },
  { id: "security", icon: <Shield className="h-5 w-5" />, label: "Security", group: "security" },
  { id: "billing", icon: <CreditCard className="h-5 w-5" />, label: "Billing", group: "security" },
  { id: "integrations", icon: <Link className="h-5 w-5" />, label: "Integrations", group: "security" },
  { id: "team", icon: <Users className="h-5 w-5" />, label: "Team", group: "security" },
];

export function SettingsSidebar({ activeSection, onSectionChange }: SettingsSidebarProps) {
  return (
    <nav className="custom-scrollbar sticky top-16 z-30 flex w-full gap-2 overflow-x-auto border-b border-white/5 bg-background/95 px-3 py-3 backdrop-blur-xl lg:static lg:block lg:w-64 lg:shrink-0 lg:space-y-1 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:bg-transparent lg:px-4 lg:py-4">
      <p className="hidden text-xs font-medium text-on-surface-variant/40 px-3 pb-2 uppercase tracking-widest lg:block">
        General
      </p>
      {navItems
        .filter((item) => item.group === "general")
        .map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-medium transition-all lg:w-full lg:gap-3",
              activeSection === item.id
                ? "text-primary bg-primary/10 border-l-2 border-primary"
                : "text-on-surface-variant hover:bg-white/5 hover:text-white"
            )}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      
      <p className="hidden text-xs font-medium text-on-surface-variant/40 px-3 pt-6 pb-2 uppercase tracking-widest lg:block">
        Security & Ops
      </p>
      {navItems
        .filter((item) => item.group === "security")
        .map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-medium transition-all lg:w-full lg:gap-3",
              activeSection === item.id
                ? "text-primary bg-primary/10 border-l-2 border-primary"
                : "text-on-surface-variant hover:bg-white/5 hover:text-white"
            )}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
    </nav>
  );
}
