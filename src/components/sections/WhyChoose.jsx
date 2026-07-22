function WhyChoose() {
  const features = [
    {
      title: "Quality Education",
      description: "Building strong academic foundations through the SEBA curriculum.",
    },
    {
      title: "English Medium Learning",
      description: "Helping students develop communication skills and confidence.",
    },
    {
      title: "Experienced Guidance",
      description: "Teachers supporting every student's learning journey.",
    },
    {
      title: "Values & Discipline",
      description: "Encouraging responsibility, respect, and good character.",
    },
    {
      title: "Holistic Development",
      description: "Supporting academic, creative, and personal growth.",
    },
    {
      title: "Safe Learning Environment",
      description: "Creating a caring atmosphere where students feel supported.",
    },
  ]

  return (
    <section id="why-choose" className="py-16 sm:py-20 lg:py-24">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="text-primary font-medium uppercase tracking-[0.08em] mb-3">
            Why Choose Us
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6">
            Helping Every Child Grow with Confidence
          </h2>

          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            At Rose Bud Academy, we believe learning goes beyond the classroom.
            Our goal is to create a safe, supportive, and inspiring environment
            where students develop knowledge, character, and confidence.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-soft"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {feature.title}
              </h3>

              <p className="text-ink-soft leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
