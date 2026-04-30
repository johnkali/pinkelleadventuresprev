import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.pinkelleadventures.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.pinkelleadventures.com/blog',
      lastModified: new Date(),
    },
    // add blog posts dynamically later
  ]
}