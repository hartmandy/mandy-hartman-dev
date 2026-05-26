import { json } from "@remix-run/node";
import { SanityImage } from "~/components/SanityImage";
import { useLoaderData } from "@remix-run/react";
import { client } from "~/sanity/client";
import { BLOGS_QUERY } from "~/sanity/queries";
import { SanityDocument } from "@sanity/client/stega";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const loader = async () => {
  const blogs = await client.fetch(BLOGS_QUERY);
  return json({ blogs });
};

function formatPostDate(datetime?: string) {
  if (!datetime) return "Essay";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(datetime));
}

function LatestPost({ blog }: { blog: SanityDocument }) {
  return (
    <article className="grid gap-4 rounded-lg border border-neutral-700 p-4 md:grid-cols-[1.25fr_1fr] md:items-stretch">
      <div className="min-h-full">
        {blog.mainImage ? (
          <SanityImage
            image={blog.mainImage}
            maxWidth={900}
            alt={blog.title}
            className="h-full w-full rounded-lg border border-neutral-700 object-cover grayscale"
          />
        ) : (
          <div className="flex min-h-72 items-center justify-center rounded-lg border border-neutral-700">
            <p className="text-xs font-bold uppercase tracking-[0.35em]">
              Latest Post
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between md:p-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">
            {formatPostDate(blog.publishedAt)}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-neutral-800 md:text-6xl">
            {blog.title}
          </h2>
          <p className="mt-4 text-lg font-normal leading-relaxed">
            {blog.blurb}
          </p>
        </div>
        <a
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center text-lg hover:font-bold"
        >
          Read Latest <ArrowRightIcon />
        </a>
      </div>
    </article>
  );
}

function PostListItem({ blog }: { blog: SanityDocument }) {
  return (
    <article className="grid gap-3 border-b border-neutral-700 py-5 md:grid-cols-[10rem_1fr_auto] md:items-start">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">
        {formatPostDate(blog.publishedAt)}
      </p>
      <div>
        <h2 className="text-2xl font-bold text-neutral-800">{blog.title}</h2>
        <p className="mt-2 text-lg font-normal leading-relaxed">{blog.blurb}</p>
      </div>
      <a
        href={`/blog/${blog.slug}`}
        className="inline-flex items-center text-lg hover:font-bold md:justify-self-end"
      >
        Read More <ArrowRightIcon />
      </a>
    </article>
  );
}

export default function Blog() {
  const { blogs } = useLoaderData<typeof loader>();
  const [latestPost, ...blogList] = blogs;

  return (
    <div className="m-auto">
      <h1 className="text-7xl mt-11 mb-8 pb-8 border-b border-neutral-700">
        Blog
      </h1>
      <p className="mb-8 max-w-2xl text-lg font-normal leading-relaxed">
        Editorial note: every post here is written by me, without the use of AI.
      </p>

      {!latestPost ? (
        <div className="rounded-lg border border-neutral-700 p-5">
          <p className="text-lg font-normal">
            No blog posts are published yet. Check back soon.
          </p>
        </div>
      ) : (
        <LatestPost blog={latestPost} />
      )}

      {blogList.length > 0 ? (
        <section className="my-8">
          <div className="border-t border-neutral-700">
            {blogList.map((blog: SanityDocument) => (
              <PostListItem key={blog._id} blog={blog} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
