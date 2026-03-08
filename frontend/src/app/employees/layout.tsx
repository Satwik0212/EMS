import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function EmployeesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar role="admin" />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
