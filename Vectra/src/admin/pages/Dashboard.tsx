import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import DataTable from "../components/DataTable";
import StatusBadge from "../components/StatusBadge";
import { projects, leads, invoices, tasks, formatMoney } from "../data";
import type { PageName } from "../menu";

type DashboardProps = {
  goTo: (page: PageName) => void;
};

export default function Dashboard({ goTo }: DashboardProps) {
  const activeProjects = projects.filter((p) => p.status === "In progress").length;
  const newLeads = leads.filter((l) => l.status === "New").length;
  const unpaid = invoices.filter((i) => i.status !== "Paid");
  const unpaidTotal = unpaid.reduce((sum, i) => sum + i.amount, 0);
  const paidTotal = invoices
    .filter((i) => i.status === "Paid")
    .reduce((sum, i) => sum + i.amount, 0);
  const openTasks = tasks.filter((t) => t.status !== "Done");

  return (
    <div>
      <PageHeader title="Dashboard" subtitle="A quick look at how Vectra Core is doing." />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active Projects" value={activeProjects} note="Currently in progress" />
        <StatCard label="New Leads" value={newLeads} note="Waiting for a reply" />
        <StatCard label="Unpaid Invoices" value={formatMoney(unpaidTotal)} note={`${unpaid.length} invoices open`} />
        <StatCard label="Money Received" value={formatMoney(paidTotal)} note="From paid invoices" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Latest Leads</h2>
            <button onClick={() => goTo("Leads")} className="text-sm font-semibold text-red-600">
              View all
            </button>
          </div>
          <DataTable
            searchable={false}
            columns={[
              { key: "name", label: "Name" },
              { key: "service", label: "Service" },
              { key: "status", label: "Status", badge: true },
            ]}
            rows={leads.slice(0, 4)}
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Open Tasks</h2>
            <button onClick={() => goTo("Tasks")} className="text-sm font-semibold text-red-600">
              View all
            </button>
          </div>
          <div className="rounded border border-gray-200 bg-white">
            {openTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between border-b border-gray-100 p-4 last:border-b-0"
              >
                <div>
                  <p className="font-semibold text-gray-900">{task.title}</p>
                  <p className="text-sm text-gray-500">
                    {task.assignee} - due {task.due}
                  </p>
                </div>
                <StatusBadge value={task.status} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="mb-2 mt-6 text-lg font-bold text-gray-900">Project Progress</h2>
      <div className="rounded border border-gray-200 bg-white p-4">
        {projects.map((project) => (
          <div key={project.id} className="mb-4 last:mb-0">
            <div className="mb-1 flex justify-between text-sm">
              <span className="font-semibold text-gray-900">{project.name}</span>
              <span className="text-gray-500">{project.progress}%</span>
            </div>
            <div className="h-2 rounded bg-gray-200">
              <div className="h-2 rounded bg-red-600" style={{ width: `${project.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
