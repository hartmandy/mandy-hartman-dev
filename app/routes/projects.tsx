import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SanityDocument } from "@sanity/client";
import PortfolioCard from "~/components/PortfolioCard";
import { client } from "~/sanity/client";
import { PORTFOLIO_QUERY } from "~/sanity/queries";

export const loader = async () => {
  const portfolioPosts = await client.fetch(PORTFOLIO_QUERY);
  return json({ portfolioPosts });
};

export default function Projects() {
  const { portfolioPosts } = useLoaderData<typeof loader>();
  console.log({ portfolioPosts });
  return (
    <div>
      <h1 className="text-7xl mt-11 mb-8 pb-8 border-b border-neutral-700">
        Projects
      </h1>

      <div className="mb-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioPosts.map((post: SanityDocument) => (
            <PortfolioCard key={post._id} project={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
