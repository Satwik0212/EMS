import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "danger" | "ghost" | "indigo";
}

export default function Badge({ children, variant = "primary" }: BadgeProps) {
  const variants = {
    primary: "bg-primary/10 text-primary",
    indigo: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    success: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    warning: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
    danger: "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400",
    ghost: "bg-slate-100 dark:bg-slate-800 text-slate-500",
  };
  
  return (
    <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider inline-flex items-center ${variants[variant]}`}>
      {children}
    </span>
  );
}
