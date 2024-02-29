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

export default function Blog() {
  const { blogs } = useLoaderData<typeof loader>();
  const [first, second, ...blogList] = blogs;
  return (
    <div className="m-auto">
      <h1 className="text-7xl mt-11 mb-8 pb-8 border-b border-neutral-700">
        Blog
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div className="sm:w-full">
          <div className="border border-neutral-700 p-4">
            <SanityImage
              className="w-full"
              image={first.mainImage}
              maxWidth={700}
              alt={first.title}
            />
            <h2 className="text-4xl font-bold my-4 md:truncate">
              {first.title}
            </h2>
            <p className="text-lg font-normal md:truncate">{first.blurb}</p>
            <a
              href={`/blog/${first.slug.current}`}
              className="text-lg mt-4 inline-flex hover:font-bold items-center"
            >
              View More <ArrowRightIcon />
            </a>
          </div>
        </div>

        <div className="sm:w-full">
          <div className="border border-neutral-700 p-4">
            <SanityImage
              className="w-full"
              image={second.mainImage}
              maxWidth={700}
              alt={second.title}
            />
            <h2 className="text-4xl font-bold my-4 md:truncate">
              {second.title}
            </h2>
            <p className="text-lg font-normal md:truncate">{second.blurb}</p>
            <a
              href={`/blog/${second.slug.current}`}
              className="text-lg mt-4 inline-flex hover:font-bold items-center"
            >
              View More <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-700 my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-4 my-8">
          {blogList.map((blog: SanityDocument) => (
            <div key={blog._id}>
              <SanityImage
                image={blog.mainImage}
                maxWidth={400}
                alt={blog.title}
                className="border border-neutral-700"
              />
              <h2 className="text-2xl font-bold my-2 md:truncate">
                {blog.title}
              </h2>
              <p className="text-md font-normal md:truncate">{blog.blurb}</p>
              <a
                href={`/blog/${blog.slug.current}`}
                className="text-lg mt-4 inline-flex hover:font-bold items-center"
              >
                View More <ArrowRightIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
