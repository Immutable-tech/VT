import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { menu } from "./menu";
import type { PageName } from "./menu";

type AdminLayoutProps = {
  current: PageName;
  onNavigate: (page: PageName) => void;
  children: ReactNode;
};

export default function AdminLayout({ current, onNavigate, children }: AdminLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function openPage(page: PageName) {
    onNavigate(page);
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 md:flex">
      <aside
        className={`${menuOpen ? "block" : "hidden"} w-full bg-red-600 text-white md:sticky md:top-0 md:block md:h-screen md:w-64 md:shrink-0 md:overflow-y-auto`}
      >
        <div className="border-b border-white/30 p-5">
          <p className="text-xl font-bold">Vectra Tech</p>
          <p className="text-sm">Admin Panel</p>
        </div>
        <nav className="p-3">
          {menu.map((section) => (
            <div key={section.group} className="mb-4">
              <p className="px-3 pb-1 text-xs font-semibold uppercase text-white/70">
                {section.group}
              </p>
              {section.links.map((link) => (
                <button
                  key={link.page}
                  onClick={() => openPage(link.page)}
                  className={`block w-full rounded px-3 py-2 text-left font-medium ${
                    current === link.page ? "bg-white text-red-600" : "text-white hover:bg-red-700"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          ))}
          <Link to="/" className="block rounded px-3 py-2 font-medium text-white hover:bg-red-700">
            View Website
          </Link>
        </nav>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded border border-red-600 px-3 py-1 font-semibold text-red-600 md:hidden"
          >
            Menu
          </button>
          <p className="hidden font-semibold text-gray-900 md:block">Welcome back</p>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Admin</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 font-bold text-white">
              V
            </span>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
