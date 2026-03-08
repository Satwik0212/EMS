import Image from "next/image";
import "@/styles/employee-profile.css";

export default function EmployeeProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8 space-y-8 custom-scrollbar">
      {/* Breadcrumbs & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-1">
            <span>Dashboard</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span>Employees</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary font-medium tracking-tight">Emily Carter</span>
          </nav>
          <h2 className="text-2xl font-extrabold tracking-tight">Employee Profile</h2>
          <p className="text-sm text-slate-500 mt-1 font-medium italic">Viewing detailed performance analytics and history for {params.id}.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all btn-scale">
            <span className="material-symbols-outlined text-[18px]">edit</span> Edit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all btn-scale">
            <span className="material-symbols-outlined text-[18px]">payments</span> Adjust Salary
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all btn-scale">
            <span className="material-symbols-outlined text-[18px]">trending_up</span> Promote
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Basic Info & Activity */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Main Profile Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden hover-lift">
            <div className="absolute top-0 right-0 p-6">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-widest">Active</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="size-32 rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl relative shrink-0">
                <Image 
                  alt="Emily Carter" 
                  className="object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNEU8oxqXIE3uTUHm9GvrY44wbzeQ-dhN7a0aimJX_fSTsuiFl3hsKt2CI6XvYcgignJRyn2KIzov538cSaiSMwAw0xvA0uJ-wOFxnEwIG3gx9wnL7adUslHQWBzFDxbPLQqqrFDxQkIlPnhob-y8a7JPtYTt90GOeSe7EgzZkIOUMmR385CX4K5Dyp08dc9LsVZRpZqZn8PD_A4tbFsCBnQpcF9XxwV9vU3L8Ok0pO_THG0r8worrz7pr92aBJVjZkg13UKzv4Q"
                  fill
                  sizes="128px"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-3xl font-extrabold tracking-tight">Emily Carter</h3>
                  <p className="text-primary font-semibold">Marketing Specialist • Marketing & Communications</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: "ID", value: "STR-9920" },
                    { label: "Manager", value: "Sarah Johnson" },
                    { label: "Location", value: "New York, US" },
                    { label: "Salary", value: "$78,000/yr", highlight: true },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">{item.label}</p>
                      <p className={`font-bold text-sm ${item.highlight ? 'text-primary' : ''}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                   {[
                     { icon: "mail", value: "emily.carter@stratum.com" },
                     { icon: "calendar_today", value: "Joined Mar 2022" },
                     { icon: "badge", value: "Full-time" }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-2 text-xs bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-800">
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">{item.icon}</span>
                        {item.value}
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover-lift">
               <h4 className="font-bold text-sm mb-6 flex items-center justify-between">Salary Evolution<span className="text-[10px] uppercase text-slate-400 font-bold">Compounded +19%</span></h4>
               <div className="h-40 flex items-end justify-between gap-6 px-4">
                 {[
                   { year: "2022", value: "$65k", height: "65%", opacity: "20" },
                   { year: "2023", value: "$72k", height: "72%", opacity: "40", change: "+10.7%" },
                   { year: "2024", value: "$78k", height: "78%", opacity: "100", change: "+8.3%", current: true }
                 ].map((bar, i) => (
                   <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className={`w-full rounded-t-lg relative transition-all ${bar.current ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800'}`} style={{ height: bar.height }}>
                        {!bar.current && <div className={`absolute inset-0 bg-primary opacity-${bar.opacity} rounded-t-lg`}></div>}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <span className="bg-slate-900 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap">{bar.value}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{bar.year}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover-lift">
               <h4 className="font-bold text-sm mb-6 flex items-center justify-between">Performance Trend<span className="text-[10px] uppercase text-slate-400 font-bold">Consistently High</span></h4>
               <div className="h-40 relative flex flex-col justify-end">
                  <svg className="w-full h-24 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <path d="M0,35 C10,33 15,31 25,30 C35,29 40,33 50,32 C60,31 65,25 75,22 C85,19 90,12 100,10" fill="none" stroke="#5048e5" strokeWidth="2.5" strokeLinecap="round" />
                    {[0, 25, 50, 75, 100].map((x, i) => (
                      <circle key={i} cx={x} cy={[35, 30, 32, 22, 10][i]} r={x === 100 ? 3.5 : 2.5} fill="#5048e5" className="chart-dot" />
                    ))}
                  </svg>
                  <div className="flex justify-between mt-6">
                    {["Q1 23", "Q2", "Q3", "Q4 23"].map((q, i) => (
                      <span key={i} className="text-[9px] text-slate-400 font-black uppercase tracking-tighter">{q}</span>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-l-4 border-primary shadow-sm hover-lift">
            <h4 className="text-lg font-bold flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              AI Assistant: Performance Insights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/20">
                <p className="text-xs font-black text-green-600 dark:text-green-400 uppercase mb-3 tracking-widest">Key Strengths</p>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold">•</span> Exceptional campaign ROI (+15% vs target)</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold">•</span> Strong proficiency in Google Ads suite</li>
                  <li className="flex items-start gap-2"><span className="text-green-500 font-bold">•</span> Praised for cross-team collaboration</li>
                </ul>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/20">
                <p className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase mb-3 tracking-widest">Focus Areas</p>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                   <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span> Scaling new market lead gen strategies</li>
                   <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span> Benefit from advanced leadership training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Milestones */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
           <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover-lift">
             <h4 className="font-bold text-sm mb-6">Overall Rating</h4>
             <div className="flex flex-col items-center">
                <div className="size-32 relative">
                   <svg className="size-full transform -rotate-90" viewBox="0 0 32 32">
                     <circle className="text-slate-100 dark:text-slate-800" cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
                     <circle className="text-primary" cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="75 100" strokeLinecap="round" />
                   </svg>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-black">4.8</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Score</span>
                   </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Peer Review</p>
                    <p className="text-base font-extrabold">4.9/5</p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">KPI Achievement</p>
                    <p className="text-base font-extrabold">92%</p>
                  </div>
                </div>
             </div>
           </div>

           <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover-lift">
             <h4 className="font-bold text-sm mb-6 flex items-center justify-between">Career Milestones <button className="text-[10px] text-primary font-bold uppercase underline">View All</button></h4>
             <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-slate-100 dark:before:bg-slate-800">
                {[
                  { date: "JAN 2025", title: "Marketing Specialist", desc: "Current Role • Promoted for performance", icon: "stars", current: true },
                  { date: "JUL 2023", title: "Marketing Executive", desc: "Strategy Lead • Brand Ops", icon: "military_tech" },
                  { date: "MAR 2022", title: "Associate Analyst", desc: "Joined Stratum EMS • NY Branch", icon: "person_add" }
                ].map((m, i) => (
                  <div key={i} className="relative pl-12">
                    <div className={`absolute left-0 top-0 size-10 border-4 border-white dark:border-slate-900 rounded-full flex items-center justify-center z-10 shadow-sm ${m.current ? 'bg-primary text-white' : 'bg-slate-50 dark:bg-slate-800 text-slate-400'}`}>
                      <span className="material-symbols-outlined !text-xl">{m.icon}</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{m.date}</span>
                       <span className={`text-sm font-bold ${m.current ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>{m.title}</span>
                       <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
