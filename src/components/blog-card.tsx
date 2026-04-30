import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site";
import Image from 'next/image'


export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        {/* IMAGE */}
        <div className="h-44 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-[400px] object-cover rounded-xl"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-3">
          <span className="text-xs font-semibold text-pink-600 uppercase tracking-wide">
            {post.category}
          </span>

          <h3 className="font-semibold text-lg text-slate-900 group-hover:text-pink-600 transition">
            {post.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            {post.excerpt}
          </p>

          <span className="text-xs text-slate-400">{post.date}</span>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              author: {
                "@type": "Organization",
                name: "Pinkelle Adventures",
              },
              publisher: {
                "@type": "Organization",
                name: "Pinkelle Adventures",
                logo: {
                  "@type": "ImageObject",
                  url: `${siteConfig.url}/logo.png`,
                },
              },
              mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
            }),
          }}
        />
      </article>
    </Link>
  );
}
