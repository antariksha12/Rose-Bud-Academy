import { FaWhatsapp } from "react-icons/fa"

import googleMapsIcon from "../assets/google-maps.webp"
function Contact() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container-content">
        <div className="max-w-3xl">
          <p className="text-primary font-medium uppercase tracking-[0.08em] mb-3">
            Contact Us
          </p>

          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6">
            Get in Touch With Rose Bud Academy.
          </h1>

          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            For admissions, enquiries, or any information about the school,
            feel free to contact us.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid md:grid-cols-2 gap-5 sm:gap-6">
          <div className="border border-line rounded-lg p-5 sm:p-6">
            <h2 className="font-heading text-xl font-semibold text-ink">
              Address
            </h2>

            <p className="mt-3 text-ink-soft">
              Boginadi, Lakhimpur, Assam
            </p>
            <a
  href="https://www.google.com/maps/search/?api=1&query=Rose+Bud+Academy+Boginadi+Lakhimpur+Assam"
  target="_blank"
  rel="noreferrer"
  className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-5 py-3 text-primary font-medium hover:bg-primary hover:text-white transition"
>
  <img
  src={googleMapsIcon}
  alt="Google Maps"
  className="w-5 h-5"
/>
Open in Google Maps
</a>
          </div>

          <div className="border border-line rounded-lg p-6">
            <h2 className="font-heading text-xl font-semibold text-ink">
              Contact Details
            </h2>

            <p className="mt-3 text-ink-soft">
              Phone: 9101520334 / 9435086752
            </p>

            <p className="mt-2 text-ink-soft break-words">
              Email: rosebudacademyboginadi@gmail.com
            </p>
            <a
               href="https://wa.me/919101520334"
               target="_blank"
              rel="noreferrer"
              className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white font-medium"
>
  <FaWhatsapp size={22} />
  WhatsApp Us
</a>
          </div>
        </div>

        {/* Map can be added here later */}
        
      </div>
    </section>
  )
}

export default Contact