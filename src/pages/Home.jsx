import Hero from '../components/sections/Hero.jsx'
import WhyChoose from '../components/sections/WhyChoose.jsx'
import AcademicsPreview from '../components/sections/AcademicsPreview.jsx'
import campusBg from '../assets/images/HELO.jpeg'

function Home() {
  return (
    <>
      <Hero />

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${campusBg})` }}
      >
        <div className="absolute inset-0 bg-white/85" aria-hidden="true" />

        <div className="relative z-10">
          <WhyChoose />
          <AcademicsPreview />
        </div>
      </div>
    </>
  )
}

export default Home
