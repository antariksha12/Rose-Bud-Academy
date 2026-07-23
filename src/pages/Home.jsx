import Hero from '../components/sections/Hero.jsx'
import WhyChoose from '../components/sections/WhyChoose.jsx'
import AcademicsPreview from '../components/sections/AcademicsPreview.jsx'
import campusBg from '../assets/images/HELO.jpeg'
import SEO from '../components/SEO.jsx'

function Home() {
  return (
    <>
      <SEO
        title="Rose Bud Academy | English Medium School in Boginadi, Lakhimpur"
        description="Rose Bud Academy is a SEBA-affiliated English medium school in Boginadi, Lakhimpur, Assam, providing quality education from Nursery to Class 10."
      />

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