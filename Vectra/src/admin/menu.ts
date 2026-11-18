export type PageName =
  | "Dashboard"
  | "Clients"
  | "Projects"
  | "Leads"
  | "Invoices"
  | "Team Members"
  | "Tasks"
  | "Portfolio"
  | "Gallery";

type MenuSection = {
  group: string;
  links: { page: PageName; label: string }[];
};

export const menu: MenuSection[] = [
  {
    group: "Overview",
    links: [{ page: "Dashboard", label: "Dashboard" }],
  },
  {
    group: "Business",
    links: [
      { page: "Clients", label: "Clients" },
      { page: "Projects", label: "Projects" },
      { page: "Leads", label: "Leads" },
      { page: "Invoices", label: "Invoices" },
    ],
  },
  {
    group: "Team",
    links: [
      { page: "Team Members", label: "Team Members" },
      { page: "Tasks", label: "Tasks" },
    ],
  },
  {
    group: "Website Content",
    links: [
      { page: "Portfolio", label: "Portfolio" },
      { page: "Gallery", label: "Gallery" },
    ],
  },
];
