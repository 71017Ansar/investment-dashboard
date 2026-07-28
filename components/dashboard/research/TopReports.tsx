"use client";

import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Report {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  rating: "POSITIVE" | "OVERWEIGHT" | "NEUTRAL";
  stars: number;
  imageUrl: string;
}

const reports: Report[] = [
  {
    id: 1,
    title: "The Future of Sovereign Debt in Emerging Markets",
    author: "Marcus Aurelius",
    date: "2024-05-21",
    category: "Fixed Income",
    rating: "POSITIVE",
    stars: 3,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQQJTMnfYqQzPADYY-eVbInJCNoTwOj29TssbN4w706An6wXTGBNPQHC_CviG7xOwf92VeO_Y8NkNGGC-YWe0ZhZiL5ojQRJ6h7WNcv1zlwVxvoKmwjrSJPPuO7_vU-yVy8FHIgB-tUvtkkyTx-jZlISUfefwazOaCjJtnBb6n3jW4llrFtnaipWeBCtrI6OoZOP0w3ZJGa6BZeNg6YbQ2HHnDa6YyzmdE9sfLMedXWmLiDn4rPGHEIsDEgKxPvrVkrWRC4WHumc4",
  },
  {
    id: 2,
    title: "Renewable Energy: Post-Subsidy Growth Dynamics",
    author: "Elena Rodriguez",
    date: "2024-05-20",
    category: "Equities",
    rating: "OVERWEIGHT",
    stars: 4,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEzwP3NC5jkHtS0p_i7ipIBEcfyVHG56dTrblQhU1SFunQT1E88H2G3sMJUHKjIwNcCKykS5q0DRJBDDgV0CdrbGqtTrbQhLj1MVdq4LlclvlH16ABTS8kXnR0Kwb7x5YAa9TaRWixJQEVTYO2YEDMFeYbRr3VM6PXXrtfEcCrsbWZ2CUcgRD2eF9MrHdbmlTfns5M4K2v3vKbXIx8F1W1HizzLDy7PxqgiZTCxXb0_ZFC33NNSvNnI6KDOil3vTF_Vr73SeKTyag",
  },
  {
    id: 3,
    title: "Dollar Dominance and the Evolving Multi-Polar Order",
    author: "David Klein",
    date: "2024-05-19",
    category: "FX",
    rating: "NEUTRAL",
    stars: 2,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoowDApp7K-8wZX9EwKFL7XZnDPFWxpJ0dl4ZJQT-Ml2yKyNh-uo7o7BLG4yhy0oUjo3ecrOy4EewiLauhM-rb3lv42AW5EIPwDPTsn3vo-oqi0plS-Y46yjxJhcU6HHKVaUBDz-dHJiYcqm_9fPICh6yomBl5lwtbvJkwBXObuvUMGzt8fbK-88ji-IcHDyeRePXvt08fHgtPpGG3JsyM2G3UJ0FocPnhij32P3RMmVRi4oo83rw3spdqX6pv6FnBi_sPbcGJJM4",
  },
  {
    id: 4,
    title: "Next-Gen Lithography: The Bottleneck of AI Compute",
    author: "Sarah Chen",
    date: "2024-05-18",
    category: "Tech",
    rating: "POSITIVE",
    stars: 4,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIag6okkoZUbdW_b8wr-u2on1-FgxGiwEkemXKzmF4jgnDV5qPWmBpQK8Zs0YfTl4xG-ZWANSh8qY3FdUFKyJDzgJLdV3dA31V9WR2BfyV_qCAPclW3PjR3leSofeHR9es1Pka1DnM-lIcg7kDS_3vOwjW6K5gHtIoDuMCnQ6lMFYdjouxxwABfXxNkZ3emJI2iFzX6hxvOWfilc78fuUyjrw4Shj7m20R2wo9vfrrO5DzctE9GBtLxm7ZfXYTyaeaBYNFEgiPHkc",
  },
];

const getRatingColor = (rating: Report["rating"]) => {
  switch (rating) {
    case "POSITIVE":
    case "OVERWEIGHT":
      return "bg-primary/10 text-primary";
    case "NEUTRAL":
      return "bg-on-surface-variant/10 text-on-surface-variant";
    default:
      return "bg-on-surface-variant/10 text-on-surface-variant";
  }
};

const renderStars = (count: number) => {
  return Array.from({ length: 4 }, (_, i) => (
    <span
      key={i}
      className={cn(
        "w-2 h-2 rounded-full",
        i < count ? "bg-primary" : "bg-white/10"
      )}
    />
  ));
};

export function TopReports() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">Top Research Reports</h2>
      
      <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
        {reports.map((report) => (
          <div
            key={report.id}
            className="glass-panel group w-[85vw] max-w-[320px] shrink-0 cursor-pointer rounded-xl p-5 transition-all hover:bg-white/[0.03] sm:w-80"
          >
            {/* Image */}
            <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
              <div
                className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${report.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-60" />
              <span className="absolute top-2 right-2 bg-background/80 backdrop-blur text-[10px] font-medium px-2 py-0.5 rounded text-white uppercase">
                {report.category}
              </span>
            </div>
            
            {/* Content */}
            <h4 className="font-bold text-sm mb-2 line-clamp-2 text-white">
              {report.title}
            </h4>
            
            <div className="flex justify-between items-center text-[11px] text-on-surface-variant mb-3">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{report.author}</span>
              </div>
              <span>{report.date}</span>
            </div>
            
            {/* Footer */}
            <div className="flex justify-between items-center pt-3 border-t border-white/5">
              <span className={cn(
                "text-[10px] px-2 py-0.5 rounded font-medium",
                getRatingColor(report.rating)
              )}>
                {report.rating}
              </span>
              <div className="flex gap-1">
                {renderStars(report.stars)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
