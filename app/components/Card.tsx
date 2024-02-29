import { SanityImage } from "~/components/SanityImage";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { SanityDocument } from "@sanity/client/csm";

export default function Card({ project }: { project: SanityDocument }) {
  return (
    <div className="bg-transparent flex flex-col p-5 border border-black">
      <SanityImage
        image={project.mainImage}
        maxWidth={500}
        alt={project.title}
        className="w-full object-cover border border-black grayscale hover:grayscale-0"
      />
      <div className="text-left mt-4">
        <h2 className="text-2xl font-bold text-neutral-700">{project.title}</h2>
        <p className="text-lg mt-2 font-normal">{project.post.blurb}</p>
        <a
          href={`/blog/${project.post.slug.current}`}
          className="text-sm mt-4 flex items-center hover:font-bold"
        >
          Read More <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
}
