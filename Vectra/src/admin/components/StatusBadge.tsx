const styles: Record<string, string> = {
  Active: "bg-red-600 text-white",
  Paid: "bg-red-600 text-white",
  Completed: "bg-red-600 text-white",
  Won: "bg-red-600 text-white",
  Done: "bg-red-600 text-white",
  Published: "bg-red-600 text-white",
  New: "border border-red-600 text-red-600",
  Contacted: "border border-red-600 text-red-600",
  Pending: "border border-red-600 text-red-600",
  "In progress": "border border-red-600 text-red-600",
  Draft: "border border-red-600 text-red-600",
  Overdue: "bg-red-800 text-white",
  Lost: "bg-gray-200 text-gray-700",
  Inactive: "bg-gray-200 text-gray-700",
};

export default function StatusBadge({ value }: { value: string }) {
  const style = styles[value] || "bg-gray-200 text-gray-700";
  return (
    <span className={`inline-block rounded px-2 py-1 text-xs font-semibold ${style}`}>
      {value}
    </span>
  );
}
