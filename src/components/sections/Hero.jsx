import { motion } from 'framer-motion'
import { school } from '../../data/school.js'
import campus from '../../assets/campus.jpeg'

const credentials = [
  {
    label: 'Established',
    value: school.established,
  },
  {
    label: 'Affiliation',
    value: school.board,
  },
  {
    label: 'Location',
    value: `${school.location.village}, ${school.location.district}, ${school.location.state}`,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
  }),
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-content pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-16 lg:pb-20">
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="font-heading font-semibold text-display-md sm:text-display-lg lg:text-display-xl text-ink text-center leading-tight"
        >
          ROSE BUD
          <br />
          ACADEMY
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.06}
          className="mt-5 font-body text-sm sm:text-base text-ink-soft text-center tracking-[0.02em]"
        >
          English Medium &middot; SEBA Curriculum &middot; Nursery to Class X
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.12}
          className="mt-2 font-body text-lg sm:text-xl text-primary text-center"
        >
          Let All The Buds Bloom
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.18}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="/contact"
            className="w-full sm:w-auto text-center font-body font-medium text-sm sm:text-base bg-primary text-white px-7 py-3.5 rounded-md shadow-card hover:shadow-card-hover hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 ease-soft"
          >
            Contact Us
          </a>
          <a
            href="/student-life"
            className="w-full sm:w-auto text-center font-body font-medium text-sm sm:text-base border border-line text-ink px-7 py-3.5 rounded-md hover:bg-primary-tint hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 ease-soft"
          >
            Explore Student Life
          </a>
        </motion.div>

        {/* Large campus image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: [0.4, 0, 0.2, 1] }}
          className="relative mt-10 sm:mt-12"
        >
          <div className="group aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl border border-line bg-primary-tint shadow-card-hover overflow-hidden">
            <img
              src={campus}
              alt="Rose Bud Academy Campus"
              className="w-full h-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        {/* Copy below image */}
        <div className="mt-10 max-w-xl mx-auto text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.32}
            className="font-body text-sm tracking-[0.08em] uppercase text-primary font-medium mb-5"
          >
            Rose Bud Academy · Assam
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.38}
            className="font-body text-base sm:text-lg text-ink-soft leading-relaxed"
          >
            Rose Bud Academy is a SEBA-affiliated school located in Boginadi,
            Lakhimpur, Assam, dedicated to providing quality education and
            nurturing young minds with care, values, and knowledge.
          </motion.p>

          {/* Credentials strip — factual, not decorative */}
          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.44}
            className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-5 border-t border-line pt-8"
          >
            {credentials.map((item) => (
              <div key={item.label} className="text-center">
                <dt className="font-body text-xs uppercase tracking-[0.06em] text-slate mb-1">
                  {item.label}
                </dt>
                <dd className="font-heading text-lg font-medium text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}

export default Hero
