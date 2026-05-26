import { ArrowRightIcon } from "@radix-ui/react-icons";
import { SanityDocument } from "@sanity/client/csm";

function formatPostDate(datetime?: string) {
  if (!datetime) return "Essay";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(datetime));
}

export default function Card({ post }: { post: SanityDocument }) {
  const postPath = `/blog/${post.slug}`;

  return (
    <article className="flex h-full flex-col justify-between rounded-lg border border-neutral-700 bg-transparent p-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">
          {formatPostDate(post.publishedAt)}
        </p>
        <h2 className="mt-4 text-2xl font-bold text-neutral-800">
          {post.title}
        </h2>
        <p className="mt-3 text-lg font-normal leading-relaxed">{post.blurb}</p>
      </div>
      <a
        href={postPath}
        className="mt-6 inline-flex items-center text-sm hover:font-bold"
      >
        Read More <ArrowRightIcon />
      </a>
    </article>
  );
}
