import type { MetadataRoute } from "next";

const routes = [
  "",
  "experience",
  "projects",
  "skills",
  "achievements",
  "resume",
  "blog",
  "gallery",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yashisrivastava.dev";
  return routes.map((route) => ({
    url: `${base}/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
