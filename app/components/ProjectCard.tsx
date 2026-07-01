import type { Project } from "~/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { logo, title, description, platforms, tag } = project;

  return (
    <div className="flex flex-col rounded-lg border border-neutral-700 p-6">
      <div className="flex items-start gap-4">
        <img
          src={logo}
          alt={`${title} logo`}
          className="h-16 w-16 flex-shrink-0 rounded-2xl border border-neutral-700 object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold leading-tight text-neutral-800">
              {title}
            </h3>
            {tag ? (
              <span className="flex-shrink-0 whitespace-nowrap rounded-full border border-neutral-700 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-neutral-600">
                {tag}
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm font-normal leading-relaxed text-neutral-700">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold uppercase tracking-[0.15em] text-neutral-600">
        {platforms.map((platform) =>
          platform.url ? (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-black"
            >
              {platform.name}
            </a>
          ) : (
            <span key={platform.name}>{platform.name}</span>
          )
        )}
      </div>
    </div>
  );
}
