interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down";
  color?: string;
  hint?: string;
}

export default function StatCard({ label, value, change, trend, hint }: StatCardProps) {
  const isUp = trend === "up";
  const trendColor = isUp ? "emerald" : "rose";
  
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform cursor-default">
      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</p>
      <div className="mt-2 flex items-baseline justify-between">
        <h3 className="text-2xl font-extrabold">{value}</h3>
        {change && (
          <span className={`flex items-center text-xs font-bold text-${trendColor}-500 bg-${trendColor}-50 dark:bg-${trendColor}-500/10 px-1.5 py-0.5 rounded-lg`}>
            <span className="material-symbols-outlined !text-sm">{isUp ? 'trending_up' : 'trending_down'}</span> {change}
          </span>
        )}
      </div>
      {hint && <p className="mt-2 text-[10px] text-slate-400 font-medium tracking-wide italic leading-tight">{hint}</p>}
    </div>
  );
}
