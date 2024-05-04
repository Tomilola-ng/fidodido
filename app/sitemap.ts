import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  var siteList = [
    {
      url: "https://fido.com.ng",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://fido.com.ng/about-us",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://fido.com.ng/services",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
  return [...siteList];
}
