import { useState } from 'react'
import Button from '../components/ui/Button.jsx'
import ApplicationModal from '../components/ui/ApplicationModal.jsx'

function JoinOurTeam() {
  const [modalOpen, setModalOpen] = useState(false)

  const sections = [
    {
      title: "Teaching Opportunities",
      description:
        "We look for dedicated educators across primary and secondary levels who are committed to helping students learn, grow, and succeed under the SEBA curriculum.",
    },
    {
      title: "Why Work With Us",
      description:
        "A supportive school community, opportunities to make a real impact on young learners, and an environment that values care, discipline, and growth.",
    },
    {
      title: "Contact & Apply",
      description:
        "Interested candidates can reach out to us directly to learn about current openings and share their details for consideration.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-paper">
      <div className="container-content">
        <div className="max-w-3xl">
          <p className="text-primary font-medium uppercase tracking-[0.08em] mb-3">
            Join Our Team
          </p>

          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6">
            Join Our Team
          </h1>

          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            We welcome passionate educators and staff members who want to be
            part of Rose Bud Academy and help shape the future of young
            learners.
          </p>

          <Button size="lg" className="mt-8 w-full sm:w-auto" onClick={() => setModalOpen(true)}>
            Apply Now
          </Button>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-soft"
            >
              <h2 className="font-heading text-2xl font-semibold text-ink mb-3">
                {section.title}
              </h2>

              <p className="text-ink-soft leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <Button size="lg" className="w-full sm:w-auto" onClick={() => setModalOpen(true)}>
            Apply Now
          </Button>
        </div>
      </div>

      <ApplicationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

export default JoinOurTeam
