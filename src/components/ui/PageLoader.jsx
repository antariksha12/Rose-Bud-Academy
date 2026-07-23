import RosebudMark from './RosebudMark.jsx'

function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-paper">
      <div className="text-center">
        <div className="animate-pulse">
          <RosebudMark className="w-16 h-16 mx-auto text-primary" />
        </div>

        <h1 className="mt-4 font-heading text-xl font-semibold text-ink">
          Rose Bud Academy
        </h1>

        <p className="mt-2 text-sm text-ink-soft">
          Loading...
        </p>
      </div>
    </div>
  )
}

export default PageLoader