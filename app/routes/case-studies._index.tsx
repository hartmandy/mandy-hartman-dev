import { type MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { caseStudies } from "~/case-studies/manifest";

export const meta: MetaFunction = () => {
  return [
    { title: "Case Studies | Mandy Hartman" },
    {
      name: "description",
      content:
        "Design system and product case studies. Documented HTML explorations and UI work.",
    },
  ];
};

export const loader = async () => {
  return json({ caseStudies });
};

function CaseStudyListItem({
  study,
}: {
  study: (typeof caseStudies)[number];
}) {
  return (
    <article className="grid gap-3 border-b border-neutral-700 py-5 md:grid-cols-[1fr_auto] md:items-start">
      <div>
        <h2 className="text-2xl font-bold text-neutral-800">{study.title}</h2>
        <p className="mt-2 text-lg font-normal leading-relaxed">
          {study.blurb}
        </p>
      </div>
      <div className="flex flex-col items-start gap-3 md:items-end md:justify-self-end">
        <a
          href={`/case-studies/${study.slug}`}
          className="inline-flex items-center text-lg hover:font-bold"
        >
          Case Study <ArrowRightIcon />
        </a>
        {study.liveUrl ? (
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-lg hover:font-bold"
          >
            Live Project <ArrowRightIcon />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function CaseStudiesIndex() {
  const { caseStudies } = useLoaderData<typeof loader>();

  return (
    <div className="m-auto">
      <h1 className="mt-11 mb-8 border-b border-neutral-700 pb-8 text-7xl">
        Case Studies
      </h1>
      <p className="mb-8 max-w-2xl text-lg font-normal leading-relaxed">
        Documented design systems and interface work. Self-contained HTML case
        studies you can browse in full below.
      </p>

      {caseStudies.length > 0 ? (
        <section className="my-8">
          <div className="border-t border-neutral-700">
            {caseStudies.map((study) => (
              <CaseStudyListItem key={study.slug} study={study} />
            ))}
          </div>
        </section>
      ) : (
        <div className="rounded-lg border border-neutral-700 p-5">
          <p className="text-lg font-normal">
            Case studies are coming soon. Check back for design system
            documentation and product work.
          </p>
        </div>
      )}
    </div>
  );
}
