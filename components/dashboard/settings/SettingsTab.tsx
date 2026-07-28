"use client";

import { useState, useRef, useEffect } from "react";
import { SettingsSidebar } from "./SettingsSidebar";
import { UserPreferences } from "./UserPreferences";
import { Notifications } from "./Notifications";
import { Security } from "./Security";
import { Billing } from "./Billing";
import { Integrations } from "./Integrations";

export type SettingsSection = 
  | "user-preferences"
  | "notifications"
  | "security"
  | "billing"
  | "integrations"
  | "team";

export function SettingsTab() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("user-preferences");
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to section when active changes
  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element && contentRef.current) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);

  // Intersection Observer for active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SettingsSection;
            setActiveSection(id);
          }
        });
      },
      { rootMargin: "-100px 0px -50% 0px", threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-[calc(100dvh-4rem)] flex-col lg:h-[calc(100dvh-4rem)] lg:flex-row lg:overflow-hidden">
      {/* Nested Sidebar */}
      <SettingsSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      {/* Content Panel */}
      <div 
        ref={contentRef}
        className="custom-scrollbar min-w-0 flex-1 px-3 py-4 pb-20 sm:px-6 lg:overflow-y-auto lg:pb-40"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <UserPreferences />
          <Notifications />
          <Security />
          <Billing />
          <Integrations />
        </div>
      </div>
    </div>
  );
}
