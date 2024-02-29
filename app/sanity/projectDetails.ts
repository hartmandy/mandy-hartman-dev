// ./app/sanity/projectDetails.ts

declare global {
  interface Window {
    ENV: {
      SANITY_STUDIO_PROJECT_ID: string;
      SANITY_STUDIO_DATASET: string;
      SANITY_STUDIO_URL: string;
      // SANITY_STUDIO_STEGA_ENABLED: string;
    };
  }
}

// const {
// SANITY_STUDIO_PROJECT_ID = "mvuuqkky",
// SANITY_STUDIO_DATASET,
// SANITY_STUDIO_URL = "http://localhost:3333",
// SANITY_STUDIO_STEGA_ENABLED = false,
// } = typeof document === "undefined" ? process.env : window.ENV;

export const projectId = "mvuuqkky";
export const dataset = "production";
export const studioUrl = "http://localhost:3333";
// export const stegaEnabled = SANITY_STUDIO_STEGA_ENABLED === "true";

if (!projectId) throw new Error("Missing SANITY_STUDIO_PROJECT_ID in .env");
if (!dataset) throw new Error("Missing SANITY_STUDIO_DATASET in .env");
if (!studioUrl) throw new Error("Missing SANITY_STUDIO_URL in .env");
// if (!stegaEnabled)
//   throw new Error(`Missing SANITY_STUDIO_STEGA_ENABLED in .env`);
