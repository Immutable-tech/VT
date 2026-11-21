import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import { clients } from "../data";

export default function Clients() {
  return (
    <div>
      <PageHeader
        title="Clients"
        subtitle="Everyone Vectra Core works with."
        buttonText="Add Client"
      />
      <DataTable
        columns={[
          { key: "name", label: "Business" },
          { key: "contact", label: "Contact Person" },
          { key: "phone", label: "Phone" },
          { key: "email", label: "Email" },
          { key: "projects", label: "Projects" },
          { key: "status", label: "Status", badge: true },
        ]}
        rows={clients}
      />
    </div>
  );
}
