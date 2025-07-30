import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import RenderBlock from "~/components/RenderBlocks";
import { SanityImage } from "~/components/SanityImage";
import { client } from "~/sanity/client";
import { POST_QUERY } from "~/sanity/queries";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const post = await client.fetch(POST_QUERY, params);
  return { post };
};

function formatSanityDate(datetime: string) {
  const date = new Date(datetime);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export default function Post() {
  const { post } = useLoaderData<typeof loader>();
  const formattedDate = formatSanityDate(post.publishedAt);
  const navigate = useNavigate();

  return (
    <div className="m-auto">
      <button className="mt-11 pb-8 text-lg flex items-center gap-2 hover:font-bold transition-all" onClick={() => navigate(-1)}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Go Back
      </button>
      <div className="grid gap-2 md:gap-0 md:grid-cols-2 border-t border-b border-neutral-700">
        <SanityImage
          className="w-full"
          image={post.mainImage}
          maxWidth={500}
          alt={post.title}
        />
        <div className="md:p-8 flex flex-col gap-2">
          <p className="font-semibold text-xs">{formattedDate}</p>
          <h1 className="text-3xl md:text-4xl xl:text-7xl">{post.title}</h1>
          <h2 className="text-xl md:text-2xl xl:text-4xl font-light pb-4">
            {post.blurb}
          </h2>
        </div>
      </div>

      <div className="py-8 max-w-4xl">
        <RenderBlock blocks={post.body} />
      </div>

      {post.galleryImages && post.galleryImages.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-neutral-700 mb-6">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {post.galleryImages.map((image: SanityImageObject, index: number) => (
              <div key={index}>
                <SanityImage
                  className="w-full object-cover h-64 rounded-lg border border-neutral-700 grayscale hover:grayscale-0 transition-all duration-300"
                  image={image}
                  maxWidth={600}
                  alt={`Gallery Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
