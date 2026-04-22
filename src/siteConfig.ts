/**
 * Site configuration for Dundas West Animal Hospital
 * All per-business data lives here for easy swapping.
 */

export const SITE_CONFIG = {
  businessName: "Dundas West Animal Hospital",
  shortName: "Dundas West",
  foundedYear: "2000",
  tagBadge: "Award-Winning • Toronto's West End",
  heroHeadline: "This is not just an animal hospital.",
  heroSubtext:
    "Here, you are part of a team. A team of like-minded individuals who strive to strengthen the bond between you and your pet. We are Dundas West.",
  metaDescription:
    "An award-winning health and wellness hospital for cats and dogs with advanced technology & dedicated team. Separate cat-only and dog-only vet clinic sections.",
  logoUrl:
    "https://weu-az-web-ca-uat-cdn.azureedge.net/mediacontainer/medialibraries/dundaswestvets/images/logo/logo-dundas-west-animal-hospital-mobile.svg?ext=.svg",
  phone: "(416) 535-8387",
  email: "info@dundaswestvets.com",
  address: "2160 Dundas St W, Toronto, ON M6R 1X3",
  hours: { weekday: "Mon – Fri: 8:00 AM – 8:00 PM", weekend: "Sat: 9:00 AM – 4:00 PM" },
  socialLinks: {
    instagram: "https://www.instagram.com/dundaswestanimalhospital/",
    facebook: "https://www.facebook.com/dundaswestanimalhospital/",
    youtube: "https://www.youtube.com/@dundaswestanimalhospital",
  },
  googleRating: 4.7,
  googleReviewCount: "850+",
  storeEnabled: true,
  storeUrl: "https://www.myvetstore.ca/dwah",
  storePartnerName: "MyVetStore",
};

export const ABOUT = {
  headline: "Award-winning clinic in the heart of High Park.",
  story:
    "We are a health and wellness hospital for cats and dogs. Our clients have ranked us as one of the top veterinary hospitals in Toronto. Our practice is owned and operated by Dr. Alex Folosea, Dr. Debbie Kilburn, and Dr. Kim Buchanan, partnered with Vet Strategy since 2021. We offer the most advanced tools and techniques available including wellness exams, dentistry, surgery, radiology, ultrasound, therapeutic laser, acupuncture, and nutritional consultations.",
  catStory:
    "In August 2023, we opened a cat-only state-of-the-art hospital directly adjacent to our existing location. Our two practices have separate entrances but share the same dedicated team. Our certified Cat Friendly Practice (Gold Level) is designed to cater exclusively to the needs of our feline patients.",
  stats: { patients: "850+", years: "25yr", stories: "Reviews" },
};

export const TEAM = [
  {
    name: "Dr. Alex Folosea",
    role: "HBSc, DVM — Owner",
    bio: "Co-owner and founding veterinarian dedicated to compassionate, cutting-edge care for cats and dogs in Toronto's west end.",
    image:
      "https://WEU-AZ-WEB-CA-CDN.azureedge.net/mediacontainer/medialibraries/dundaswestvets/images/team-photos/dr-alex-folosea.webp?ext=.webp",
  },
  {
    name: "Dr. Debbie Kilburn",
    role: "DVM — Owner",
    bio: "Co-owner with a passion for preventative medicine and building lasting relationships with pets and their families.",
    image:
      "https://WEU-AZ-WEB-CA-CDN.azureedge.net/mediacontainer/medialibraries/dundaswestvets/images/team-photos/dr-debbie-kilburn.webp?ext=.webp",
  },
  {
    name: "Dr. Kim Buchanan",
    role: "HBSc, HBHSc, DVM — Owner",
    bio: "Co-owner specializing in feline care and advanced diagnostics. Committed to elevating the standard of veterinary excellence.",
    image:
      "https://WEU-AZ-WEB-CA-CDN.azureedge.net/mediacontainer/medialibraries/dundaswestvets/images/team-photos/dr-kim-buchanan-375x500.webp?ext=.webp",
  },
];

// Real 5-star Google Reviews — scraped April 2026
export const TESTIMONIALS = [
  {
    name: "Julie E",
    story:
      "I can't say enough good things about Dundas West Animal Hospital and especially Dr. Aaron Van. He took care of Penny during the last two and most difficult years of her life. He was incredibly compassionate and always treated her like she was his own dog. I never felt rushed, and I could genuinely tell how much he cared about her well-being.",
    pet: "Penny",
  },
  {
    name: "Yuri H",
    story:
      "Dundas West Animal Hospital is one of the best veterinary hospitals in all of Toronto. They actually inspect your dog thoroughly, trust you as a pet parent, and provide referrals when needed. Dr. Van validated everything I was thinking was wrong with Maggie from the very first visit. She is happy again!",
    pet: "Maggie",
  },
  {
    name: "Katy Jones",
    story:
      "Absolutely the best vet I have been to. Ever. Their staff work as a team, and their veterinary assistants and patient representatives are outstanding. They understand you're entrusting them with a beloved family member. And there's a separate entrance for their cat clinic! I'm blessed to have found them.",
    pet: "50 years of pets",
  },
];

export const SERVICES = {
  cat: [
    { name: "Preventative Care", desc: "Regular check-ups, vaccinations, parasiticides, and wellness testing." },
    { name: "Senior Wellness", desc: "Age-related condition monitoring with tailored treatment plans." },
    { name: "In-House Laboratory", desc: "Same-day diagnostic results from our comprehensive in-house lab." },
    { name: "Ultrasound", desc: "Non-invasive imaging to examine internal organs and detect abnormalities." },
    { name: "Radiology", desc: "Digital X-rays for bones, GI system, heart, lungs, and more." },
    { name: "Acupuncture", desc: "Holistic pain management and improved mobility." },
    { name: "Dentistry", desc: "Dental cleaning, surgery, and extractions for feline patients." },
    { name: "Surgery", desc: "Routine to advanced surgical procedures with expert care." },
    { name: "Laser Therapy", desc: "Post-surgical pain management and inflammatory condition treatment." },
  ],
  dog: [
    { name: "Preventative Care", desc: "Check-ups, vaccinations, parasiticides, and wellness testing." },
    { name: "Senior Wellness", desc: "Tailored plans for managing age-related conditions." },
    { name: "In-House Laboratory", desc: "Quick diagnostic tests with same-day results." },
    { name: "Ultrasound", desc: "Pain-free procedures to examine internal organs." },
    { name: "Radiology", desc: "Safe digital X-rays providing valuable diagnostic information." },
    { name: "Acupuncture", desc: "Proven benefits for pain management and mobility." },
    { name: "Dentistry", desc: "Prevention, cleaning, and dental surgery for canines." },
    { name: "Surgery", desc: "From routine spays/neuters to advanced emergency procedures." },
    { name: "Laser Therapy", desc: "Post-surgical healing and inflammatory condition treatment." },
  ],
};

export const BOOKING_OPTIONS = [
  { id: "wellness", label: "Annual Wellness Exam" },
  { id: "dental", label: "Dental Consultation" },
  { id: "new-pet", label: "New Puppy/Kitten Visit" },
  { id: "sick", label: "Sick Pet Examination" },
  { id: "surgery", label: "Surgery Consultation" },
  { id: "acupuncture", label: "Acupuncture Session" },
];
