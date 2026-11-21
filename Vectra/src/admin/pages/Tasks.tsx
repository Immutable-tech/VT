import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import { tasks } from "../data";

export default function Tasks() {
  return (
    <div>
      <PageHeader
        title="Tasks"
        subtitle="Work assigned to the team."
        buttonText="New Task"
      />
      <DataTable
        columns={[
          { key: "title", label: "Task" },
          { key: "project", label: "Project" },
          { key: "assignee", label: "Assigned To" },
          { key: "due", label: "Due Date" },
          { key: "status", label: "Status", badge: true },
        ]}
        rows={tasks}
      />
    </div>
  );
}
