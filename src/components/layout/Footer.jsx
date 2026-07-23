import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111827] py-12 text-white">
      <div className="container-content">
        <div className="grid gap-8 sm:grid-cols-3">

          <div>
            <h2 className="font-heading text-2xl font-semibold text-white">
              Rose Bud Academy
            </h2>

            <p className="mt-3 text-white/70 leading-relaxed">
              A SEBA-affiliated English-medium school located in Boginadi,
              Lakhimpur, Assam.
            </p>
          </div>


          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-white/70">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="/about" className="hover:text-white transition">
                About
              </Link>

              <Link to="/student-life" className="hover:text-white transition">
                Student Life
              </Link>

              <Link to="/gallery" className="hover:text-white transition">
                Gallery
              </Link>

              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>


          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-3">
              Contact
            </h3>

            <p className="text-white/70 leading-relaxed break-words">
              Boginadi, Lakhimpur, Assam
              <br />
              Phone: 9101520334
              <br />
              Email: rosebudacademyboginadi@gmail.com
            </p>
          </div>

        </div>


        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-white/60">

          <span>
            © 2026 Rose Bud Academy. All rights reserved.
          </span>


          <div className="flex gap-5">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer