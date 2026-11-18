export const photos = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88",
  golden: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  maison: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
  villa: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85",
  botanic: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=85",
  interior: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  ridge: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
  retreat: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=2000&q=85",
  quoteHome: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85",
  clientGregg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
  clientAmelia: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
  clientDylan: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80",
  clientNina: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&h=160&q=80",
};

export const projects = [
  {
    slug: "botanic-kitchen-restaurant",
    name: "Botanic Kitchen & Restaurant",
    place: "Chapel Hill, North Carolina",
    image: photos.botanic,
    status: "Now selling",
    category: "Hospitality",
  },
  {
    slug: "prime-edge-business-park",
    name: "Prime Edge Business Park",
    place: "Austin, Texas",
    image: photos.interior,
    status: "Now leasing",
    category: "Commercial",
  },
  {
    slug: "renewsphere-district",
    name: "RenewSphere District",
    place: "San Francisco, California",
    image: photos.ridge,
    status: "Coming soon",
    category: "Mixed-use",
  },
];

export const heroSlides = [
  {
    background: photos.hero,
    badge: "Signature home",
    title: "Your high-end\nhaven awaits",
    body: "Discover lavish interiors, curated design, premium amenities, and personalized services that define an elevated lifestyle.",
    tag: "Thoughtfully made, beautifully lived",
    caption: "Unlock the potential of real estate with strategic insights, innovative solutions, and exceptional service.",
  },
  {
    background: photos.golden,
    badge: "Luxury living",
    title: "Elevated spaces\nfor a fuller life",
    body: "Explore residences crafted for effortless comfort, modern elegance, and quiet confidence in every detail.",
    tag: "Designed for meaningful living",
    caption: "From strategic acquisition to custom interiors, Brickline shapes homes that feel both effortless and unforgettable.",
  },
  {
    background: photos.retreat,
    badge: "Private retreat",
    title: "Where calm,\nstyle and nature meet",
    body: "Find a home that balances refined architecture with natural serenity and lasting, everyday ease.",
    tag: "A slower pace, a richer experience",
    caption: "Invest in distinctive properties positioned for long-term lifestyle value and personal fulfillment.",
  },
];

export const testimonials = [
  {
    quote: "Working with Brickline was a fantastic experience from start to finish. They listened to exactly what I wanted and, with a few short weeks, I found my dream home.",
    second: "They went above and beyond to ensure everything went smoothly. Communication was always clear and timely.",
    name: "Gregg Bergstrom",
    title: "Entrepreneur & homeowner",
    clientImage: photos.clientGregg,
    propertyImage: photos.quoteHome,
  },
  {
    quote: "The process felt bespoke from day one. Brickline offered insight, calm guidance, and a level of design detail that made the entire purchase feel effortless.",
    second: "Every step was well communicated, and the final result exceeded the vision we had in mind.",
    name: "Amelia Hart",
    title: "Creative director",
    clientImage: photos.clientAmelia,
    propertyImage: photos.maison,
  },
  {
    quote: "We were looking for a home that felt both elevated and practical. Brickline delivered something beautifully balanced: warm, modern, and deeply livable.",
    second: "Their recommendations were thoughtful and helped us move confidently without any second-guessing.",
    name: "Dylan Ross",
    title: "Property investor",
    clientImage: photos.clientDylan,
    propertyImage: photos.interior,
  },
  {
    quote: "From the first walkthrough to the final handoff, the experience was more polished than we expected. It felt personal, strategic, and genuinely well cared for.",
    second: "We never felt rushed, and the attention to detail made all the difference in choosing the right home.",
    name: "Nina Patel",
    title: "Architect",
    clientImage: photos.clientNina,
    propertyImage: photos.villa,
  },
];

export const goldenHorizon = {
  slug: "golden-horizon-villa",
  name: "Golden Horizon Villa",
  place: "South Carolina, 2025",
  image: photos.golden,
  category: "Residential",
  status: "Portfolio sample",
  description: "Discover the privacy of a thoughtfully designed villa, with refined interiors, peaceful surroundings, and room to unwind.",
};

export const showcaseProjects = [
  { slug: "maison-noire", name: "Maison Noire", place: "Oklahoma City, 2024", image: photos.maison, category: "Residential", status: "Portfolio sample" },
  { slug: "villa-bellagio", name: "Villa Bellagio", place: "San Francisco, 2024", image: photos.villa, category: "Residential", status: "Portfolio sample" },
  { slug: "the-ridge-house", name: "The Ridge House", place: "Aspen, 2025", image: photos.ridge, category: "Residential", status: "Portfolio sample" },
  { slug: "haven-courtyard", name: "Haven Courtyard", place: "Austin, 2025", image: photos.golden, category: "Residential", status: "Portfolio sample" },
];

export const propertyCatalog = [...projects, goldenHorizon, ...showcaseProjects];
