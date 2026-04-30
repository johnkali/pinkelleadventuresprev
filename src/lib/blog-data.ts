export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  content: string

  seoTitle?: string
  seoDescription?: string
}

export const blogPosts: BlogPost[] = [

   {
  slug: "first-time-in-dubai",
  title: "First Time in Dubai? Here’s Everything You Need to Know",
  excerpt:
    "Planning your first Dubai trip? Learn visa tips, best attractions, and travel essentials.",
  category: "Dubai Guide",
  date: "March 2026",
  image: "/images/blog/dubai.jpg",
  content: `
    <p>Dubai is one of the most exciting travel destinations in the world, offering a perfect mix of luxury, culture, and adventure. For first-time visitors, the city can feel overwhelming — but with the right planning, it becomes an unforgettable experience.</p>

    <p>The best time to visit Dubai is between November and March when the weather is cooler. During this period, you can comfortably enjoy outdoor activities like desert safaris, dhow cruises, and city tours. Must-visit attractions include the Burj Khalifa, Dubai Mall, Palm Jumeirah, and the traditional Gold Souk.</p>

    <p>Whether you're traveling for leisure, business, or a family holiday, Dubai offers something for everyone. With expert planning and guided experiences, your first visit can be smooth, stress-free, and truly memorable.</p>
  `,
    seoTitle: "First Time in Dubai? Complete Travel Guide 2026",
seoDescription:
  "Planning your first trip to Dubai? Learn visa requirements, best attractions, travel tips, and everything you need for a perfect trip.",
  },
//   sample meta to be used on all blogs
  {
    slug: 'visit-turkey-reasons',
    category: 'Destinations',
    title: '5 Reasons to Visit Turkey This Year',
    excerpt:
      "Cappadocia’s hot air balloons, Istanbul’s rich history, Antalya’s beaches — discover why Turkey is a top destination.",
    date: 'March 2026',
    image: '/images/blog/turkey.jpg',
    content: `
Turkey is where East meets West.

## Highlights
- Cappadocia balloons
- Istanbul culture
- Antalya beaches

A perfect mix of history and modern life.
    `,
  },
  {
    slug: 'uae-visa-guide',
    category: 'Visa Guide',
    title: 'UAE Visa Guide: Types, Requirements & Processing Times',
    excerpt:
      'A complete breakdown of UAE visa types, documents, and processing timelines.',
    date: 'February 2026',
    image: '/images/blog/visa.jpg',
    content: `
We offer UAE visa processing with fast turnaround.

## Types
- 30-day visa
- 60-day visa

Processing takes 3–6 working days.
    `,
  },
  {
    slug: 'maldives-budget',
    category: 'Travel Tips',
    title: 'Maldives on a Budget: Is It Possible?',
    excerpt:
      'We share practical tips for experiencing Maldives luxury without overspending.',
    date: 'February 2026',
    image: '/images/blog/maldives.jpg',
    content: `
Yes — Maldives can be affordable.

Choose guesthouses instead of resorts and travel off-season.
    `,
  },
  {
    slug: 'east-africa-safari',
    category: 'Safari',
    title: 'Why East African Safaris Should Be On Your Bucket List',
    excerpt:
      'From Maasai Mara to Zanzibar — discover why East Africa is unmatched.',
    date: 'January 2026',
    image: '/images/blog/safari.jpg',
    content: `
East Africa offers the best wildlife experiences.

## Must Visit
- Maasai Mara
- Serengeti
- Zanzibar
    `,
  },
  {
    slug: 'malaysia-guide',
    category: 'Destinations',
    title: 'Malaysia Travel Guide: Best Time to Visit & Top Experiences',
    excerpt:
      'Kuala Lumpur, Langkawi, and beyond — everything you need to plan your trip.',
    date: 'January 2026',
    image: '/images/blog/malaysia.jpg',
    content: `
Malaysia offers culture, food, and beaches.

## Top Spots
- Kuala Lumpur
- Langkawi
- Penang
    `,
  },
]