"use client";

import { useState } from "react";
import { Upload, Settings2 } from "lucide-react";

export function UserPreferences() {
  const [formData, setFormData] = useState({
    fullName: "Alex Vanguard",
    email: "alex.vanguard@vanguard.com",
    theme: "Dark",
    fontSize: "Medium",
    dateFormat: "MM/DD/YYYY",
    timeZone: "EST UTC-5 (New York)",
    defaultTab: "Dashboard",
    chartTime: "1M",
    quickActions: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section 
      id="user-preferences" 
      data-section="user-preferences"
      className="glass-panel space-y-6 rounded-xl p-4 sm:p-6"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">User Preferences</h2>
          <p className="text-sm text-on-surface-variant">Manage your account identity and regional formatting.</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="text-sm font-medium text-white">Personal Information</h3>
          <p className="text-sm text-on-surface-variant opacity-60">Update your primary identity data.</p>
        </div>
        <div className="space-y-4 md:col-span-8">
          <div className="flex items-center gap-4">
            <div className="relative group cursor-pointer">
              <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_gyPnuqJoGf3r1axRQ53SggeY6Bg3HkSNbkSrGnnsYaiygOouXsLyonD6LHKNrHj14vWMO72RAVTWWEjcaEkKecXJnb5lbs2MZfcSPMfng7ldh5qIxgr6TXH60CQ9dTB5TmfPPvHN137NXPjNWYiRqum2_UsOfLDe1fryIOaDJ5NF8dJCAtYa4kz10U-aGYBCLHrSLJSlGjXc9yFNTaul2V7vAQoWEDA6eb8ttONoToNk85rFrsDJJ6XeFyvs1EEqwGwtxXKTqy8"
                  alt="Profile"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                <Upload className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold tracking-widest">
                MASTER KEY ACCESS
              </span>
              <p className="text-sm text-on-surface-variant">Recommended size: 512x512px</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-on-surface-variant">Full Name</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-background border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                type="text"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-on-surface-variant">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                type="email"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Display Settings */}
      <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="text-sm font-medium text-white">Display Settings</h3>
          <p className="text-sm text-on-surface-variant opacity-60">Interface aesthetics and localization.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-8">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-on-surface-variant">Theme</label>
            <select
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="w-full bg-background border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none transition-all"
            >
              <option>Dark</option>
              <option>Light</option>
              <option>System</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-on-surface-variant">Font Size</label>
            <select
              name="fontSize"
              value={formData.fontSize}
              onChange={handleChange}
              className="w-full bg-background border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none transition-all"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-on-surface-variant">Date Format</label>
            <select
              name="dateFormat"
              value={formData.dateFormat}
              onChange={handleChange}
              className="w-full bg-background border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none transition-all"
            >
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-on-surface-variant">Time Zone</label>
            <select
              name="timeZone"
              value={formData.timeZone}
              onChange={handleChange}
              className="w-full bg-background border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none transition-all"
            >
              <option>EST UTC-5 (New York)</option>
              <option>UTC+0 (London)</option>
              <option>HKT UTC+8 (Hong Kong)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dashboard Preferences */}
      <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <h3 className="text-sm font-medium text-white">Dashboard Preferences</h3>
          <p className="text-sm text-on-surface-variant opacity-60">Personalize your landing experience.</p>
        </div>
        <div className="space-y-4 md:col-span-8">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-sm text-white">Quick Actions Toggle</p>
              <p className="text-sm text-on-surface-variant">Show floating shortcuts on every page.</p>
            </div>
            <input
              name="quickActions"
              checked={formData.quickActions}
              onChange={handleChange}
              className="w-12 h-6 rounded-full bg-surface-container appearance-none cursor-pointer relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:left-7 before:transition-all checked:bg-primary"
              type="checkbox"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-on-surface-variant">Default Tab</label>
              <select
                name="defaultTab"
                value={formData.defaultTab}
                onChange={handleChange}
                className="w-full bg-background border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none transition-all"
              >
                <option>Dashboard</option>
                <option>Portfolio</option>
                <option>Trading Terminal</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-on-surface-variant">Chart Default Time</label>
              <select
                name="chartTime"
                value={formData.chartTime}
                onChange={handleChange}
                className="w-full bg-background border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none transition-all"
              >
                <option>1D</option>
                <option>1W</option>
                <option>1M</option>
                <option>1Y</option>
              </select>
            </div>
          </div>
          <button className="flex items-center gap-2 text-primary text-sm font-medium hover:underline">
            <Settings2 className="h-4 w-4" />
            Customize KPI Cards Arrangement
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse justify-end gap-3 border-t border-white/10 pt-4 sm:flex-row">
        <button className="px-6 py-2.5 text-sm font-medium text-on-surface-variant hover:text-white transition-colors">
          Discard
        </button>
        <button className="px-8 py-2.5 bg-primary text-on-primary-container font-bold rounded-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
          Save Changes
        </button>
      </div>
    </section>
  );
}
