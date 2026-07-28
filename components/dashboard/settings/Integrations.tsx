"use client";

import { useState } from "react";
import { Cloud, Database, Bitcoin, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  status: "connected" | "available" | "coming";
  action: string;
}

const integrations: Integration[] = [
  {
    id: "bloomberg",
    name: "Bloomberg Terminal Sync",
    description: "Real-time data flow from your BBG instance.",
    icon: <Cloud className="h-6 w-6 text-white" />,
    status: "connected",
    action: "Configure",
  },
  {
    id: "snowflake",
    name: "Snowflake Data Warehouse",
    description: "Automated report exports and raw data mirroring.",
    icon: <Database className="h-6 w-6 text-white" />,
    status: "connected",
    action: "Configure",
  },
  {
    id: "coinbase",
    name: "Coinbase Institutional",
    description: "Digital asset custody and trading execution.",
    icon: <Bitcoin className="h-6 w-6 text-white" />,
    status: "available",
    action: "Connect",
  },
];

export function Integrations() {
  const [integrationsState, setIntegrationsState] = useState(integrations);

  const handleAction = (id: string) => {
    setIntegrationsState((prev) =>
      prev.map((integration) =>
        integration.id === id
          ? {
              ...integration,
              status: integration.status === "available" ? "connected" : "available",
              action: integration.status === "available" ? "Configure" : "Connect",
            }
          : integration
      )
    );
  };

  const getStatusBadge = (status: Integration["status"]) => {
    switch (status) {
      case "connected":
        return (
          <span className="flex items-center gap-1 text-primary text-xs font-medium bg-primary/10 px-2 py-0.5 rounded">
            <Check className="h-3 w-3" />
            Connected
          </span>
        );
      case "available":
        return (
          <span className="text-on-surface-variant text-xs font-medium bg-white/5 px-2 py-0.5 rounded">
            Available
          </span>
        );
      case "coming":
        return (
          <span className="text-yellow-500 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded">
            Coming Soon
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="integrations" 
      data-section="integrations"
      className="glass-panel space-y-6 rounded-xl p-4 sm:p-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Integrations</h2>
        <p className="text-sm text-on-surface-variant">
          Connect with external financial data providers and workflows.
        </p>
      </div>

      <div className="space-y-4">
        {integrationsState.map((integration) => (
          <div
            key={integration.id}
            className={cn(
              "flex flex-col items-start justify-between gap-4 rounded-lg border p-4 transition-all sm:flex-row sm:items-center",
              integration.status === "connected"
                ? "bg-background border-primary/20"
                : integration.status === "coming"
                ? "bg-background border-white/5 opacity-50 grayscale"
                : "bg-background border-white/5 hover:border-primary/30"
            )}
          >
            <div className="flex min-w-0 items-center gap-4">
              <div className={cn(
                "w-12 h-12 rounded flex items-center justify-center",
                integration.status === "connected"
                  ? "bg-primary/10"
                  : "bg-white/5"
              )}>
                {integration.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-white font-bold">{integration.name}</p>
                  {getStatusBadge(integration.status)}
                </div>
                <p className="text-sm text-on-surface-variant">{integration.description}</p>
              </div>
            </div>
            
            {integration.status !== "coming" && (
              <button
                onClick={() => handleAction(integration.id)}
                className={cn(
                  "px-6 py-2 rounded-lg text-sm font-bold transition-all",
                  integration.status === "connected"
                    ? "bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-on-primary-container"
                    : "bg-white/10 text-white hover:bg-primary hover:text-on-primary-container"
                )}
              >
                {integration.action}
              </button>
            )}
            
            {integration.status === "coming" && (
              <button
                disabled
                className="px-6 py-2 bg-white/5 text-on-surface-variant rounded-lg text-sm font-bold cursor-not-allowed"
              >
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="pt-4 border-t border-white/10">
        <p className="text-xs text-on-surface-variant flex items-center gap-1">
          <ExternalLink className="h-3 w-3" />
          Need more integrations? <button className="text-primary hover:underline">Request a new connector</button>
        </p>
      </div>
    </section>
  );
}
