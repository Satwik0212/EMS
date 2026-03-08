import Image from "next/image";

export default function EmployeeDashboard() {
  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8 space-y-8 custom-scrollbar">
      {/* Welcome Section */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Good Morning, Emily 👋</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
            You improved your performance score by <span className="text-green-600 font-bold">6%</span> this quarter. Keep up the great work!
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">edit</span> Edit Profile
          </button>
          <button className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">reviews</span> Request Review
          </button>
          <button className="px-4 py-2.5 rounded-xl bg-primary text-white font-bold text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all">
            <span className="material-symbols-outlined text-lg">download</span> Download Report
          </button>
        </div>
      </section>

      {/* Top Row: Profile and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/40"></div>
          <div className="px-8 pb-8 -mt-12">
            <div className="flex items-end gap-6 mb-6">
              <div className="size-32 rounded-2xl border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden relative bg-slate-100">
                <Image 
                  alt="Emily Carter" 
                  className="object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqggqBHPbxyAdLRZN5bqnIK37hQi2XIVtuSTV8WYNg01SgvR83WKshc1dmFhFjSOGc-aJSkXVpBcT7fgfEUasGcjTfCIfFW8ss_Nb8smBUeX5QZ6J8_KujqwMuJAIQ0H1MpPZyVB4pZyVB4pTJ6Z9_M39m5eEes3XhaPUi2mB_xJUVXQg4jpMTsJo8eDoCnNAmh-kdoZIPjutOfhXHSlrJktJTYG9AEmNz2bXIP37D0ydcx-i7T5PILLLKEQ3FkOD0Wkt5a6orwnFy66SQ"
                  fill
                  sizes="128px"
                />
              </div>
              <div className="pb-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Emily Carter</h3>
                <p className="text-primary font-semibold">Marketing Specialist • Marketing Department</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              {[
                { label: "Employee ID", value: "STR-9920" },
                { label: "Joined", value: "Mar 2022" },
                { label: "Manager", value: "Sarah Johnson" },
                { label: "Location", value: "New York, NY" },
                { label: "Type", value: "Full-time", badge: "bg-green-100 text-green-700" },
                { label: "Email", value: "emily.carter@company.com" },
              ].map((info, i) => (
                <div key={i}>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">{info.label}</p>
                  {info.badge ? (
                    <span className={`inline-flex mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${info.badge}`}>{info.value}</span>
                  ) : (
                    <p className="text-slate-700 dark:text-slate-200 font-semibold mt-1 truncate">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Score Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center text-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Performance Score</h3>
          <div className="relative flex items-center justify-center my-6">
            <div className="radial-progress size-40 rounded-full flex items-center justify-center">
              <div className="bg-white dark:bg-slate-900 size-32 rounded-full flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-slate-900 dark:text-white">85</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Out of 100</span>
              </div>
            </div>
          </div>
          <div className="w-full space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">vs Last Quarter</span>
              <span className="text-green-600 font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> +6%
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Dept. Rank</span>
              <span className="text-slate-900 dark:text-white font-bold">Top 20%</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Next Review</span>
              <span className="text-primary font-bold">45 Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Chart and Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Salary Evolution Chart */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Salary Evolution</h3>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">2022 - 2024</span>
          </div>
          <div className="relative h-64 w-full flex items-end gap-2">
            {[
              { year: "2022", value: "$65K", height: "65%", opacity: "20", hint: "Base" },
              { year: "2023", value: "$72K", height: "72%", opacity: "40", hint: "+11%" },
              { year: "2024", value: "$78K", height: "78%", opacity: "100", hint: "+8%" },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer">
                <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-t-xl overflow-hidden" style={{ height: bar.height }}>
                  <div className={`absolute bottom-0 w-full bg-primary h-full opacity-${bar.opacity}`}></div>
                  <div className="absolute top-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded">{bar.hint}</span>
                  </div>
                </div>
                <p className="text-center mt-3 text-xs font-bold text-slate-500">{bar.year} ({bar.value})</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promotion Timeline */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-8">Career Timeline</h3>
          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
            {[
              { role: "Marketing Specialist", tag: "Promoted", date: "Jan 2025 • Strategy & Ops", active: true, icon: "stars" },
              { role: "Marketing Executive", tag: "Promotion", date: "Jul 2023 • Brand Management", active: false, icon: "trending_up" },
              { role: "Marketing Associate", date: "Mar 2022 • Joined Stratum EMS", active: false, icon: "work" },
            ].map((item, i) => (
              <div key={i} className="relative pl-8">
                <div className={`absolute left-0 top-1 size-6 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-slate-900 ${item.active ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
                  <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className={`font-bold text-slate-900 dark:text-white ${!item.active && 'opacity-70'}`}>{item.role}</h4>
                    {item.tag && (
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${item.active ? 'bg-primary/10 text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-50'}`}>{item.tag}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insight & Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-gradient-to-br from-indigo-600 to-primary p-1 rounded-2xl shadow-lg shadow-primary/20">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 flex gap-6 items-start">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">AI Career Insight</h3>
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-[10px] font-black">BETA</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  You rank in the <span className="font-bold text-primary">top 18%</span> of your department based on KPI performance and peer reviews. 
                  Based on current trends, you are <span className="text-slate-900 dark:text-white font-bold underline decoration-primary/40">likely eligible for promotion</span> to Senior Marketing Specialist within 6-9 months.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Current Goals</h3>
            <div className="space-y-6">
              {[
                { label: "Q2 Campaign ROI Improvement", progress: "82%", status: "On Track", color: "primary", pulse: true },
                { label: "Advanced Analytics Certification", progress: "45%", status: "In Progress", color: "orange-400" },
                { label: "Lead Product Launch Event", progress: "100%", status: "Completed", color: "green-500", icon: "check_circle" },
              ].map((goal, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-slate-700 dark:text-slate-200">{goal.label}</span>
                    <span className="text-slate-500 font-medium">{goal.progress}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-${goal.color.startsWith('primary') ? 'primary' : goal.color} rounded-full`} style={{ width: goal.progress }}></div>
                  </div>
                  <div className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-${goal.color.startsWith('primary') ? 'primary' : (goal.color.includes('orange') ? 'orange-500' : 'green-500')}`}>
                    {goal.icon ? <span className="material-symbols-outlined text-[12px]">{goal.icon}</span> : <span className={`size-1.5 rounded-full ${goal.color.startsWith('primary') ? 'bg-primary' : (goal.color.includes('orange') ? 'bg-orange-500' : 'bg-green-500')} ${goal.pulse && 'animate-pulse'}`}></span>}
                    {goal.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {[
                { month: "JAN", day: "22", title: "Quarterly Review", time: "10:00 AM • Zoom", color: "bg-primary/10 text-primary" },
                { month: "JAN", day: "24", title: "Marketing Sync", time: "02:30 PM • Room 402", color: "bg-slate-100 dark:bg-slate-800 text-slate-500" },
                { month: "JAN", day: "28", title: "AI Workshop", time: "09:00 AM • Online", color: "bg-slate-100 dark:bg-slate-800 text-slate-500" },
              ].map((event, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                  <div className={`size-10 rounded-lg flex flex-col items-center justify-center ${event.color}`}>
                    <span className="text-[10px] font-bold">{event.month}</span>
                    <span className="text-sm font-black">{event.day}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{event.title}</h4>
                    <p className="text-xs text-slate-500">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Recent Activity</h3>
            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-slate-100 dark:before:bg-slate-800">
              {[
                { title: "Salary updated", time: "Yesterday at 4:30 PM", icon: "payments", bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-100 dark:border-green-800", text: "text-green-600" },
                { title: "Review submitted", time: "2 days ago", icon: "rate_review", bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-100 dark:border-blue-800", text: "text-blue-600" },
                { title: "Course completed", time: "5 days ago", icon: "school", bg: "bg-purple-50 dark:bg-purple-900/20", border: "border-purple-100 dark:border-purple-800", text: "text-purple-600" },
              ].map((act, i) => (
                <div key={i} className="relative pl-10">
                  <div className={`absolute left-0 top-0 size-10 rounded-full ${act.bg} border ${act.border} flex items-center justify-center ${act.text}`}>
                    <span className="material-symbols-outlined text-sm">{act.icon}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{act.title}</h4>
                  <p className="text-[10px] text-slate-500">{act.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-auto px-8 py-6 text-center text-slate-400 text-xs">
        © 2024 Stratum EMS. All rights reserved. • <a className="hover:text-primary underline" href="#">Privacy Policy</a> • <a className="hover:text-primary underline" href="#">Support</a>
      </footer>
    </div>
  );
}
