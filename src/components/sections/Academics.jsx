function Academics() {
  const sections = [
    {
      title: "Early Years",
      classes: "Nursery • LKG • UKG",
      description:
        "A caring environment where young learners develop curiosity, confidence, and strong foundations through joyful learning.",
    },
    {
      title: "Primary School",
      classes: "Class 1–5",
      description:
        "Building strong academic skills, creativity, and values while encouraging students to become independent learners.",
    },
    {
      title: "Secondary School",
      classes: "Class 6–10",
      description:
        "Preparing students for academic success with quality teaching, discipline, and holistic development under the SEBA curriculum.",
    },
  ]

  return (
    <section id="academics" className="py-24 bg-paper">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="text-primary font-medium uppercase tracking-[0.08em] mb-3">
            Academics
          </p>

          <h2 className="font-heading text-4xl font-semibold text-ink mb-6">
            Learning at Every Stage
          </h2>

          <p className="text-lg text-ink-soft leading-relaxed">
            We provide English-medium education under the SEBA curriculum,
            supporting students from their earliest years through secondary
            education with a balanced approach to academics and personal growth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-line bg-white p-8 shadow-soft"
            >
              <h3 className="font-heading text-2xl font-semibold text-ink mb-3">
                {section.title}
              </h3>

              <p className="text-primary font-medium mb-4">
                {section.classes}
              </p>

              <p className="text-ink-soft leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Academics