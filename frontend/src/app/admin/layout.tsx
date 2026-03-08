import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import "@/styles/admin-dashboard.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
