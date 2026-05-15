"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Activity, Book, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { name: "Stats", href: "/stats", icon: Activity },
  { name: "Journal", href: "/journal", icon: Book },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    // 'pb-safe' is important for iPhones with home indicators
    // We use typical dark mode colors that match your design
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-between bg-[#13161b] px-4 pb-safe pt-2 md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 transition-colors",
              isActive
                ? "text-[#00e5a3] bg-[#1a3031]" // Active state: Teal text and dark teal background
                : "text-muted-foreground hover:text-foreground" // Inactive state
            )}
          >
            <item.icon className="h-6 w-6" strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium tracking-wide">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}