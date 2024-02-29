import type { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { getImageProps } from "~/sanity/getImageProps";

type Props = {
  image: SanityImageObject;
  maxWidth: number;
  alt: string;
  loading?: HTMLImageElement["loading"];
  className?: string;
};

export function SanityImage({
  image,
  maxWidth,
  alt,
  loading = "eager",
  className,
}: Props) {
  return (
    <img
      {...getImageProps({ image, maxWidth })}
      alt={alt}
      loading={loading}
      {...{ fetchpriority: loading === "eager" ? "high" : undefined }}
      className={className}
    />
  );
}

export type AccessibleSanityImage = SanityImageObject & {
  _key: string;
  alt: string;
};
