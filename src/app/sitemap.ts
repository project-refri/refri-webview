import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://refri-webview.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://refri-webview.vercel.app/recipe',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://refri-webview.vercel.app/search',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://refri-webview.vercel.app/login',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.1,
    },
  ];
}
