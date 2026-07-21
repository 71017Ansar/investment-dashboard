"use client";

import { useState } from "react";
import { Bell, Mail, MessageSquare, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertType {
  id: string;
  label: string;
  options: ("All" | "Threshold" | "None")[];
  defaultValue: "All" | "Threshold" | "None";
}

export function Notifications() {
  const [channels, setChannels] = useState({
    inApp: true,
    email: true,
    slack: false,
  });

  const [quietHours, setQuietHours] = useState({
    enabled: true,
    start: "22:00",
    end: "06:00",
  });

  const [alertTypes, setAlertTypes] = useState<Record<string, "All" | "Threshold" | "None">>({
    portfolio: "All",
    price: "Threshold",
  });

  const toggleChannel = (channel: keyof typeof channels) => {
    setChannels((prev) => ({ ...prev, [channel]: !prev[channel] }));
  };

  const toggleQuietHours = () => {
    setQuietHours((prev) => ({ ...prev, enabled: !prev.enabled }));
  };

  const alertTypeOptions: AlertType[] = [
    { id: "portfolio", label: "Portfolio Changes", options: ["All", "Threshold", "None"], defaultValue: "All" },
    { id: "price", label: "Price Movements", options: ["All", "Threshold", "None"], defaultValue: "Threshold" },
  ];

  const setAlertType = (id: string, value: "All" | "Threshold" | "None") => {
    setAlertTypes((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section 
      id="notifications" 
      data-section="notifications"
      className="glass-panel p-6 rounded-xl space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Notifications</h2>
        <p className="text-sm text-on-surface-variant">Configure how and when you receive market alerts.</p>
      </div>

      {/* Alert Channels */}
      <div className="grid grid-cols-12 gap-4 border-t border-white/10 pt-6">
        <div className="col-span-4">
          <h3 className="text-sm font-medium text-white">Alert Channels</h3>
        </div>
        <div className="col-span-8 space-y-4">
          {[
            { id: "inApp", icon: Monitor, label: "In-App Notifications", desc: "Real-time alerts within the terminal." },
            { id: "email", icon: Mail, label: "Email Alerts", desc: "admin@vanguard.com" },
            { id: "slack", icon: MessageSquare, label: "Slack Integration", desc: "vanguard.slack.com" },
          ].map((channel) => {
            const Icon = channel.icon;
            const isChecked = channels[channel.id as keyof typeof channels];
            
            return (
              <div
                key={channel.id}
                className={cn(
                  "flex items-center justify-between p-4 rounded-lg transition-all",
                  isChecked ? "bg-white/5" : "bg-white/5 opacity-60"
                )}
              >
                <div className="flex items-center gap-4">
                  <Icon className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-sm text-white">{channel.label}</p>
                    <p className="text-sm text-on-surface-variant">{channel.desc}</p>
                  </div>
                </div>
                <input
                  checked={isChecked}
                  onChange={() => toggleChannel(channel.id as keyof typeof channels)}
                  className="w-12 h-6 rounded-full bg-surface-container appearance-none cursor-pointer relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:left-7 before:transition-all checked:bg-primary"
                  type="checkbox"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Alert Types */}
      <div className="grid grid-cols-12 gap-4 border-t border-white/10 pt-6">
        <div className="col-span-4">
          <h3 className="text-sm font-medium text-white">Alert Types</h3>
        </div>
        <div className="col-span-8 space-y-4">
          {alertTypeOptions.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between">
              <p className="text-sm text-white">{alert.label}</p>
              <div className="flex bg-surface-container rounded-lg p-1">
                {alert.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setAlertType(alert.id, option)}
                    className={cn(
                      "px-4 py-1.5 text-xs rounded-md transition-all font-medium",
                      alertTypes[alert.id] === option
                        ? "bg-primary text-on-primary-container"
                        : "text-on-surface-variant hover:text-white"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quiet Hours */}
      <div className="grid grid-cols-12 gap-4 border-t border-white/10 pt-6">
        <div className="col-span-4">
          <h3 className="text-sm font-medium text-white">Quiet Hours</h3>
        </div>
        <div className="col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white">Enable Quiet Hours</p>
            <input
              checked={quietHours.enabled}
              onChange={toggleQuietHours}
              className="w-12 h-6 rounded-full bg-surface-container appearance-none cursor-pointer relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:left-7 before:transition-all checked:bg-primary"
              type="checkbox"
            />
          </div>
          {quietHours.enabled && (
            <div className="flex items-center gap-4">
              <div className="flex-1 space-y-1.5">
                <label className="text-xs text-on-surface-variant">Starts At</label>
                <input
                  value={quietHours.start}
                  onChange={(e) => setQuietHours((prev) => ({ ...prev, start: e.target.value }))}
                  className="w-full bg-background border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  type="time"
                />
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="text-xs text-on-surface-variant">Ends At</label>
                <input
                  value={quietHours.end}
                  onChange={(e) => setQuietHours((prev) => ({ ...prev, end: e.target.value }))}
                  className="w-full bg-background border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  type="time"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-white/10">
        <button className="px-8 py-2.5 bg-primary text-on-primary-container font-bold rounded-lg hover:shadow-primary/20 transition-all active:scale-95">
          Update Alerts
        </button>
      </div>
    </section>
  );
}
