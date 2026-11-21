import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";
import { invoices, formatMoney } from "../data";

export default function Invoices() {
  return (
    <div>
      <PageHeader
        title="Invoices"
        subtitle="Money owed to and received by Vectra Core."
        buttonText="Create Invoice"
      />
      <DataTable
        columns={[
          { key: "id", label: "Invoice" },
          { key: "client", label: "Client" },
          { key: "amount", label: "Amount", format: formatMoney },
          { key: "issued", label: "Issued" },
          { key: "due", label: "Due" },
          { key: "status", label: "Status", badge: true },
        ]}
        rows={invoices}
      />
    </div>
  );
}
