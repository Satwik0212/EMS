import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

const employees = [
  { id: "STR-9920", name: "Marcus Chen", email: "marcus.c@company.com", dept: "Engineering", role: "Lead Frontend", score: 4.8, status: "Active", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ55wlnvI7uIXP9JJOt-I4Q8zJli3OUfYuTJ0lqLVHkANSLBH1QDyv3RjlgQ_egOah-tFr_Lz2PG_UsaS9y5uiBI_hE7RjmSPJgSRvKtmUn8kWColZkIIImR-UezIXIVBxEb-_AWaHN2iQixExvoaSfZURMzhR501nKn85ucVTz8oMzuKWp44gIEQQO44tmy-70JzihgBRmfJiSHNrtMCHoPbqK9EGJNN8FhxmIPwwlsoE_ZWP1VCOAv1VUhGokl23YKuhCKXomg" },
  { id: "STR-9921", name: "Sarah Johnson", email: "sarah.j@company.com", dept: "Product", role: "Product Manager", score: 4.5, status: "Away", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwqxHIyT1IHZnSV4oSD2n9RCNNVMxm_F35-5SsLqPlh20oO6177oPcbRcpmq0qxKDHq0gXl7BsfeTnXlFHehwjfvRk-_vPuP41a7clFBP31QcE-4sO2Rwb4Jo-KXCDMeSKte9AdPrI_mHcDlcdk2TmGqX1qc0gHKDSy76OXAeT_Q52vfphHF7ZOdjGjh5b6MbG0oWaLY2SFFR1pDjBHcZRQ6G1Kt4qDNURM1lh1_QCK0OPbawfCxJiJDpeUc78JzUnFfPuOyH2xg" },
  { id: "STR-9922", name: "David Kim", email: "david.k@company.com", dept: "Engineering", role: "Backend Architect", score: 4.9, status: "Active", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ55wlnvI7uIXP9JJOt-I4Q8zJli3OUfYuTJ0lqLVHkANSLBH1QDyv3RjlgQ_egOah-tFr_Lz2PG_UsaS9y5uiBI_hE7RjmSPJgSRvKtmUn8kWColZkIIImR-UezIXIVBxEb-_AWaHN2iQixExvoaSfZURMzhR501nKn85ucVTz8oMzuKWp44gIEQQO44tmy-70JzihgBRmfJiSHNrtMCHoPbqK9EGJNN8FhxmIPwwlsoE_ZWP1VCOAv1VUhGokl23YKuhCKXomg" },
  { id: "STR-9923", name: "Elena Rodriguez", email: "elena.r@company.com", dept: "Marketing", role: "Content Lead", score: 4.2, status: "Offline", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqggqBHPbxyAdLRZN5bqnIK37hQi2XIVtuSTV8WYNg01SgvR83WKshc1dmFhFjSOGc-aJSkXVpBcT7fgfEUasGcjTfCIfFW8ss_Nb8smBUeX5QZ6J8_KujqwMuJAIQ0H1MpPZyVB4pZyVB4pTJ6Z9_M39m5eEes3XhaPUi2mB_xJUVXQg4jpMTsJo8eDoCnNAmh-kdoZIPjutOfhXHSlrJktJTYG9AEmNz2bXIP37D0ydcx-i7T5PILLLKEQ3FkOD0Wkt5a6orwnFy66SQ" },
];

export default function EmployeeListPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8 space-y-8 custom-scrollbar">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Employees</h2>
          <p className="text-slate-500 mt-1">Manage and monitor employee status and performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined !text-lg">file_download</span>
            Export List
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/25 hover:opacity-90 transition-all">
            <span className="material-symbols-outlined !text-lg">person_add</span>
            Add Employee
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 !text-lg">search</span>
              <input 
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs font-medium w-64 focus:ring-1 focus:ring-primary/50 transition-all" 
                placeholder="Search by name, email, or ID..." 
                type="text"
              />
            </div>
            <select className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border-none text-[11px] font-bold rounded-lg focus:ring-primary/20 cursor-pointer">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Product Management</option>
              <option>Marketing</option>
              <option>HR & Ops</option>
            </select>
            <select className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border-none text-[11px] font-bold rounded-lg focus:ring-primary/20 cursor-pointer">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>On Leave</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined !text-lg">grid_view</span>
            </button>
            <button className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined !text-lg">list</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 dark:bg-slate-800/50 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Employee ID</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Performance</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {employees.map((emp, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-4">
                    <Link href={`/employees/${emp.id}`} className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-slate-100 overflow-hidden shrink-0 relative border-2 border-white dark:border-slate-800 shadow-sm">
                        <Image src={emp.avatar} alt={emp.name} fill className="object-cover" sizes="40px" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-bold group-hover:text-primary transition-colors">{emp.name}</p>
                        <p className="text-[11px] text-slate-500">{emp.email}</p>
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono font-semibold text-slate-400">
                    {emp.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{emp.dept}</p>
                      <p className="text-[10px] text-slate-500">{emp.role}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <div className="w-16 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full bg-${emp.score >= 4.5 ? 'emerald' : 'primary'}-500 rounded-full`} style={{ width: `${(emp.score / 5) * 100}%` }}></div>
                       </div>
                       <span className="text-xs font-bold">{emp.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={emp.status === 'Active' ? 'success' : 'ghost'}>
                      <span className={`size-1 rounded-full mr-1.5 ${emp.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
                      {emp.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                      <span className="material-symbols-outlined !text-xl">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">Showing <span className="text-slate-900 dark:text-white font-bold">1-4</span> of <span className="text-slate-900 dark:text-white font-bold">1,248</span> employees</p>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-primary transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3, "...", 124].map((p, i) => (
                <button key={i} className={`size-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${p === 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                  {p}
                </button>
              ))}
            </div>
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
