import { useState } from "react";
import AdminLayout from "../admin/AdminLayout";
import type { PageName } from "../admin/menu";
import Dashboard from "../admin/pages/Dashboard";
import Clients from "../admin/pages/Clients";
import Projects from "../admin/pages/Projects";
import Leads from "../admin/pages/Leads";
import Invoices from "../admin/pages/Invoices";
import Team from "../admin/pages/Team";
import Tasks from "../admin/pages/Tasks";
import Portfolio from "../admin/pages/Portfolio";
import Gallery from "../admin/pages/Gallery";

export default function Adminpanel() {
  const [page, setPage] = useState<PageName>("Dashboard");

  function showPage() {
    if (page === "Clients") return <Clients />;
    if (page === "Projects") return <Projects />;
    if (page === "Leads") return <Leads />;
    if (page === "Invoices") return <Invoices />;
    if (page === "Team Members") return <Team />;
    if (page === "Tasks") return <Tasks />;
    if (page === "Portfolio") return <Portfolio />;
    if (page === "Gallery") return <Gallery />;
    return <Dashboard goTo={setPage} />;
  }

  return (
    <AdminLayout current={page} onNavigate={setPage}>
      {showPage()}
    </AdminLayout>
  );
}
