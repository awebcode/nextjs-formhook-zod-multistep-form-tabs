import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    
    return [
        {
            url: 'https://example.com',
            lastModified: '2021-01-01',
            changeFrequency: 'weekly',
            priority: 0.5, 
            alternates: {
                languages: {
                    'en': '/en',
                    'fr': '/fr'
                }
            }
        },
    ]
}