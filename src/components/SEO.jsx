import { Helmet } from 'react-helmet-async'

function SEO({
  title = 'Rose Bud Academy | English Medium School in Boginadi, Assam',
  description = 'Rose Bud Academy is a SEBA-affiliated English-medium school located in Boginadi, Lakhimpur, Assam.',
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://rosebudacademy.org" />

      <meta
        property="og:image"
        content="https://rosebudacademy.org/og-image.jpeg"
      />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter / WhatsApp preview */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta
        name="twitter:image"
        content="https://rosebudacademy.org/og-image.jpeg"
      />
    </Helmet>
  )
}

export default SEO