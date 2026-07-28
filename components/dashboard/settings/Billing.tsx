"use client";

export function Billing() {
  return (
    <section 
      id="billing" 
      data-section="billing"
      className="glass-panel space-y-6 rounded-xl p-4 sm:p-6"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Billing & Subscription</h2>
          <p className="text-sm text-on-surface-variant">Manage your institutional tier and payment methods.</p>
        </div>
        <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full font-bold text-sm">
          ENTERPRISE TIER
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="flex flex-col justify-between rounded-xl border border-white/5 bg-white/5 p-4 sm:p-6 md:col-span-8">
          <div>
            <p className="text-xs font-medium text-on-surface-variant mb-2">Next Billing Date</p>
            <p className="text-2xl font-bold text-white">October 12, 2024</p>
            <p className="text-sm text-on-surface-variant mt-1">$12,450.00 USD / Monthly</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button className="px-6 py-2 bg-primary text-on-primary-container font-bold rounded-lg hover:opacity-90 transition-all active:scale-95">
              Update Method
            </button>
            <button className="px-6 py-2 bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              View Invoices
            </button>
          </div>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/5 p-4 sm:p-6 md:col-span-4">
          <p className="text-xs font-medium text-on-surface-variant mb-4">Payment Method</p>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center font-bold italic text-white text-xs">
              VISA
            </div>
            <div>
              <p className="text-sm text-white">•••• 4242</p>
              <p className="text-xs text-on-surface-variant">Expires 09/26</p>
            </div>
          </div>
          <button className="w-full py-2 text-xs text-primary hover:underline">
            Manage cards
          </button>
        </div>
      </div>
    </section>
  );
}
