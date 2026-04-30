import { blogPosts } from '@/lib/blog-data'
import { BlogCard } from '@/components/blog-card'
import { siteConfig } from '@/lib/site'

export const metadata = {
  title: 'Travel Blog | Pinkelle Adventures',
  description:
    'Explore travel guides, visa tips, Dubai tours, safaris, and destination inspiration from Pinkelle Adventures.',
  openGraph: {
    title: 'Pinkelle Adventures Blog',
    description:
      'Travel guides, visa advice, and destination inspiration.',
  },
}

export default function BlogPage() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase text-pink-500">
            Travel Insights
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Our Travel Blog
          </h1>

          <div className="w-16 h-[3px] mx-auto bg-gradient-to-r from-pink-500 to-teal-500 rounded-full" />

          <p className="text-slate-300 max-w-2xl mx-auto">
            Travel tips, destination guides, visa advice, and inspiration to help you plan your next adventure.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-2xl px-8 py-12 text-center space-y-6">
          <h3 className="text-2xl font-semibold">
            Have a Travel Question?
          </h3>

          <p className="text-slate-300">
            Our team is happy to help with destinations, visas, and travel planning.
          </p>

          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full text-sm font-medium inline-block"
          >
            Ask Us on WhatsApp
          </a>
        </div>
      </section>

    </div>
  )
}