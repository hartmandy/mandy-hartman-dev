type MarkDef = {
  _key: string;
  _type: string;
  href: string;
};

type BlockChild = {
  text: string;
  marks: string[];
};

type Block = {
  _type: string;
  style?: string;
  children: BlockChild[];
  markDefs?: MarkDef[]; // Add this line
  alt?: string;
  caption?: string;
};

interface RenderBlockProps {
  blocks: Block[];
}

const headerClassMap: { [key: string]: string } = {
  h1: "text-4xl sm:text-3xl font-semibold my-4",
  h2: "text-3xl sm:text-2xl font-semibold my-3",
  h3: "text-2xl sm:text-xl font-semibold my-2",
  h4: "text-xl sm:text-md font-semibold my-1",
  normal: "text-lg mb-4 font-normal",
};

export default function RenderBlock({ blocks }: RenderBlockProps) {
  return blocks.map((block, index) => {
    if (block._type === "block") {
      const headerClass = headerClassMap[block.style || "normal"] || "mb-4";

      return (
        <p key={index} className={headerClass}>
          {block.children.map((child, idx) => {
            const isLink = child.marks.some((mark) =>
              block.markDefs?.some((def) => def._key === mark)
            );
            const linkMarkDef = isLink
              ? block.markDefs?.find((def) => child.marks.includes(def._key))
              : null;

            if (isLink && linkMarkDef) {
              return (
                <a
                  key={idx}
                  href={linkMarkDef.href}
                  className="underline font-semibold hover:no-underline focus:no-underline active:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {child.text}
                </a>
              );
            }

            return (
              <span
                key={idx}
                className={child.marks.includes("strong") ? "font-bold" : ""}
              >
                {child.text}
              </span>
            );
          })}
        </p>
      );
    } else {
      return null;
    }
  });
}
