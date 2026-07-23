import SEO from '../components/SEO.jsx'

function Academics() {
  const classes = [
    "Nursery",
    "LKG",
    "UKG",
    "Class 1–10",
  ]

  return (
    <>
      <SEO
        title="Academics | Rose Bud Academy | Nursery to Class 10"
        description="Explore the academic programs at Rose Bud Academy, a SEBA-affiliated English-medium school offering education from Nursery to Class 10 in Boginadi, Lakhimpur, Assam."
      />

      <section className="py-24 bg-white">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="text-primary font-medium uppercase tracking-[0.08em] mb-3">
              Academics
            </p>

            <h1 className="font-heading text-4xl font-semibold text-ink mb-6">
              Building Strong Foundations for Learning.
            </h1>

            <p className="text-lg text-ink-soft leading-relaxed">
              Rose Bud Academy provides quality education through an
              English-medium curriculum affiliated with <strong>SEBA</strong>.
              We focus on developing knowledge, confidence, discipline,
              and creativity among students.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {classes.map((item) => (
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
    </>
  )
}

export default Academics