import logoAsset from "@/assets/logo.png.asset.json";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

/**
 * SINGLE SOURCE OF TRUTH
 * Every business detail, contact, URL, SEO string and reusable content block
 * used anywhere on the site is defined here. Never duplicate this data.
 */

export const site = {
  name: "Kindergarten",
  tagline: "Preschool, Daycare & Activities Centre",
  locality: "Kandivali, Mumbai",
  established: 2009,
  womenOwned: true,
  logo: { src: logoAsset.url, alt: "Kindergarten — Preschool, Daycare & Activities Centre" },
  images: { hero: heroImg, about: aboutImg },
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Instagram", to: "/instagram" },
  { label: "Contact", to: "/contact" },
] as const;

export const contact = {
  phones: [
    { label: "+91 79771 19944", tel: "+917977119944", wa: "917977119944" },
    { label: "+91 99308 50606", tel: "+919930850606", wa: "919930850606" },
  ],
  email: "kindergartenkandivali@gmail.com",
  address: {
    lines: [
      "B Wing 1st floor, Crystal lawns CHS",
      "opp. Gaurav sweets",
      "Mumbai, Maharashtra 400101",
    ],
    full:
      "B Wing 1st floor, Crystal lawns CHS, opp. Gaurav sweets, Mumbai, Maharashtra 400101",
  },
  hours: [
    { days: "Monday — Saturday", time: "8:00 AM — 8:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  mapsUrl: "https://maps.app.goo.gl/rMNY8jdQQDNvHewQ7",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Crystal+Lawns+CHS+Kandivali+Mumbai+400101&output=embed",
  instagram: {
    handle: "@kindergartenkandivali",
    url: "https://www.instagram.com/kindergartenkandivali/",
  },
} as const;

export const primaryPhone = contact.phones[0];

export const seo = {
  "/": {
    title: "Kindergarten Kandivali | Premium Preschool & Daycare, Mumbai",
    description:
      "A women-owned preschool, daycare and activities centre in Kandivali, Mumbai offering a warm, structured early-years programme for children aged 1.5 to 6.",
  },
  "/about": {
    title: "About Our School | Kindergarten Kandivali",
    description:
      "Founded and led by women educators, Kindergarten Kandivali blends play-based discovery with a structured early-years curriculum in a calm, secure environment.",
  },
  "/gallery": {
    title: "Campus Gallery | Kindergarten Kandivali",
    description:
      "Step inside our Kandivali campus — light-filled classrooms, reading corners, art studio, music circle and secure daycare spaces.",
  },
  "/contact": {
    title: "Contact & Visit Us | Kindergarten Kandivali",
    description:
      "Call or WhatsApp us, find our Kandivali address and opening hours, or book a personal campus visit for your family.",
  },
  "/instagram": {
    title: "Instagram | Kindergarten Kandivali",
    description:
      "Everyday moments from our Kandivali campus — follow @kindergartenkandivali for classroom stories, celebrations and updates.",
  },
} as const;

export const programmes = [
  {
    title: "Playgroup",
    age: "1.5 – 2.5 years",
    body: "First steps away from home: sensory play, routine, language and gentle separation support.",
  },
  {
    title: "Nursery",
    age: "2.5 – 3.5 years",
    body: "Phonics foundations, number sense, fine-motor work and expressive art in small groups.",
  },
  {
    title: "Junior & Senior KG",
    age: "3.5 – 6 years",
    body: "Structured literacy and numeracy, enquiry projects and school-readiness for Grade 1.",
  },
  {
    title: "Daycare & Activities",
    age: "Up to 6 years",
    body: "Supervised extended care with rest, nutrition, homework support and enrichment clubs.",
  },
] as const;

export const philosophy = [
  {
    title: "Observation before instruction",
    body: "Teachers document how each child learns before shaping the week's plan, so the curriculum follows the child rather than the calendar.",
  },
  {
    title: "Structure that feels gentle",
    body: "Predictable rhythms — circle, work cycle, outdoor play, rest — give young children the security to take intellectual risks.",
  },
  {
    title: "Language-rich environments",
    body: "Storytelling, phonics and conversation are woven through the day, building vocabulary long before formal reading begins.",
  },
] as const;

export const stats = [
  { value: "15+", label: "Years of early-years practice" },
  { value: "1:8", label: "Teacher to child ratio" },
  { value: "600+", label: "Families guided" },
  { value: "100%", label: "Women-owned & women-led" },
] as const;

export const whyChooseUs = [
  {
    title: "Women-owned, educator-led",
    body: "The school is owned and run by women educators who are present on campus every single day.",
  },
  {
    title: "Small, attentive cohorts",
    body: "Deliberately capped class sizes so every child is known by name, temperament and pace.",
  },
  {
    title: "Safety as a standard",
    body: "Secure entry, CCTV-monitored floors, trained staff and transparent daily communication with parents.",
  },
  {
    title: "Preschool and daycare in one",
    body: "A single trusted address for the school day and the working day, from 8:00 AM to 8:00 PM.",
  },
  {
    title: "Beyond the classroom",
    body: "Art, music, movement, phonics and festival celebrations built into the annual calendar.",
  },
  {
    title: "Partnership with parents",
    body: "Regular observation notes, open days and honest conversations about progress.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Our daughter walked in shy and came out confident enough to lead the morning circle. The teachers notice everything and share it with us openly.",
    author: "Ritu M.",
    role: "Parent, Senior KG",
  },
  {
    quote:
      "As working parents, the daycare hours changed our lives. But it is the warmth of the staff, not the timings, that keeps us here.",
    author: "Aakash & Neha S.",
    role: "Parents, Nursery",
  },
  {
    quote:
      "Beautifully run, calm and genuinely academic without ever pressuring the children. A rare combination in Mumbai.",
    author: "Farida K.",
    role: "Parent, Playgroup",
  },
] as const;

export const gallery = [
  { src: gallery2, alt: "Children reading together in the library corner", w: 1200, h: 900 },
  { src: gallery1, alt: "A child painting at a wooden easel in the art studio", w: 1000, h: 1250 },
  { src: gallery3, alt: "Children playing in the outdoor garden play area", w: 1200, h: 900 },
  { src: gallery4, alt: "Learning materials arranged on open wooden shelves", w: 1000, h: 1250 },
  { src: gallery5, alt: "Music circle with a teacher and young children", w: 1200, h: 900 },
  { src: gallery6, alt: "Quiet rest room for daycare children", w: 1000, h: 1250 },
] as const;

export const instagramPosts = [
  { caption: "Morning circle, Monday rhythm.", tag: "#circletime" },
  { caption: "Colour mixing in the art studio.", tag: "#artstudio" },
  { caption: "Storytelling hour with Ms. Ayesha.", tag: "#storytime" },
  { caption: "Garden day — seeds, soil and small hands.", tag: "#outdoorlearning" },
  { caption: "Phonics wall, week four.", tag: "#earlyliteracy" },
  { caption: "Annual day rehearsals begin.", tag: "#annualday" },
] as const;

export function whatsappLink(wa: string, message: string) {
  return `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;
}

export function bookVisitMessage(v: {
  parentName: string;
  childName: string;
  phone: string;
  date: string;
  message: string;
}) {
  return [
    `Hello ${site.name} ${site.locality},`,
    "",
    "I would like to book a campus visit.",
    `Parent name: ${v.parentName}`,
    `Child name: ${v.childName}`,
    `Phone: ${v.phone}`,
    `Preferred visit date: ${v.date}`,
    v.message ? `Message: ${v.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
