import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.PUBLIC_BASE_URL}/en/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.PUBLIC_BASE_URL}/th/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.PUBLIC_BASE_URL}/en/certificate`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.PUBLIC_BASE_URL}/th/certificate`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.PUBLIC_BASE_URL}/en/documentation`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.PUBLIC_BASE_URL}/th/documentation`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.PUBLIC_BASE_URL}/en/seakeen`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.PUBLIC_BASE_URL}/th/seakeen`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.PUBLIC_BASE_URL}/en/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.PUBLIC_BASE_URL}/th/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
