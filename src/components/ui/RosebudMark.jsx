/**
 * RosebudMark
 * Renders the Rose Bud Academy logo (public/rba.svg).
 * Kept as a small wrapper component (same API as before) so callers
 * like Navbar.jsx don't need to change — className still controls sizing.
 */
function RosebudMark({ className = 'w-7 h-7' }) {
  return (
    <img
      src="/rba.svg"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
    />
  )
}

export default RosebudMark
