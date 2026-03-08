import Link from "next/link";

interface SidebarProps {
  role?: "admin" | "employee";
}

export default function Sidebar({ role = "admin" }: SidebarProps) {
  const isAdmin = role === "admin";
  
  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0 h-full">
      <div className="p-6 flex items-center gap-3">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined !text-xl">{isAdmin ? 'grid_view' : 'layers'}</span>
        </div>
        <h1 className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
          Stratum{isAdmin ? <span className="text-primary">.</span> : ' EMS'}
        </h1>
      </div>
      <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
        <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          {isAdmin ? 'Main Menu' : 'Menu'}
        </p>
        
        <Link href={isAdmin ? "/admin/dashboard" : "/employee/dashboard"} className="flex items-center gap-3 px-3 py-2.5 rounded-lg sidebar-item-active group transition-all">
          <span className="material-symbols-outlined !text-[22px]">dashboard</span>
          <span className="text-sm font-semibold">Dashboard</span>
        </Link>

        {isAdmin ? (
          <>
            <Link href="/employees" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined !text-[22px]">group</span>
              <span className="text-sm font-medium">Employees</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined !text-[22px]">domain</span>
              <span className="text-sm font-medium">Departments</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined !text-[22px]">calendar_today</span>
              <span className="text-sm font-medium">Attendance</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined !text-[22px]">monitoring</span>
              <span className="text-sm font-medium">Performance</span>
            </Link>
            
            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-2">Operations</p>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined !text-[22px]">payments</span>
              <span className="text-sm font-medium">Payroll</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined !text-[22px]">analytics</span>
              <span className="text-sm font-medium">Reports</span>
            </Link>
          </>
        ) : (
          <>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined !text-[22px]">trending_up</span>
              <span className="text-sm font-medium">Performance</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined !text-[22px]">military_tech</span>
              <span className="text-sm font-medium">Career Path</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-outlined !text-[22px]">description</span>
              <span className="text-sm font-medium">Documents</span>
            </Link>
          </>
        )}
        
        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
          <span className="material-symbols-outlined !text-[22px]">settings</span>
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className="bg-primary/5 rounded-xl p-4 flex flex-col gap-3">
          <p className="text-xs font-medium text-primary">Storage Used</p>
          <div className="w-full bg-primary/10 rounded-full h-1.5">
            <div className="bg-primary h-1.5 rounded-full w-[65%]"></div>
          </div>
          <p className="text-[10px] text-slate-500">Upgrade to Pro for unlimited storage and reports.</p>
        </div>
      </div>
    </aside>
  );
}
