import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import { leads } from "../data";

export default function Leads() {
  return (
    <div>
      <PageHeader
        title="Leads and Enquiries"
        subtitle="People who asked about our services."
        buttonText="Add Lead"
      />
      <DataTable
        columns={[
          { key: "name", label: "Name" },
          { key: "service", label: "Service" },
          { key: "phone", label: "Phone" },
          { key: "date", label: "Date" },
          { key: "status", label: "Status", badge: true },
        ]}
        rows={leads}
      />
    </div>
  );
}
