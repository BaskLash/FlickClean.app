"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Variant = "primary" | "ghost";

function Button({
  onClick,
  children,
  variant = "primary",
  href,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-6 sm:px-7 rounded-full text-sm sm:text-base font-medium transition-all will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.45)]"
      : "bg-white/5 text-white border border-white/10 hover:bg-white/10 backdrop-blur";

  const content = (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-flex">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-flex">
      {content}
    </button>
  );
}

export function StartCleaningButton({
  location,
  href = "#download",
}: {
  location: string;
  href?: string;
}) {
  return (
    <Button
      href={href}
      onClick={() =>
        trackEvent("start_cleaning_click", { location })
      }
      variant="primary"
    >
      Start Cleaning
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Button>
  );
}

export function DownloadButton({
  location,
  label = "Download Now",
  href = "#download",
}: {
  location: string;
  label?: string;
  href?: string;
}) {
  return (
    <Button
      href={href}
      onClick={() => trackEvent("download_click", { location })}
      variant="ghost"
    >
      <Download className="size-4" />
      {label}
    </Button>
  );
}
