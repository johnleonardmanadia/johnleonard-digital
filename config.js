// ============================================================
//  EDIT THIS FILE ONLY. You do not need to touch script.js.
// ============================================================

// 1) LINKS: paste your Formspree form ID (e.g. "xyzabcde"), booking link, socials.
var LINKS = { formspree: "", booking: "", email: "johnleonardmanadia@gmail.com", linkedin: "", facebook: "", response: "" };

// 2) WORKS: your projects. img = screenshot file, demo = live link,
//    cat = "Funnel" or "Website".
var WORKS = [   // img: screenshot path, demo: live link, cat: "Funnel" or "Website" (decides which button shows it; default Funnel)
  { title: "Project name", type: "Type of funnel", industry: "Industry", img: "", demo: "", cat: "Funnel" },
  { title: "Project name", type: "Type of funnel", industry: "Industry", img: "", demo: "", cat: "Funnel" },
  { title: "Project name", type: "Type of funnel", industry: "Industry", img: "", demo: "", cat: "Funnel" },
  { title: "Project name", type: "Type of funnel", industry: "Industry", img: "", demo: "", cat: "Funnel" },
  { title: "Project name", type: "Type of website", industry: "Industry", img: "", demo: "", cat: "Website" },
  { title: "Project name", type: "Type of website", industry: "Industry", img: "", demo: "", cat: "Website" },
  { title: "Project name", type: "Type of website", industry: "Industry", img: "", demo: "", cat: "Website" }
];

// 3) TESTIMONIALS: all testimonials appear in a swipeable carousel with side arrows.
//    - Replace the photo by saving a real picture with the SAME file name in
//      images/clients/ (client-1.jpg, client-2.jpg ...), or change "photo".
//    - Remove the line  ph: true,  once the testimonial is REAL.
//    - Optional: add  rating: 5,  (1 to 5 stars).
//    - Only use real testimonials, with the client's permission.
//    - Not using a slot? Delete that whole { ... } entry (and its photo file).
var TESTIMONIALS = [
  { ph: true, quote: "Replace this with your client’s real testimonial. Keep it short and specific: what they needed and how the work went.", name: "Client Name", role: "Owner, Business Name", photo: "images/clients/client-1.jpg", tag: "Website" },
  { ph: true, quote: "Second testimonial slot. Delete the whole line group for any slot you will not use.", name: "Client Name", role: "Owner, Business Name", photo: "images/clients/client-2.jpg", tag: "Funnel" },
  { ph: true, quote: "Third testimonial slot. Use the client’s own words and get their permission first.", name: "Client Name", role: "Owner, Business Name", photo: "images/clients/client-3.jpg", tag: "Website" },
  { ph: true, quote: "Fourth testimonial slot.", name: "Client Name", role: "Owner, Business Name", photo: "images/clients/client-4.jpg", tag: "Funnel" },
  { ph: true, quote: "Fifth testimonial slot.", name: "Client Name", role: "Owner, Business Name", photo: "images/clients/client-5.jpg", tag: "Website" },
  { ph: true, quote: "Sixth testimonial slot.", name: "Client Name", role: "Owner, Business Name", photo: "images/clients/client-6.jpg", tag: "Funnel" }
];
