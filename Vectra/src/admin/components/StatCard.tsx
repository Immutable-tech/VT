type StatCardProps = {
  label: string;
  value: string | number;
  note: string;
};

export default function StatCard({ label, value, note }: StatCardProps) {
  return (
    <div className="rounded border border-gray-200 border-l-4 border-l-red-600 bg-white p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-3xl font-bold text-gray-900">{value}</p>
      <p className="mt-1 text-sm text-gray-500">{note}</p>
    </div>
  );
}
