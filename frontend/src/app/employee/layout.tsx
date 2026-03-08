import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import "@/styles/employee-dashboard.css";

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar role="employee" />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
