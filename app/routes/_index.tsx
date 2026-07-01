import { type MetaFunction } from "@remix-run/node";
import ProjectCard from "~/components/ProjectCard";
import { projects } from "~/data/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Mandy Hartman | Software Engineer" },
    {
      name: "description",
      content:
        "Freelance engineer and designer.",
    },
  ];
};

const imageFrameClass =
  "overflow-hidden rounded-lg border border-neutral-700 grayscale transition-all duration-300 hover:grayscale-0";

const tileImageClass = "block h-full w-full object-cover object-center";
const tileHeightClass = "h-44 md:h-52";

const services = [
  {
    title: "Design System Creation",
    price: "$8k",
    description:
      "For teams without a designer or front-end dev. I deliver Figma files, design tokens, and a production-ready component library your app can build on.",
  },
  {
    title: "Custom Shopify Store",
    price: "$8k",
    description:
      "I'll help you launch on Shopify and build a custom storefront tailored to your brand, from setup to a polished, conversion-focused shopping experience.",
  },
  {
    title: "Full App Build: 0 to 1",
    price: "$20k+",
    description:
      "Got a cool idea? I'll take it from zero to one and ship a working product: design, front-end, and the systems to keep it scalable.",
  },
];

export default function Home() {
  return (
    <div className="m-auto">
      <header className="mt-10 border-b border-neutral-700 pb-10 md:pb-12">
        <h1 className="max-w-4xl text-5xl leading-[0.95] text-neutral-800 md:text-7xl xl:text-8xl">
          Mandy Hartman
        </h1>

        <p className="mt-8 max-w-3xl text-2xl font-normal leading-snug text-neutral-800 md:text-3xl md:leading-snug">
          Design systems, custom Shopify stores, and full app builds for
          teams and founders.
        </p>
      </header>

      <section className="border-b border-neutral-700 py-12 md:py-16">
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-neutral-600">
            Services
          </p>
          <h2 className="mt-2 text-4xl text-neutral-800 md:text-6xl">
            How I can help
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-lg border border-neutral-700 p-6 md:p-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold leading-tight text-neutral-800 md:text-3xl">
                  {service.title}
                </h3>
                <span className="whitespace-nowrap text-xl font-bold text-neutral-800 md:text-2xl">
                  {service.price}
                </span>
              </div>
              <p className="mt-4 text-lg font-normal leading-relaxed text-neutral-700">
                {service.description}
              </p>
            </div>
          ))}

          <a
            href="https://www.virtu-studios.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col rounded-lg border border-neutral-700 bg-neutral-800 p-6 text-neutral-100 transition-colors hover:bg-neutral-900 md:p-8"
          >
            <h3 className="text-2xl font-bold leading-tight md:text-3xl">
              Need a full team?
            </h3>
            <p className="mt-4 text-lg font-normal leading-relaxed text-neutral-300">
              For larger builds that need designers, engineers, and product
              support, check out Virtu Studios, the studio I build with.
            </p>
            <span className="mt-6 text-sm font-bold uppercase tracking-[0.2em]">
              Visit Virtu Studios →
            </span>
          </a>
        </div>

        <div className="mt-8">
          <a
            href="mailto:mandyhartmandev@gmail.com?subject=Project%20inquiry"
            className="inline-block rounded-lg bg-neutral-800 px-6 py-3 text-base font-bold text-neutral-100 transition-colors hover:bg-neutral-900"
          >
            Start a project
          </a>
        </div>
      </section>

      <div className="mb-8 mt-12">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-neutral-600">
          Design Systems
        </p>
        <h2 className="mt-2 text-4xl text-neutral-800 md:text-6xl">
          Selected work
        </h2>
      </div>

      <a
        href="/case-studies/walden-design-system"
        className={`${imageFrameClass} block`}
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

      <section className="mb-8 mt-12">
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-neutral-600">
            Apps
          </p>
          <h2 className="mt-2 text-4xl text-neutral-800 md:text-6xl">
            Things I've built
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
}
