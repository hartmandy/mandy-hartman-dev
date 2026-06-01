import { type MetaFunction, json } from "@remix-run/node";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { client } from "~/sanity/client";
import { useLoaderData } from "@remix-run/react";
import Card from "~/components/Card";
import { SanityDocument } from "@sanity/client/csm";
import { BLOGS_QUERY, HOME_QUERY } from "~/sanity/queries";

export const meta: MetaFunction = () => {
  return [
    { title: "Mandy Hartman | Front-end Software Engineer" },
    {
      name: "description",
      content:
        "Front-end software engineer specializing in React, Remix, and TypeScript.",
    },
  ];
};

export const loader = async () => {
  const home = await client.fetch(HOME_QUERY);
  const latestPosts = await client.fetch(BLOGS_QUERY);
  const configuredPosts =
    home?.featuredPosts?.filter((post: SanityDocument) => post?.slug) ?? [];
  const featuredPosts =
    configuredPosts.length > 0
      ? configuredPosts
      : latestPosts.slice(0, 4);

  return json({ home, featuredPosts });
};

export default function Home() {
  const { featuredPosts } = useLoaderData<typeof loader>();

  return (
    <div className="m-auto">
      <header className="mt-10 border-b border-neutral-700 pb-8">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-neutral-700">
          Front-end Software Engineer
        </p>
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-end">
          <h1 className="text-5xl leading-none text-neutral-800 md:text-7xl xl:text-8xl">
            Building sharp, accessible web interfaces with React, Remix, and
            TypeScript.
          </h1>
          <p className="text-lg font-normal leading-relaxed md:text-xl">
            I&apos;m Mandy Hartman, a front-end engineer focused on thoughtful
            product experiences, durable UI systems, and the craft of shipping
            useful software.
          </p>
        </div>
      </header>

      <figure className="overflow-hidden rounded-lg border border-neutral-700">
        <img
          src="/home.png"
          alt="Workspace at the desk"
          className="aspect-[21/9] w-full object-cover object-center grayscale transition-all duration-300 hover:grayscale-0"
        />
        <figcaption className="border-t border-neutral-700 px-4 py-3 text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">
          Field notes from the desk
        </figcaption>
      </figure>

      <section className="grid gap-4 border-b border-neutral-700 py-8 md:grid-cols-3">
        <div className="rounded-lg border border-neutral-700 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.25em]">
            Specialty
          </p>
          <p className="mt-4 text-2xl font-normal text-neutral-800">
            React, Remix, TypeScript, design systems, and web
            experiences.
          </p>
        </div>
        <div className="rounded-lg border border-neutral-700 p-5 md:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.25em]">
            Field Notes
          </p>
          <p className="mt-4 text-2xl font-normal text-neutral-800">
            I write about the decisions behind interfaces: how components hold
            together, where performance matters, and what makes front-end work
            feel clear for the people using it.
          </p>
        </div>
      </section>

      <section className="mb-8 mt-12">
        <div className="mb-6 flex flex-col gap-4 border-b border-neutral-700 pb-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em]">
              Latest
            </p>
            <h2 className="mt-2 text-4xl text-neutral-800 md:text-6xl">
              Blog Posts
            </h2>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center text-lg hover:font-bold"
          >
            View All <ArrowRightIcon />
          </a>
        </div>

        {featuredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPosts.map((post: SanityDocument) => (
              <Card key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-neutral-700 p-5">
            <p className="text-lg font-normal">
              New writing is coming soon. Check back for notes on front-end
              engineering, React, Remix, and TypeScript.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

