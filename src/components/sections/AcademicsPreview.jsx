function AcademicsPreview() {
  const stages = ["Nursery", "LKG", "UKG", "Class 1–10"]

  const highlights = [
    {
      title: "English Medium Education",
      description: "Instruction in English to build strong communication skills.",
    },
    {
      title: "SEBA Curriculum",
      description: "A structured curriculum aligned with the SEBA board.",
    },
    {
      title: "Learning Approach",
      description: "A balanced mix of academics, creativity, and activity-based learning.",
    },
    {
      title: "Student Development",
      description: "Guided growth in confidence, discipline, and character.",
    },
  ]

  return (
    <section id="academics-preview" className="py-16 sm:py-20 lg:py-24">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="text-primary font-medium uppercase tracking-[0.08em] mb-3">
            Academics
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6">
            Building Strong Foundations for Learning
          </h2>

          <div className="flex flex-wrap gap-3">
            {stages.map((stage) => (
              <span
                key={stage}
                className="rounded-full border border-line bg-white px-5 py-2 font-body text-sm text-ink-soft"
              >
                {stage}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-soft"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {highlight.title}
              </h3>

              <p className="text-ink-soft leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicsPreview
