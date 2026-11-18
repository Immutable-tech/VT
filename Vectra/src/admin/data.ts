export const clients = [
  { id: 1, name: "Mama Mboga Fresh", contact: "Grace Wanjiru", phone: "0712 000 111", email: "grace@example.com", projects: 2, status: "Active" },
  { id: 2, name: "Kirinyaga Hardware", contact: "Peter Mwangi", phone: "0722 000 222", email: "peter@example.com", projects: 1, status: "Active" },
  { id: 3, name: "Sunrise Academy", contact: "Mary Achieng", phone: "0733 000 333", email: "mary@example.com", projects: 1, status: "Active" },
  { id: 4, name: "Bluebird Salon", contact: "Faith Njeri", phone: "0701 000 444", email: "faith@example.com", projects: 1, status: "Inactive" },
  { id: 5, name: "Savanna Guest House", contact: "John Kamau", phone: "0745 000 555", email: "john@example.com", projects: 2, status: "Active" },
];

export const projects = [
  { id: 1, name: "Online Shop and M-Pesa Checkout", client: "Mama Mboga Fresh", division: "Software", progress: 70, due: "2026-12-05", status: "In progress" },
  { id: 2, name: "Stock and Sales POS", client: "Kirinyaga Hardware", division: "Software", progress: 40, due: "2027-01-15", status: "In progress" },
  { id: 3, name: "School Website", client: "Sunrise Academy", division: "Software", progress: 100, due: "2026-10-30", status: "Completed" },
  { id: 4, name: "Social Media Campaign", client: "Bluebird Salon", division: "Ads", progress: 100, due: "2026-09-20", status: "Completed" },
  { id: 5, name: "Booking Website and WhatsApp Bot", client: "Savanna Guest House", division: "Software", progress: 15, due: "2027-02-10", status: "In progress" },
  { id: 6, name: "Brand Posters and Flyers", client: "Savanna Guest House", division: "Ads", progress: 0, due: "2026-12-20", status: "Pending" },
];

export const leads = [
  { id: 1, name: "David Otieno", service: "Website Development", phone: "0711 111 000", date: "2026-11-17", status: "New" },
  { id: 2, name: "Lucy Wambui", service: "POS and Business Systems", phone: "0722 222 000", date: "2026-11-16", status: "Contacted" },
  { id: 3, name: "Samuel Kiprop", service: "WhatsApp Automation", phone: "0733 333 000", date: "2026-11-14", status: "Contacted" },
  { id: 4, name: "Esther Muthoni", service: "Graphic Design", phone: "0744 444 000", date: "2026-11-12", status: "Won" },
  { id: 5, name: "Brian Odhiambo", service: "Payment Integration", phone: "0755 555 000", date: "2026-11-10", status: "Lost" },
  { id: 6, name: "Nancy Chebet", service: "Digital Marketing", phone: "0766 666 000", date: "2026-11-09", status: "New" },
];

export const invoices = [
  { id: "INV-001", client: "Mama Mboga Fresh", amount: 45000, issued: "2026-10-01", due: "2026-10-15", status: "Paid" },
  { id: "INV-002", client: "Kirinyaga Hardware", amount: 60000, issued: "2026-10-20", due: "2026-11-05", status: "Overdue" },
  { id: "INV-003", client: "Sunrise Academy", amount: 35000, issued: "2026-10-30", due: "2026-11-13", status: "Paid" },
  { id: "INV-004", client: "Savanna Guest House", amount: 50000, issued: "2026-11-10", due: "2026-11-25", status: "Pending" },
  { id: "INV-005", client: "Bluebird Salon", amount: 18000, issued: "2026-09-18", due: "2026-10-02", status: "Paid" },
];

export const team = [
  { id: 1, name: "Stiv Njenga", role: "Lead Developer", division: "Software", email: "stiv@example.com", status: "Active" },
  { id: 2, name: "Amina Hassan", role: "Graphic Designer", division: "Ads", email: "amina@example.com", status: "Active" },
  { id: 3, name: "Kevin Mutua", role: "Social Media Manager", division: "Ads", email: "kevin@example.com", status: "Active" },
  { id: 4, name: "Joy Wairimu", role: "Frontend Developer", division: "Software", email: "joy@example.com", status: "Active" },
];

export const tasks = [
  { id: 1, title: "Connect M-Pesa checkout", project: "Online Shop and M-Pesa Checkout", assignee: "Stiv Njenga", due: "2026-11-22", status: "In progress" },
  { id: 2, title: "Design stock report page", project: "Stock and Sales POS", assignee: "Joy Wairimu", due: "2026-11-25", status: "Pending" },
  { id: 3, title: "Create launch posters", project: "Brand Posters and Flyers", assignee: "Amina Hassan", due: "2026-11-28", status: "Pending" },
  { id: 4, title: "Write December content plan", project: "Social Media Campaign", assignee: "Kevin Mutua", due: "2026-11-30", status: "In progress" },
  { id: 5, title: "Hand over school website", project: "School Website", assignee: "Stiv Njenga", due: "2026-11-10", status: "Done" },
];

export const portfolio = [
  { id: 1, title: "School Website", category: "Web Development", status: "Published" },
  { id: 2, title: "Retail POS System", category: "POS and Business Systems", status: "Published" },
  { id: 3, title: "Salon Social Media Campaign", category: "Digital Marketing", status: "Published" },
  { id: 4, title: "Guest House Booking Site", category: "Web Development", status: "Draft" },
];

export const gallery = [
  { id: 1, caption: "Team at the Nairobi workshop" },
  { id: 2, caption: "Poster designs for a client launch" },
  { id: 3, caption: "POS system demo day" },
  { id: 4, caption: "Website mockups on screen" },
  { id: 5, caption: "Client handover meeting" },
  { id: 6, caption: "Behind the scenes at the studio" },
];

export const formatMoney = (amount: number | string) => "KES " + Number(amount).toLocaleString("en-KE");
