"use client";

import { useState } from "react";
import { Shield, Monitor, Smartphone, Download } from "lucide-react";

export function Security() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [sessions] = useState([
    { id: 1, device: "Chrome - New York, USA", ip: "192.168.1.104", os: "MacOS Sonoma", current: true },
    { id: 2, device: "iPhone 15 - Traveling", ip: "10.0.0.12", os: "iOS 17.2", current: false },
  ]);

  return (
    <section 
      id="security" 
      data-section="security"
      className="glass-panel space-y-6 rounded-xl p-4 sm:p-6"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Security</h2>
          <p className="text-sm text-on-surface-variant">Protect your institutional assets and API access.</p>
        </div>
        <button className="px-6 py-2 bg-error/10 text-error border border-error/20 rounded-lg text-sm font-medium hover:bg-error hover:text-white transition-all">
          Deactivate Account
        </button>
      </div>

      {/* 2FA */}
      <div className="flex items-center justify-between gap-4 rounded-xl border border-primary/10 bg-primary/5 p-4 sm:p-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-6">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-lg font-bold text-white">Two-Factor Authentication</p>
            <p className="text-sm text-on-surface-variant">Active since May 2023 via Authenticator App.</p>
          </div>
        </div>
        <input
          checked={twoFactor}
          onChange={() => setTwoFactor(!twoFactor)}
          className="w-12 h-6 rounded-full bg-surface-container appearance-none cursor-pointer relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:left-7 before:transition-all checked:bg-primary"
          type="checkbox"
        />
      </div>

      {/* Password & API */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="p-6 bg-white/5 rounded-xl border border-white/5">
          <h4 className="text-sm font-medium text-white mb-4">Password Management</h4>
          <button className="w-full py-2.5 bg-surface-container-high border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
            Change Password
          </button>
          <p className="text-sm text-on-surface-variant mt-3 text-center">Last changed 4 months ago.</p>
        </div>
        <div className="p-6 bg-white/5 rounded-xl border border-white/5">
          <h4 className="text-sm font-medium text-white mb-4">API Access</h4>
          <div className="flex gap-2">
            <button className="flex-1 py-2.5 bg-primary text-on-primary-container font-bold rounded-lg hover:opacity-90 transition-all">
              New Key
            </button>
            <button className="flex-1 py-2.5 bg-surface-container-high border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
              Revoke All
            </button>
          </div>
          <p className="text-sm text-on-surface-variant mt-3 text-center">3 active production keys.</p>
        </div>
      </div>

      {/* Active Sessions */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-white flex items-center gap-2">
          <Monitor className="h-5 w-5" />
          Active Sessions
        </h4>
        <div className="space-y-2">
          {sessions.map((session) => (
            <div key={session.id} className="flex flex-col items-start justify-between gap-3 rounded-lg border border-white/5 bg-background p-4 sm:flex-row sm:items-center">
              <div className="flex min-w-0 items-center gap-4">
                {session.current ? (
                  <Monitor className="h-5 w-5 text-primary" />
                ) : (
                  <Smartphone className="h-5 w-5 text-on-surface-variant" />
                )}
                <div>
                  <p className="text-sm text-white">
                    {session.device}
                    {session.current && (
                      <span className="text-primary text-[10px] ml-2 bg-primary/10 px-1.5 py-0.5 rounded">
                        CURRENT
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-on-surface-variant">IP: {session.ip} • {session.os}</p>
                </div>
              </div>
              <button className="text-error text-sm font-medium hover:underline">
                Revoke
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center">
        <button className="px-6 py-2.5 flex items-center gap-2 text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
          <Download className="h-4 w-4" />
          Download Audit Log
        </button>
        <button className="px-8 py-2.5 bg-primary text-on-primary-container font-bold rounded-lg hover:shadow-primary/20 transition-all active:scale-95">
          Save Security Config
        </button>
      </div>
    </section>
  );
}
