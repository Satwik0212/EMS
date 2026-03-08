import Image from "next/image";
import StatCard from "@/components/ui/StatCard";

export default function AdminDashboard() {
  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8 space-y-8 custom-scrollbar">
      {/* Quick Actions & Welcome */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Good morning, Alex</h2>
          <p className="text-slate-500 mt-1">Here's what's happening in your organization today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined !text-lg">description</span>
            Generate Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined !text-lg">payments</span>
            Run Payroll
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/25 hover:opacity-90 transition-all">
            <span className="material-symbols-outlined !text-lg">person_add</span>
            Add Employee
          </button>
        </div>
      </div>

      {/* KPI Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Total Employees", value: "1,248", change: "+12%", trend: "up", hint: "vs last month" },
          { label: "Active Status", value: "1,180", change: "-2%", trend: "down", hint: "vs last month" },
          { label: "New Hires", value: "24", change: "+5%", trend: "up", hint: "this quarter" },
          { label: "Attrition Rate", value: "4.2%", change: "-0.5%", trend: "down", hint: "trailing 12 mo." },
          { label: "Avg. Salary", value: "$85.4k", change: "+3%", trend: "up", hint: "annual avg." },
        ].map((kpi, i) => (
          <StatCard key={i} {...(kpi as any)} />
        ))}
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Hiring Trend Chart */}
        <div className="xl:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="font-bold text-lg">Hiring Trend</h4>
              <p className="text-xs text-slate-500">Employee growth trajectory over 12 months</p>
            </div>
            <select className="bg-slate-50 dark:bg-slate-800 border-none text-xs font-bold rounded-lg focus:ring-primary/20 cursor-pointer">
              <option>Last 12 Months</option>
              <option>Last 6 Months</option>
            </select>
          </div>
          <div className="h-64 flex flex-col justify-end gap-2">
            <div className="flex-1 flex items-end gap-1.5 px-4 relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                <path d="M0,180 L100,160 L200,170 L300,140 L400,120 L500,130 L600,80 L700,90 L800,40 L900,50 L1000,10" fill="none" stroke="#5048e5" strokeLinecap="round" strokeWidth="3"></path>
                <path d="M0,180 L100,160 L200,170 L300,140 L400,120 L500,130 L600,80 L700,90 L800,40 L900,50 L1000,10 V200 H0 Z" fill="url(#hiringGrad)"></path>
                <defs>
                  <linearGradient id="hiringGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#5048e5" stopOpacity="0.1"></stop>
                    <stop offset="100%" stopColor="#5048e5" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between px-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
            </div>
          </div>
        </div>

        {/* Department Distribution Pie Chart */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
          <h4 className="font-bold text-sm mb-6">Department Distribution</h4>
          <div className="flex-1 flex items-center justify-center relative">
            <svg className="size-48 transform -rotate-90" viewBox="0 0 32 32">
              <circle className="text-slate-100 dark:text-slate-800" cx="16" cy="16" fill="none" r="15.915" stroke="currentColor" strokeWidth="4"></circle>
              <circle className="text-primary" cx="16" cy="16" fill="none" r="15.915" stroke="currentColor" strokeDasharray="45 100" strokeWidth="4"></circle>
              <circle className="text-emerald-400" cx="16" cy="16" fill="none" r="15.915" stroke="currentColor" strokeDasharray="25 100" strokeDashoffset="-45" strokeWidth="4"></circle>
              <circle className="text-amber-400" cx="16" cy="16" fill="none" r="15.915" stroke="currentColor" strokeDasharray="30 100" strokeDashoffset="-70" strokeWidth="4"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold">1.2k</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Total</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-sm bg-primary"></span>
              <span className="text-[11px] font-bold">Engineering (45%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-sm bg-emerald-400"></span>
              <span className="text-[11px] font-bold">Product (25%)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-sm bg-amber-400"></span>
              <span className="text-[11px] font-bold">Marketing (30%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* AI Insights */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined !text-xl text-primary">auto_awesome</span>
              <h4 className="font-bold">AI Insights</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 group hover:bg-white/15 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[9px] font-bold rounded uppercase tracking-wider">High Priority</span>
                </div>
                <p className="text-xs text-white/80">Marketing productivity is down <span className="text-rose-400 font-bold">8%</span> this month. This may impact Q4 targets.</p>
                <div className="mt-4 flex gap-3">
                  <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors">Take Action</button>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Dismiss</button>
                </div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 group hover:bg-white/15 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[9px] font-bold rounded uppercase tracking-wider">Positive</span>
                </div>
                <p className="text-xs text-white/80">Engineering exceeded output targets by <span className="text-emerald-400 font-bold">15%</span>. Consider recognition awards.</p>
                <div className="mt-4 flex gap-3">
                  <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors">View List</button>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Dismiss</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Score Chart */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <h4 className="font-bold text-sm mb-6">Avg Performance Score</h4>
          <div className="h-40 flex items-end justify-between gap-3">
            {[
              { label: "Eng", score: "85%", color: "primary" },
              { label: "Prod", score: "92%", color: "emerald-400" },
              { label: "Mkt", score: "75%", color: "amber-400" },
              { label: "Ops", score: "80%", color: "indigo-400" },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-lg relative overflow-hidden h-32">
                  <div className={`absolute bottom-0 w-full bg-${d.color} h-[${d.score}] rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer`} title={`${d.label}: ${d.score}`}></div>
                </div>
                <span className="text-[10px] font-bold">{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* HR Quick Glance */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-sm">HR Quick Glance</h4>
            <button className="text-[10px] font-bold text-primary uppercase">Settings</button>
          </div>
          <div className="space-y-5">
            {[
              { label: "Employees on Leave", value: "12", icon: "flight_takeoff", color: "orange" },
              { label: "Upcoming Birthdays", value: "3", icon: "cake", color: "rose" },
              { label: "Pending Promotions", value: "5", icon: "trending_up", color: "indigo" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`size-8 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-500/10 flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-${item.color}-600 !text-lg`}>{item.icon}</span>
                  </div>
                  <p className="text-xs font-bold">{item.label}</p>
                </div>
                <span className="text-xs font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">{item.value}</span>
              </div>
            ))}
            <div className="pt-4 border-t border-slate-50 dark:border-slate-800">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Next Event</p>
              <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="size-9 rounded-lg bg-white dark:bg-slate-900 shadow-sm flex flex-col items-center justify-center">
                  <span className="text-[9px] font-bold text-rose-600">OCT</span>
                  <span className="text-xs font-extrabold">24</span>
                </div>
                <div>
                  <p className="text-xs font-bold">Jordan's Birthday</p>
                  <p className="text-[9px] text-slate-500">Product Team • All Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Employees Table */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h4 className="font-bold text-lg">Active Employees</h4>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 !text-lg">search</span>
                <input className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-medium w-48 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="Search employees..." type="text"/>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 !text-sm">filter_list</span>
                  <select className="pl-8 pr-4 py-1.5 bg-slate-50 dark:bg-slate-800 border-none text-[11px] font-bold rounded-lg focus:ring-primary/20">
                    <option>All Departments</option>
                  </select>
                </div>
                <button className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                  <span className="material-symbols-outlined !text-lg">sort</span>
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 dark:bg-slate-800/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Performance</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                {[
                  { name: "Marcus Chen", email: "marcus.c@company.com", dept: "Engineering", role: "Lead Frontend", score: 4, status: "Online", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ55wlnvI7uIXP9JJOt-I4Q8zJli3OUfYuTJ0lqLVHkANSLBH1QDyv3RjlgQ_egOah-tFr_Lz2PG_UsaS9y5uiBI_hE7RjmSPJgSRvKtmUn8kWColZkIIImR-UezIXIVBxEb-_AWaHN2iQixExvoaSfZURMzhR501nKn85ucVTz8oMzuKWp44gIEQQO44tmy-70JzihgBRmfJiSHNrtMCHoPbqK9EGJNN8FhxmIPwwlsoE_ZWP1VCOAv1VUhGokl23YKuhCKXomg" },
                ].map((emp, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-9 rounded-full bg-slate-100 overflow-hidden shrink-0 relative">
                           <Image src={emp.avatar} alt={emp.name} fill className="object-cover" sizes="36px" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-bold group-hover:text-primary transition-colors">{emp.name}</p>
                          <p className="text-[10px] text-slate-500">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold rounded-lg uppercase tracking-wider">{emp.dept}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs font-medium">{emp.role}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(s => (
                          <span key={s} className={`material-symbols-outlined !text-sm ${s <= emp.score ? 'text-emerald-500 fill-1' : 'text-slate-200'}`}>star</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        <span className="size-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_horiz</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800">
            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400">Recent Activity</h4>
          </div>
          <div className="p-6 space-y-6 flex-1">
            {[
              { label: "New Hire Onboarding", detail: "Julian Moore completed documents", time: "2 mins ago", icon: "person_add", color: "primary" },
              { label: "Payroll Processed", detail: "Batch #882 for October cycle", time: "1 hour ago", icon: "payments", color: "emerald" },
            ].map((act, i) => (
              <div key={i} className="flex gap-4 relative">
                <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 z-10">
                  <span className="material-symbols-outlined !text-primary !text-lg">{act.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-bold">{act.label}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{act.detail}</p>
                  <p className="text-[9px] text-slate-400 mt-1 uppercase font-bold tracking-tighter">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
