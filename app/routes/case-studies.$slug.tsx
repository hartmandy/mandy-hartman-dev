import {
  type MetaFunction,
  json,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCaseStudy } from "~/case-studies/manifest";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.study) {
    return [{ title: "Case Study Not Found | Mandy Hartman" }];
  }

  return [
    { title: `${data.study.title} | Case Studies | Mandy Hartman` },
    { name: "description", content: data.study.blurb },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const study = getCaseStudy(params.slug ?? "");

  if (!study) {
    throw new Response("Case study not found", { status: 404 });
  }

  const documentUrl = `/case-studies/${study.htmlPath}`;

  return json({ study, documentUrl });
};

export default function CaseStudyPage() {
  const { study, documentUrl } = useLoaderData<typeof loader>();

  return (
    <div className="m-auto">
      <a
        href="/case-studies"
        className="mt-11 flex items-center gap-2 pb-8 text-lg transition-all hover:font-bold"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Case Studies
      </a>

      <header className="border-b border-neutral-700 pb-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-neutral-600">
          Case Study
        </p>
        <h1 className="text-4xl text-neutral-800 md:text-6xl">{study.title}</h1>
        <p className="mt-4 max-w-2xl text-lg font-normal leading-relaxed">
          {study.blurb}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-neutral-700 px-4 py-2 text-sm font-bold hover:bg-neutral-700 hover:text-white"
            >
              View live project
            </a>
          ) : null}
          <a
            href={documentUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg border border-neutral-700 px-4 py-2 text-sm font-bold hover:bg-neutral-700 hover:text-white"
          >
            Open full document
          </a>
        </div>
      </header>

      <div className="my-8 overflow-hidden rounded-lg border border-neutral-700">
        <iframe
          title={study.title}
          src={documentUrl}
          className="min-h-[80vh] w-full bg-white"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  );
}
