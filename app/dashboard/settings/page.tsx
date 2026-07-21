"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { SettingsTab } from "@/components/dashboard/settings/SettingsTab";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16 h-[calc(100vh-4rem)]">
        <SettingsTab />
      </main>
    </div>
  );
}
