import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-8 z-10 shrink-0">
      <div className="flex items-center gap-4 w-1/2">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 !text-xl">search</span>
          <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 transition-all" placeholder="Search employees, files, or actions..." type="text"/>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
          <span className="material-symbols-outlined !text-2xl">dark_mode</span>
        </button>
        <div className="relative group">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative">
            <span className="material-symbols-outlined !text-2xl">notifications</span>
            <span className="absolute top-2 right-2.5 size-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </button>
          <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 hidden group-focus-within:block z-50">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h5 className="font-bold text-sm">Notifications</h5>
              <span className="text-[10px] text-primary font-bold cursor-pointer uppercase">Mark all read</span>
            </div>
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              <div className="p-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer">
                <p className="text-xs font-bold">New Leave Request</p>
                <p className="text-[10px] text-slate-500">Sarah J. requested 2 days leave for next week.</p>
                <p className="text-[9px] text-slate-400 mt-1">Just now</p>
              </div>
              <div className="p-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer">
                <p className="text-xs font-bold">System Alert</p>
                <p className="text-[10px] text-slate-500">Payroll processing for October is complete.</p>
                <p className="text-[9px] text-slate-400 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="p-3 text-center border-t border-slate-100 dark:border-slate-800">
              <button className="text-[10px] font-bold text-primary uppercase">View All Notifications</button>
            </div>
          </div>
        </div>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold leading-none text-slate-900 dark:text-white">Alex Rivera</p>
            <p className="text-[10px] text-slate-500 font-medium">HR Director</p>
          </div>
          <div className="size-9 rounded-full bg-slate-200 border border-slate-200 dark:border-slate-700 overflow-hidden relative">
            <Image 
              alt="User avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwqxHIyT1IHZnSV4oSD2n9RCNNVMxm_F35-5SsLqPlh20oO6177oPcbRcpmq0qxKDHq0gXl7BsfeTnXlFHehwjfvRk-_vPuP41a7clFBP31QcE-4sO2Rwb4Jo-KXCDMeSKte9AdPrI_mHcDlcdk2TmGqX1qc0gHKDSy76OXAeT_Q52vfphHF7ZOdjGjh5b6MbG0oWaLY2SFFR1pDjBHcZRQ6G1Kt4qDNURM1lh1_QCK0OPbawfCxJiJDpeUc78JzUnFfPuOyH2xg"
              fill
              sizes="36px"
            />
          </div>
          <span className="material-symbols-outlined text-slate-400 !text-lg group-hover:text-primary transition-colors">expand_more</span>
        </div>
      </div>
    </header>
  );
}
