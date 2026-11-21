import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import { team } from "../data";

export default function Team() {
  return (
    <div>
      <PageHeader
        title="Team Members"
        subtitle="The people behind Vectra Core."
        buttonText="Add Member"
      />
      <DataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "role", label: "Role" },
          { key: "division", label: "Division" },
          { key: "email", label: "Email" },
          { key: "status", label: "Status", badge: true },
        ]}
        rows={team}
      />
    </div>
  );
}
