import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog | Pinkelle Adventures",
    };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogSingle({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div className="text-center my-auto">Blogs coming soon!</div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* HEADER */}
      <div className="space-y-4 mb-10">
        <span className="text-pink-600 text-xs uppercase font-semibold">
          {post.category}
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {post.title}
        </h1>

        <p className="text-slate-500 text-sm">{post.date}</p>
      </div>

      {/* IMAGE */}
      <div className="mb-10 rounded-xl overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div
        className="prose prose-slate max-w-none prose-headings:font-semibold prose-p:text-slate-600 prose-li:text-slate-600"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
