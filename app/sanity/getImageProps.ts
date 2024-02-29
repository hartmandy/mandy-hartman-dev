import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "./projectDetails";

export const imageBuilder = imageUrlBuilder({ projectId, dataset });

const LARGEST_VIEWPORT_WIDTH = 1536;
const DEFAULT_MIN_STEP = 0.1;
const DEFAULT_WIDTH_STEPS = [400, 600, 850, 1000, 1150];
const DEFAULT_FULL_WIDTH_STEPS = [360, 414, 768, 1366, 1536];

type Props = {
  image: SanityImageObject;
  maxWidth: number | "100vw";
  minimumWidthStep?: number;
  customWidthSteps?: number[];
  sizes?: HTMLImageElement["sizes"];
};

export function getImageProps({
  image,
  maxWidth: userMaxWidth,
  minimumWidthStep = DEFAULT_MIN_STEP,
  customWidthSteps,
  sizes,
}: Props) {
  if (!image.asset._ref) {
    return {};
  }

  const maxWidth =
    typeof userMaxWidth === "number" ? userMaxWidth : LARGEST_VIEWPORT_WIDTH;
  const builder = imageBuilder.image(image).fit("max").auto("format");
  const imageDimensions = getImageDimensions(image);
  if (!imageDimensions) return {};

  const baseSizes = [
    maxWidth,
    ...(customWidthSteps ||
      (typeof userMaxWidth === "number"
        ? DEFAULT_WIDTH_STEPS
        : DEFAULT_FULL_WIDTH_STEPS)),
  ];
  const retinaSizes = getUniqueSizes(baseSizes)
    .sort((a, b) => a - b)
    .filter((size) =>
      sizeWithinImageDimensions(size, imageDimensions, maxWidth)
    )
    .filter((size, i, arr) =>
      sizeMeetsMinimumWidthStep(size, i, arr, minimumWidthStep)
    );

  return {
    src: builder.width(maxWidth).url(),
    srcSet: retinaSizes
      .map((size) => `${builder.width(size).url()} ${size}w`)
      .join(", "),
    sizes:
      userMaxWidth === "100vw"
        ? "100vw"
        : sizes || `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`,
    width: retinaSizes[0],
    height: retinaSizes[0] / imageDimensions.aspectRatio,
  };
}

function getUniqueSizes(baseSizes: number[]) {
  return Array.from(
    new Set([
      ...baseSizes,
      ...baseSizes.map((size) => size * 2),
      ...baseSizes.map((size) => size * 3),
    ])
  );
}
function sizeWithinImageDimensions(
  size: number,
  imageDimensions: Exclude<ReturnType<typeof getImageDimensions>, undefined>,
  maxWidth: number
) {
  return size <= imageDimensions.width * 1.1 && size <= maxWidth * 3;
}

function sizeMeetsMinimumWidthStep(
  size: number,
  index: number,
  arr: number[],
  minimumWidthStep: number
) {
  const nextSize = arr[index + 1];
  if (nextSize) {
    return nextSize / size > minimumWidthStep + 1;
  }

  return true;
}

export function getImageDimensions(image: SanityImageObject) {
  if (!image.asset._ref) {
    return;
  }

  const dimensions = image.asset._ref.split("-")[2];
  const [width, height] = dimensions.split("x").map(Number);

  if (!width || !height || Number.isNaN(width) || Number.isNaN(height)) {
    return;
  }

  return {
    width,
    height,
    aspectRatio: width / height,
  };
}
