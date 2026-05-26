import groq from "groq";

export const HOME_QUERY = groq`*[_type == "home"][0]{
    _id,
    title,
    subtitle,
    blurb,
    featuredPosts[] -> {
      _id,
      title,
      blurb,
      "slug": slug.current,
      publishedAt
    }
  }`;

export const BLOGS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    blurb,
    mainImage,
    "slug": slug.current,
    publishedAt
  }`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug] {
    _id,
    title,
    blurb,
    mainImage,
    galleryImages,
    slug,
    publishedAt,
    body
  }[0]`;

