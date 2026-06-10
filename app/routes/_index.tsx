import { type MetaFunction, json } from "@remix-run/node";
import { client } from "~/sanity/client";
import { useLoaderData } from "@remix-run/react";
import Card from "~/components/Card";
import { SanityDocument } from "@sanity/client/csm";
import { BLOGS_QUERY, HOME_QUERY } from "~/sanity/queries";

export const meta: MetaFunction = () => {
  return [
    { title: "Mandy Hartman | Software Engineer" },
    {
      name: "description",
      content:
        "Software engineer specializing in design systems, accessible interfaces, and React.",
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

const imageFrameClass =
  "overflow-hidden rounded-lg border border-neutral-700 grayscale transition-all duration-300 hover:grayscale-0";

const tileImageClass = "block h-full w-full object-cover object-center";
const tileHeightClass = "h-44 md:h-52";

export default function Home() {
  const { featuredPosts } = useLoaderData<typeof loader>();

  return (
    <div className="m-auto">
      <header className="mt-10 border-b border-neutral-700 pb-10 md:pb-12">
        <h1 className="max-w-4xl text-5xl leading-[0.95] text-neutral-800 md:text-7xl xl:text-8xl">
          Mandy Hartman
        </h1>

        <div className="mt-8 max-w-3xl space-y-5">
          <p className="text-2xl font-normal leading-snug text-neutral-800 md:text-3xl md:leading-snug">
            Software engineer specializing in design systems, accessible
            interfaces, and React.
          </p>
          <p className="text-lg font-normal leading-relaxed text-neutral-700 md:text-xl">
          Software Engineer who designs and builds, closing the gap between design intent and production code. 10 years in design and 5 years shipping web and mobile applications in <strong>React, React Native, TypeScript, Remix, and Next.js</strong>. I work across the full arc: UX/UI design and prototyping, accessible component-driven front-ends, and contributing to the design systems that keep them consistent.
          </p>
        </div>

      </header>

      <a
        href="/case-studies/walden-design-system"
        className={`${imageFrameClass} mt-8 block`}
      >
        <img
          src="/home.png"
          alt="Walden project"
          className="block w-full"
        />
      </a>

      <section className="grid gap-4 border-b border-neutral-700 py-8 md:grid-cols-3">
        <a
          href="/case-studies/bmc-design-system"
          className={`${imageFrameClass} block ${tileHeightClass}`}
        >
          <img
            src="/hero2.svg"
            alt="BMC Yearbook logo mark"
            className={`${tileImageClass} grayscale-0`}
          />
        </a>
        <a
          href="https://www.virtu-studios.com"
          target="_blank"
          rel="noreferrer"
          className={`${imageFrameClass} block ${tileHeightClass} md:col-span-2`}
        >
          <img
            src="/hero3.svg"
            alt="Virtu Studios logo mark"
            className={`${tileImageClass} grayscale-0`}
          />
        </a>
      </section>

      <section className="border-b border-neutral-700 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="lg:pt-2">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-neutral-600">
              About
            </p>
            <p className="mt-6 text-3xl font-bold leading-tight text-neutral-800 md:text-4xl">
              Hi, I'm Mandy 👋
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed md:text-xl [&_p]:font-normal">
            <p>
            I've spent the last four years building web and mobile apps with Virtu Studios. Right now I'm building our flagship product Walden and shipping client projects. 

            </p>
            <p>
            Coming from a background in design, I’ve been front-end leaning and very active in design and product conversations. Lately I’ve been taking on more of a UX engineer role, creating design tokens in Figma, building out full design systems, and building responsive and reusable components to keep our builds consistent, scalable, and shipping quickly. 
            </p>
            <p>
            Before working in software, I spent a decade doing project-based work across museums and archives. I sometimes worked as a designer or web manager, but ultimately found my focus in knowledge management, digital asset management, and digital preservation. What drove me to do this work was to make information more accessible to more people. I hold a BA and MA in design and a MS in information science. 

            </p>
            <p>
            I am driven by data and user feedback. Accessibility is important to me and always a consideration in my design and code. I like to build systems and documentation, in design and code, and build products that are scalable, sustainable, and solving a user need.

            </p>
            <p>

I am open to contract and full-time, remote work as a frontend or UX engineer. <strong>Please email me if you’d like to chat! mandyhartmandev@gmail.com </strong>
            </p>
          </div>
        </div>
      </section>

      <div className={`${imageFrameClass} my-8`}>
        <img
          src="/home4.png"
          alt=""
          className="block h-80 w-full object-cover object-center md:h-[28rem]"
        />
      </div>

      <section className="mb-8 mt-12">
        <div className="mb-6 border-b border-neutral-700 pb-4">
          <p className="text-xs font-bold uppercase tracking-[0.35em]">
            Featured
          </p>
          <h2 className="mt-2 text-4xl text-neutral-800 md:text-6xl">
            Writing
          </h2>
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
              New writing is coming soon. Check back for notes on software
              engineering, design systems, and building accessible product
              experiences.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
