import { useState } from 'react'

const galleryImages = Object.values(
  import.meta.glob('../assets/gallery/*.{jpeg,jpg,png,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container-content">

        <div className="max-w-3xl">
          <p className="text-primary font-medium uppercase tracking-[0.08em] mb-3">
            Gallery
          </p>

          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6">
            Moments at Rose Bud Academy.
          </h1>

          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            Explore memorable moments, activities, and events from Rose Bud Academy.
          </p>
        </div>


        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="overflow-hidden rounded-lg border border-line bg-primary-tint group"
            >
              <img
                src={image}
                alt={`Rose Bud Academy gallery image ${index + 1}`}
                className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>

      </div>


      {/* Full Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="absolute top-5 right-5 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>


          <img
            src={selectedImage}
            alt="Rose Bud Academy gallery preview"
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

    </section>
  )
}

export default Gallery