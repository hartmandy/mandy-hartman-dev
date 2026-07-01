// Things I've built.
//
// Logos live in this folder, next to this file. Drop a square png here
// (looks best square, e.g. 512x512), import it at the top like the two
// below, then use the imported name as the `logo` value.
//
// To add a project, copy one of the objects below and fill it in:
//   - logo:        the imported logo image (see imports at the top).
//   - title:       the app or product name.
//   - description: one short sentence about what it does.
//   - platforms:   the platforms it's available on. Each entry has a `name`
//                  ("iOS", "Android", or "Web") and an optional `url`. If a
//                  url is provided the platform becomes a clickable link
//                  (App Store, Play Store, or website); otherwise it's shown
//                  as plain text.

import vinylLogo from "./vinyl.png";
import creativeLogo from "./creative.png";
import waldenLogo from "./walden.jpeg";
import brambleLogo from "./bramble.jpeg";
import juniperLogo from "./juniper.png";
import owenLogo from "./owen.png";
import sciLogo from "./sci.png";
import bmcLogo from "./bmc.png";

export type Platform = {
  name: "iOS" | "Android" | "Web" | "Coming Soon";
  url?: string;
};

export type Project = {
  logo: string;
  title: string;
  description: string;
  platforms: Platform[];
};

export const projects: Project[] = [
  {
    logo: vinylLogo,
    title: "Vinyl Exchange",
    description: "A marketplace for buying and selling vinyl records.",
    platforms: [
      { name: "Web", url: "https://vinyl.exchange" },
    ],
  },
  {
    logo: creativeLogo,
    title: "Creative Habit",
    description: "A place to store inspiration and ideas.",
    platforms: [
      // { name: "iOS", url: "https://apps.apple.com/" },
      // { name: "Android", url: "https://play.google.com/store" },
      { name: "Coming Soon" },
    ],
  },
  {
    logo: waldenLogo,
    title: "Walden",
    description: "Project management built on ShapeUp methodology.",
    platforms: [
      { name: "Web", url: "https://walden.so/" },
    ],
  },
  {
    logo: brambleLogo,
    title: "Bramble",
    description: "Wildlife rehabilitation patient management.",
    platforms: [
      { name: "iOS", url: "https://apps.apple.com/us/app/bramble-wildlife-rehab/id6752569971" },
      { name: "Android", url: "https://play.google.com/store/apps/details?id=com.rehabreach" },
      { name: "Web", url: "https://bramblerehab.com/" },
    ],
  },
  {
    logo: juniperLogo,
    title: "Juniper",
    description: "Wikis for wildlife rehabilitation.",
    platforms: [
    { name: "Web", url: "https://juniper.wiki/" },
    ],
  },
  {
    logo: owenLogo,
    title: "Owen",
    description: "Pet care management.",
    platforms: [
    { name: "iOS", url: "https://apps.apple.com/us/app/owen-pet-care/id6747727416" },
    { name: "Android", url: "https://play.google.com/store/apps/details?id=com.pawprofileapp" },
    ],
  },
  {
    logo: sciLogo,
    title: "SCI",
    description: "Sports card investment tracking.",
    platforms: [
    { name: "iOS", url: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://apps.apple.com/us/app/sports-card-investor/id1533690124&ved=2ahUKEwixurD5w7GVAxVK2MkDHeF4DrEQFnoECC0QAQ&usg=AOvVaw3iDjsfPGRC69ifQcDexIYN" },
    { name: "Android", url: "https://play.google.com/store/apps/details?id=com.pawprofileapp" },
    ],
  },
  {
    logo: bmcLogo,
    title: "BMC Yearbook",
    description: "Digital archive for Black Mountain College.",
    platforms: [
    { name: "Web", url: "https://bmcyearbook.org/" },
    ],
  },
];
