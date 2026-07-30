import { db } from "@/lib/db";
import Sidebar from "@/components/Sidebar";
import QuickContact from "@/components/QuickContact";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tagDisplay = slug.replace(/-/g, " ");
  return {
    title: `Etiket: ${tagDisplay} | Başbuğa Metal`,
    description: `${tagDisplay} etiketli güncel blog rehberleri.`,
    openGraph: {
      title: `Etiket: ${tagDisplay} | Başbuğa Metal`,
      description: `${tagDisplay} etiketli güncel blog rehberleri.`,
      url: `/tag/${slug}`,
    },
    alternates: { canonical: `/tag/${slug}` },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Query blog posts containing the matching tag
  const allPosts = await db.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Filter posts on the server-side logic
  const filteredPosts = allPosts.filter((post) => {
    const tags: string[] = JSON.parse(post.tagsJson || "[]");
    return tags.some((tag) => {
      const tagSlug = tag
        .toLowerCase()
        .replace(/[^a-z0-9ğışüşöç\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      return tagSlug === slug;
    });
  });

  const tagTitle = slug.replace(/-/g, " ").toUpperCase();

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-teal-600/10 border border-teal-500/20 px-4 py-2 rounded-full mb-4">
              <Tag className="w-4 h-4 text-teal-500" />
              <span className="text-xs font-semibold text-teal-400 tracking-wider uppercase">
                Etikete Göre Listeleme
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-8">
              Etiket: "{tagTitle}"
            </h1>

            {filteredPosts.length === 0 ? (
              <p className="text-slate-400 text-lg">Bu etiketle ilişkili yazı bulunamadı.</p>
            ) : (
              <div className="space-y-8">
                {filteredPosts.map((post) => {
                  const tags: string[] = JSON.parse(post.tagsJson || "[]");
                  return (
                    <article
                      key={post.id}
                      className="group bg-slate-900/40 border border-slate-900 rounded-3xl p-6 sm:p-8 hover:border-slate-800 transition-all duration-300 hover:bg-slate-900/60"
                    >
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-teal-500" />
                          <span>
                            {new Date(post.createdAt).toLocaleDateString("tr-TR", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {post.summary}
                      </p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center space-x-2 text-sm font-bold text-slate-300 group-hover:text-amber-500 transition-colors"
                      >
                        <span>Yazıyı Oku</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </article>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <QuickContact />
    </div>
  );
}
