import { useState } from "react";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import { portfolio } from "../data";

export default function Portfolio() {
  const [items, setItems] = useState(portfolio);

  function removeItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <PageHeader
        title="Portfolio"
        subtitle="Projects shown on the Vectra Core website."
        buttonText="Add Project"
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="rounded border border-gray-200 bg-white">
            <div className="flex h-40 items-center justify-center bg-gray-100 text-gray-500">
              Project image
            </div>
            <div className="p-4">
              <div className="mb-1 flex items-center justify-between">
                <p className="font-bold text-gray-900">{item.title}</p>
                <StatusBadge value={item.status} />
              </div>
              <p className="mb-4 text-sm text-gray-500">{item.category}</p>
              <div className="flex gap-2">
                <button className="rounded bg-red-600 px-3 py-1 text-sm font-semibold text-white hover:bg-red-700">
                  Edit
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="rounded border border-red-600 px-3 py-1 text-sm font-semibold text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && (
        <p className="py-10 text-center text-gray-500">
          No portfolio projects yet. Click Add Project to create one.
        </p>
      )}
    </div>
  );
}
