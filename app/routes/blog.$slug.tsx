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
      <button className="mt-11 pb-8 text-lg" onClick={() => navigate(-1)}>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {post.galleryImages.map((image: SanityImageObject, index: number) => (
            <div key={index}>
              <SanityImage
                className="w-full object-cover h-auto"
                image={image}
                maxWidth={300}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
