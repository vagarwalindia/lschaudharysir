// Central dummy dataset for the Events calendar.
// In production, swap this for a CMS/API fetch (e.g. Sanity, Notion, or a database call).

export type EventType = "Corporate" | "Bootcamp" ;

export interface VetEvent {
  id: string;
  title: string;
  type: EventType;
  date: string; // ISO date
  location: string;
  duration: string;
  seatsLeft: number;
  price: string;
  image: string;
}

export const events: VetEvent[] = [
  {
    id: "evt-01",
    title: "Summit Sync — Corporate Team Trek",
    type: "Corporate",
    date: "2026-09-12",
    location: "Sahyadri Range, Maharashtra",
    duration: "2 Days / 1 Night",
    seatsLeft: 14,
    price: "₹6,999 / person",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "evt-02",
    title: "Command Presence — Leadership Workshop",
    type: "Corporate",
    date: "2026-09-26",
    location: "VetVentures Basecamp, Pune",
    duration: "1 Day",
    seatsLeft: 22,
    price: "₹3,499 / person",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "evt-03",
    title: "Operation Resilience — 5-Day Leadership Bootcamp",
    type: "Bootcamp",
    date: "2026-09-30",
    location: "SriNagar, Jammu & Kashmir",
    duration: "5 Days / 4 Nights",
    seatsLeft: 0,
    price: "₹30,000 / person",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "evt-04",
    title: "First Light — Discipline & Fitness Bootcamp",
    type: "Bootcamp",
    date: "2026-11-02",
    location: "Chopta, Uttarakhand",
    duration: "4 Days / 3 Nights",
    seatsLeft: 6,
    price: "₹15,499 / person",
    image:
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80",
  },

];

export const eventTypes: EventType[] = ["Corporate", "Bootcamp"];
