import { type MetaFunction, json } from "@remix-run/node";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { client } from "~/sanity/client";
import { SanityImage } from "~/components/SanityImage";
import { useLoaderData } from "@remix-run/react";
import Card from "~/components/Card";
import { SanityDocument } from "@sanity/client/csm";
import { HOME_QUERY } from "~/sanity/queries";

export const meta: MetaFunction = () => {
  return [
    { title: "Mandy Hartman" },
    { name: "description", content: "Portfolio for Mandy Hartman" },
  ];
};

export const loader = async () => {
  const home = await client.fetch(HOME_QUERY);
  return json({ home });
};

export default function Home() {
  const { home } = useLoaderData<typeof loader>();
  return (
    <div className="m-auto">
      <h1 className="text-7xl mt-11 mb-8">{home.title}</h1>
      <SanityImage
        className="w-full"
        image={home.mainImage}
        maxWidth={1536}
        alt={home.title}
      />

      <div className="flex flex-col md:flex-row my-8 border-t border-neutral-700">
        <div className="flex flex-col mt-8 md:w-3/5">
          <p className="text-4xl">{home.subtitle}</p>
        </div>
        <div className="flex items-end justify-start md:justify-end gap-3 md:w-2/5 mt-6 ">
          <a href="https://github.com/hartmandy" className="h-8 w-8">
            <GitHubLogoIcon className="h-full w-full text-neutral-700" />
          </a>
          <a href="https://twitter.com/virtu_studios" className="h-8 w-8">
            <TwitterLogoIcon className="h-full w-full text-neutral-700" />
          </a>
          <a href="https://linkedin.com/in/hartmandy" className="h-8 w-8">
            <LinkedInLogoIcon className="h-full w-full text-neutral-700" />
          </a>
          <a href="mailto:hello@mandyhartman.dev" className="h-8 w-8">
            <EnvelopeClosedIcon className="h-full w-full text-neutral-700" />
          </a>
        </div>
      </div>

      <div className="flex my-8 border-t border-b border-neutral-700">
        <p className="text-3xl font-normal my-12 ">{home.blurb}</p>
      </div>

      <div className="mb-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {home.featuredProjects.map((project: SanityDocument) => (
            <Card key={project._id} project={project} />
          ))}
        </div>

        <a
          href="/projects"
          className="text-lg mt-4 inline-flex hover:font-bold items-center"
        >
          View More <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
}
