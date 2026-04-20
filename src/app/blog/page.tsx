export const metadata = {
  title: 'Blog | Pinkelle Adventures',
  description: 'Travel tips, destination inspiration, and expert insights from Pinkelle Adventures.',
}

const posts = [
  'Top Things to Do in Dubai for First-Time Visitors',
  'How to Prepare for Your East African Safari',
  'Travel Tips for Smooth UAE Visa Applications',
]

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-brandPink">Travel Blog</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {posts.map((post) => (
          <article key={post} className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{post}</h2>
            <p className="mt-3 text-slate-600">Helpful travel insights and inspiration from our team.</p>
          </article>
        ))}
      </div>
    </section>
  )
}
