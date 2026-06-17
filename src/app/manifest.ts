import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sparta Escala Operacional',
    short_name: 'Sparta Escala',
    description: 'Gestão inteligente de escalas para controle de acesso.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0c08',
    theme_color: '#d9b341',
    icons: [
      {
        src: 'https://picsum.photos/seed/sparta-pwa/192/192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://picsum.photos/seed/sparta-pwa/512/512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
