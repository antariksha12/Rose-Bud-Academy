import aboutBg from '../assets/about-bg.jpeg'
import SEO from '../components/SEO.jsx'

function About() {
  return (
    <>
      <SEO
        title="About Rose Bud Academy | SEBA School in Lakhimpur Assam"
        description="Learn about Rose Bud Academy, an English-medium SEBA-affiliated school established in 2011 in Boginadi, Lakhimpur, Assam."
      />

      <section
        className="relative py-16 sm:py-20 lg:py-24 bg-white bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-primary-tint/90" />

        <div className="relative z-10 container-content">
          <div className="max-w-3xl">
            <div className="rounded-2xl border border-primary/15 bg-primary/[0.06] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] px-5 py-6 sm:px-10 sm:py-10">
              <p className="text-primary font-medium uppercase tracking-[0.08em] mb-3">
                About Us
              </p>

              <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6 sm:mb-8">
                Let All the Buds Bloom.
              </h1>

              <div className="space-y-4 sm:space-y-5">
                <p className="text-base sm:text-lg text-ink-soft leading-relaxed sm:leading-loose">
                  Established in <strong>2011</strong>, Rose Bud Academy is an
                  English-medium school affiliated with <strong>SEBA</strong>,
                  located in <strong>Boginadi, Lakhimpur, Assam</strong>. Since its
                  establishment, the school has been committed to providing quality
                  education and creating a positive learning environment where every
                  child feels valued and supported.
                </p>

                <p className="text-base sm:text-lg text-ink-soft leading-relaxed sm:leading-loose">
                  We believe that education is not only about academic achievement
                  but also about developing confidence, discipline, creativity,
                  kindness, and responsibility. Our aim is to nurture young minds
                  by encouraging curiosity, independent thinking, and a love for
                  learning.
                </p>

                <p className="text-base sm:text-lg text-ink-soft leading-relaxed sm:leading-loose">
                  At Rose Bud Academy, students are guided by dedicated teachers who
                  focus on understanding each child's unique abilities and helping
                  them grow at their own pace. Through classroom learning, cultural
                  activities, sports, and student participation opportunities, we
                  encourage children to discover their talents and build important
                  life skills.
                </p>

                <p className="text-base sm:text-lg text-ink-soft leading-relaxed sm:leading-loose">
                  The school strives to create a safe, caring, and inspiring
                  atmosphere where students can develop strong foundations for their
                  future. We believe every child has the potential to achieve great
                  things, and our mission is to provide the guidance, support, and
                  opportunities needed for every student to bloom.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About