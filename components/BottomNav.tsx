"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Heart, Mail, Wind, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function BottomNav() {
    const pathname = usePathname();
    const { lang } = useLanguage();

    const navItems = [
        { href: "/", label: t("nav_home", lang), icon: Home },
        { href: "/practice", label: t("nav_heal", lang), icon: Heart },
        { href: "/ceremony", label: t("nav_stars", lang), icon: Wind },
        { href: "/letters", label: t("nav_letters", lang), icon: Mail },
        { href: "/mirror", label: t("nav_look", lang), icon: User },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto h-20 bg-[var(--nav-bg)] border-t border-[var(--accent)] flex justify-between items-center px-6 z-50 shadow-[var(--shadow-md)]">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col items-center justify-center w-14 h-full gap-1"
                    >
                        <div
                            className={`p-2 rounded-2xl transition-all duration-300 ease-in-out ${isActive ? "bg-[var(--primary)]/20 text-[var(--nav-active)] scale-110" : "text-[var(--nav-inactive)] hover:bg-[var(--accent)]/50"
                                }`}
                        >
                            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                        </div>
                        <span
                            className={`text-[10px] font-medium transition-colors ${isActive ? "text-[var(--nav-active)]" : "text-[var(--nav-inactive)]"
                                }`}
                        >
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
