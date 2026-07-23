import { useState } from 'react'

import cultural from '../assets/student-life/cultural.jpeg'
import celebrations from '../assets/student-life/celebrations.jpeg'
import participation from '../assets/student-life/participation.jpeg'
import educationalTrip from '../assets/student-life/rang-ghar.jpeg'
import environment from '../assets/student-life/environment.jpeg'

function StudentLife() {
  const [selectedImage, setSelectedImage] = useState(null)

  const activities = [
    {
      title: "Cultural Activities",
      description:
        "Students participate in cultural programs, celebrations, and creative activities that help them express their talents and build confidence.",
      image: cultural,
    },
    {
      title: "Sports & Games",
      description:
        "Sports activities and Sports Week encourage teamwork, discipline, fitness, and a healthy competitive spirit among students.",
    },
    {
      title: "School Celebrations",
      description:
        "The school celebrates special occasions and important days such as Teacher's Day, Republic Day, Independence Day, and other memorable events.",
      image: celebrations,
    },
    {
      title: "Student Participation",
      description:
        "Students actively take part in events, performances, and activities that develop leadership and communication skills.",
      image: participation,
    },
    {
      title: "Educational Trips",
      description:
        "Educational visits and excursions give students opportunities to explore new places, learn beyond the classroom, and create lasting memories with their classmates.",
      image: educationalTrip,
    },
    {
      title: "Environmental Awareness",
      description:
        "Students participate in environmental awareness activities such as tree plantation, cleanliness drives, and nature-based programs that encourage responsibility toward the environment.",
      image: environment,
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container-content">

        <div className="max-w-3xl">
          <p className="text-primary font-medium uppercase tracking-[0.08em] mb-3">
            Student Life
          </p>

          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6">
            Learning Beyond the Classroom.
          </h1>

          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            At Rose Bud Academy, students get opportunities to explore their
            interests, participate in activities, and create memorable school
            experiences.
          </p>
        </div>


        <div className="mt-10 sm:mt-12 grid md:grid-cols-2 gap-5 sm:gap-6 items-start">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="border border-line rounded-lg p-5 sm:p-6"
            >
              <h2 className="font-heading text-2xl font-semibold text-ink">
                {activity.title}
              </h2>

              <p className="mt-3 text-ink-soft leading-relaxed">
                {activity.description}
              </p>


              {activity.image ? (
                <div
                  className={`mt-6 w-full rounded-md overflow-hidden bg-primary-tint ${
                    activity.image === participation
                      ? "h-64 sm:h-80 lg:h-[28rem]"
                      : "h-56 sm:h-64"
                  }`}
                >
                  <button
                    onClick={() => setSelectedImage(activity.image)}
                    className="w-full h-full cursor-pointer"
                  >
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className={
                        activity.image === participation
                          ? "h-full w-full object-contain"
                          : activity.image === celebrations
                          ? "h-full w-full object-cover object-[center_35%]"
                          : activity.image === environment
                          ? "h-full w-full object-cover object-[center_78%]"
                          : activity.image === educationalTrip
                          ? "h-full w-full object-cover object-[center_42%]"
                          : "h-full w-full object-cover object-top"
                      }
                    />
                  </button>
                </div>
              ) : (
                <div className="mt-6 h-40 rounded-md bg-primary-tint flex items-center justify-center text-primary/50">
                  Photo coming soon
                </div>
              )}

            </div>
          ))}
        </div>


        {/* Gallery Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/gallery"
            className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 font-body font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
          >
            View Gallery
          </a>
        </div>


      </div>


      {/* Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Student Life preview"
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  )
}

export default StudentLife