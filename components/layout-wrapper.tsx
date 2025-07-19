"use client";

import { usePathname } from "next/navigation";
import AppNavbar from "@/components/navbar";
import AppFooter from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      <div className="relative flex flex-col h-screen bg-white">
        <AppNavbar />
        <main>{children}</main>
        <AppFooter />
      </div>
    </SmoothScroll>
  );
}
