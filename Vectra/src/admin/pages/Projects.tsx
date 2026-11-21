import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import { projects } from "../data";

export default function Projects() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="Track every software and ads project."
        buttonText="New Project"
      />
      <DataTable
        columns={[
          { key: "name", label: "Project" },
          { key: "client", label: "Client" },
          { key: "division", label: "Division" },
          { key: "progress", label: "Progress", format: (value) => value + "%" },
          { key: "due", label: "Due Date" },
          { key: "status", label: "Status", badge: true },
        ]}
        rows={projects}
      />
    </div>
  );
}
