function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111827] py-12 text-white">
      <div className="container-content">
        <div className="grid gap-8 sm:grid-cols-2">
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
              Contact
            </h3>

            <p className="text-white/70 leading-relaxed break-words">
              Boginadi, Lakhimpur, Assam
              <br />
              Phone: 9101520334
              <br />
              Email: rosebudacademy@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          © 2026 Rose Bud Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer