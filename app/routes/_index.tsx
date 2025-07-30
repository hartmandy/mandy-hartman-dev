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
      <SanityImage
        className="w-full"
        image={home.mainImage}
        maxWidth={1536}
        alt={home.title}
      />

      <div className="flex flex-col md:flex-row my-8 ">
        <div className="flex flex-col mt-4 md:mt-8 md:w-4/5">
          <p className="text-4xl md:text-6xl">{home.subtitle}</p>
        </div>
      </div>

      <div className="flex border-b border-neutral-700">
        <p className="text-lg md:text-2xl font-normal my-4 md:my-8 md:w-4/5">
          {home.blurb}
        </p>
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
