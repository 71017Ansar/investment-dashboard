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
    <nav className="w-64 border-r border-white/5 py-4 px-4 space-y-1 overflow-y-auto">
      <p className="text-xs font-medium text-on-surface-variant/40 px-3 pb-2 uppercase tracking-widest">
        General
      </p>
      {navItems
        .filter((item) => item.group === "general")
        .map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium",
              activeSection === item.id
                ? "text-primary bg-primary/10 border-l-2 border-primary"
                : "text-on-surface-variant hover:bg-white/5 hover:text-white"
            )}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      
      <p className="text-xs font-medium text-on-surface-variant/40 px-3 pt-6 pb-2 uppercase tracking-widest">
        Security & Ops
      </p>
      {navItems
        .filter((item) => item.group === "security")
        .map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium",
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