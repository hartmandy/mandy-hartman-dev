import groq from "groq";

export const HOME_QUERY = groq`*[_type == "home"][0]{
    _id,
    title,
    subtitle,
    blurb,
    mainImage,
    featuredProjects[] -> {
      _id,
      title,
      projectWebsite,
      mainImage,
      "categories": categories[] -> {
        _id,
        title
      },
      "post": post -> {
        _id,
        title,
        slug,
        blurb
      }
    }
  }`;

export const BLOGS_QUERY = groq`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    blurb,
    mainImage,
    slug
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

export const PORTFOLIO_QUERY = groq`*[_type == "portfolio"] {
    _id,
    title,
    blurb,
    mainImage,
    "post": post->{
      _id,
      slug,
    }
  }`;
