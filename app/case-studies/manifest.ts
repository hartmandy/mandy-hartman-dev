export type CaseStudy = {
  slug: string;
  title: string;
  blurb: string;
  /** Path under /case-studies/, e.g. "acme/index.html" or "widgets.html" */
  htmlPath: string;
  /** Optional link to the live product or deployed site */
  liveUrl?: string;
};

/**
 * Register case studies here after adding HTML to public/case-studies/.
 *
 * Single file:  public/case-studies/my-system.html  →  htmlPath: "my-system.html"
 * With assets:  public/case-studies/my-system/index.html  →  htmlPath: "my-system/index.html"
 * Live link:    liveUrl: "https://example.com"  (optional)
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "walden-design-system",
    title: "Walden Design System",
    blurb:
      "Walden is a project management software built on the ShapeUp methodology. Launching with Virtu Studios in Summer 2026.",
    htmlPath: "walden-design-system.html",
    liveUrl: "https://walden.so",
  },
  {
    slug: "virtu-design-system",
    title: "Virtu Design System",
    blurb:
      "Virtu Studios is a software development studio that builds web and mobile applications for clients and internal projects.",
    htmlPath: "virtu-design-system.html",
    liveUrl: "https://virtu-studios.com",
  },
  {
    slug: "bmc-design-system",
    title: "BMC Yearbook Design System",
    blurb:
      "BMC Yearbook is a digital archive site for Black Mountain College histories. Launched 2023, acquired 2024.",
    htmlPath: "bmc-design-system.html",
    liveUrl: "https://bmcyearbook.org",
  },
  {
    slug: "bramble-design-system",
    title: "Bramble Design System",
    blurb:
      "Bramble is a wildlife rehabilitation tracking and management system. Available on web, iOS, and Android.",
    htmlPath: "bramble-design-system.html",
    liveUrl: "https://bramblerehab.com",
  },
  {
    slug: "juniper-design-system",
    title: "Juniper Design System",
    blurb:
      "Juniper is a wildlife rehabilitation wiki site built with Next.js and Tailwind CSS.",
    htmlPath: "juniper-design-system.html",
    liveUrl: "https://juniper.wiki",
  },
  {
    slug: "owen-design-system",
    title: "Owen Design System",
    blurb:
      "Owen is a mobile application for pet owners to track their pet's health and wellness. Available on iOS and Android.",
    htmlPath: "owen-design-system.html",
    liveUrl: "https://virtu-studios/work/owen",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
