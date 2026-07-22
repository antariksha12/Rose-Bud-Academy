import { school } from '../../data/school.js'
import aboutBg from '../../assets/about-bg.jpeg'
function About() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="absolute inset-0 bg-red-500/50"></div>
      <div className="relative container-content">
        <div className="max-w-3xl">
          <p className="text-primary font-medium uppercase tracking-[0.08em] mb-3">
            About Us
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6">
            {school.motto}
          </h2>

          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            Established in <strong>2011</strong>, Rose Bud Academy is an
            English-medium school affiliated with <strong>SEBA</strong>,
            located in <strong>Boginadi, Lakhimpur, Assam</strong>. Since its
            establishment, the school has been committed to providing quality
            education and creating a positive learning environment where every
            child feels valued and supported.
          </p>

          <p className="mt-6 text-base sm:text-lg text-ink-soft leading-relaxed">
            We believe that education is not only about academic achievement
            but also about developing confidence, discipline, creativity,
            kindness, and responsibility. Our aim is to nurture young minds
            by encouraging curiosity, independent thinking, and a love for
            learning.
          </p>

          <p className="mt-6 text-base sm:text-lg text-ink-soft leading-relaxed">
            At Rose Bud Academy, students are guided by dedicated teachers who
            focus on understanding each child's unique abilities and helping
            them grow at their own pace. Through classroom learning, cultural
            activities, sports, and student participation opportunities, we
            encourage children to discover their talents and build important
            life skills.
          </p>

          <p className="mt-6 text-base sm:text-lg text-ink-soft leading-relaxed">
            The school strives to create a safe, caring, and inspiring
            atmosphere where students can develop strong foundations for their
            future. We believe every child has the potential to achieve great
            things, and our mission is to provide the guidance, support, and
            opportunities needed for every student to bloom.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {[
            "Nursery",
            "LKG",
            "UKG",
            "Class 1–10",
            "English Medium",
            "SEBA",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary/20 px-5 py-2 text-sm font-medium text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About