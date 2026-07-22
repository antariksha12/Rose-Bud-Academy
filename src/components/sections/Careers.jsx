import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Button from '../ui/Button.jsx'

function Careers() {
  return (
    <section id="careers" className="border-t border-line">
      <div className="container-content py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl"
        >
          <p className="font-body text-sm tracking-[0.08em] uppercase text-primary font-medium mb-4">
            Careers
          </p>
          <h2 className="font-heading font-semibold text-display-sm sm:text-display-md text-ink">
            Join Our Team
          </h2>
          <p className="mt-5 font-body text-lg text-ink-soft leading-relaxed">
            We're always glad to hear from experienced, caring teachers who
            want to be part of Rose Bud Academy. Send us your resume and a
            short note about yourself, and we'll get in touch.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
            <Button
              as="a"
              href="mailto:rosebudacademy@gmail.com?subject=Teacher%20Application%20-%20Rose%20Bud%20Academy"
              variant="primary"
              size="lg"
            >
              <Mail size={18} strokeWidth={1.8} className="mr-2" />
              Apply via Email
            </Button>
            <Button as="a" href="tel:+919101520334" variant="outline" size="lg">
              <Phone size={18} strokeWidth={1.8} className="mr-2" />
              Call Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Careers
