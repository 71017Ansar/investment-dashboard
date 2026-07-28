"use client";

import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturedResearch {
  id: number;
  title: string;
  analyst: string;
  date: string;
  rating: "OVERWEIGHT" | "NEUTRAL" | "POSITIVE";
  takeaways: string[];
  avatar: string;
}

const featuredData: FeaturedResearch[] = [
  {
    id: 1,
    title: "Sector Outlook - Technology",
    analyst: "Sarah Chen",
    date: "2024-05-24",
    rating: "OVERWEIGHT",
    takeaways: ["AI acceleration across enterprise", "Sustained semiconductor demand"],
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAODz-KESmz-ZHalur6thrO_l-Ugh2xG6Fp3Wxcpd5fnJtMpFTUWuj-RIYtskFcm8n2zhWoDyx7F6evAMFnGU6NGsLYcjyDFb2w7ue2__mO4C-8T85xY3o-xd7I-AOXjVKOm3oVmBJyZgJGGr90hDXQXJ-cqbZQH6mxbOFucYPnimkGk3AFedtjO1QD913NTE28Mb1KuYuxGOF5R8---BkLkIsdgSmSBNHWoUqRETS5ufakeG420wL4JDppQj4t0DZy7q4VMbjrCv8",
  },
  {
    id: 2,
    title: "Macroeconomic Update",
    analyst: "James Williams",
    date: "2024-05-23",
    rating: "NEUTRAL",
    takeaways: ["Headline inflation cooling monthly", "Rate cuts expected in Q3/Q4"],
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4_5IwRe_quAYK4EKnc81N2FhtlliAO31CNftWTqmWZpcUqZ8pq8AX9HWO4C7ZV5L40SmueRlyr-RFAjR7Z2DDVkESOFS3orj2RcqpGBLb9_gIJl8r40GRqHKE6xDhSV3XPuukxc4xZAqauEOgAFIYJrxh0Dd5z-YT-us8slBBHdCnQugMH1XBtthuvOlOeC2ss2cG4DnKULH7kRuU3em7FU-3fwSaJ7cnCPY4sLK4N85GV94XyltfrEBZocG4sd-RTpF037wGQAg",
  },
  {
    id: 3,
    title: "ESG Integration Report",
    analyst: "Emily Park",
    date: "2024-05-22",
    rating: "POSITIVE",
    takeaways: ["New carbon reduction targets", "Expanding green bond issuance"],
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzWrQl3F6cmKUD3XOOR8PGd96HSROAH8abmyJuayvQZzvd8Edz0T0schE4zbUWUoFPFDYorRHfGM7r3zvSdSy0PsHKSGJCbI7ENMYzsHfSfbASgM0aTM4niEzHwE_ebeF3d5C1X9IfufE-9UUfAHa2LEgOLZUrMaQkc9nncgA-trGc65414WD5CJzhwj3l_hRoJfF1GgUQQds_mE_GXBf3Ts25i9OaqOc1QR-1WB22AwOi0BOXwH3vJueNWRGXFySK60Es8n_oxWk",
  },
];

const getRatingColor = (rating: FeaturedResearch["rating"]) => {
  switch (rating) {
    case "OVERWEIGHT":
      return "bg-primary/10 text-primary";
    case "POSITIVE":
      return "bg-primary/10 text-primary";
    case "NEUTRAL":
      return "bg-on-surface-variant/10 text-on-surface-variant";
    default:
      return "bg-on-surface-variant/10 text-on-surface-variant";
  }
};

export function FeaturedResearch() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {featuredData.map((item) => (
        <div
          key={item.id}
          className="glass-panel rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-all duration-300 group"
        >
          <div className="p-6 flex-1">
            <div className="flex justify-between items-start mb-4">
              <span className={cn(
                "px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider",
                getRatingColor(item.rating)
              )}>
                {item.rating}
              </span>
              <Bookmark className="h-5 w-5 text-on-surface-variant group-hover:text-primary transition-colors" />
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
            
            <div className="flex items-center gap-3 mb-6">
              <img
                className="w-8 h-8 rounded-full border border-white/10 object-cover"
                src={item.avatar}
                alt={item.analyst}
              />
              <div>
                <p className="text-sm font-medium text-white">{item.analyst}</p>
                <p className="text-[11px] text-on-surface-variant">{item.date}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="text-on-surface-variant text-sm">Key takeaways:</p>
              <ul className="space-y-2">
                {item.takeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-white">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <button className="w-full py-4 border-t border-white/5 text-sm font-medium text-secondary hover:bg-secondary-container/20 transition-colors uppercase tracking-widest">
            Read More
          </button>
        </div>
      ))}
    </section>
  );
}
