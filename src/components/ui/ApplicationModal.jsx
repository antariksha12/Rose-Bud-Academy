import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { X } from 'lucide-react'
import Button from './Button.jsx'

// TODO: replace with your own EmailJS credentials (emailjs.com dashboard)
const EMAILJS_SERVICE_ID = 'service_9alsc7h'
const EMAILJS_TEMPLATE_ID = 'template_4mv1gvj'
const EMAILJS_PUBLIC_KEY = 'Zs22I2OydDEAwxO81'

const SCHOOL_EMAIL = 'rosebudacademyboginadi@gmail.com'

const CLOUDINARY_CLOUD_NAME = 'szd94nrc'
const CLOUDINARY_UPLOAD_PRESET = 'rosebud_documents'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  qualification: '',
  role: '',
  experience: '',
  message: '',
  aadhaarCard: null,
  panCard: null,
  qualificationCertificate: null,
  experienceCertificate: null,
}

const QUALIFICATION_OPTIONS = ['B.Ed', 'D.El.Ed', 'Graduation', 'Post Graduation', 'Other']

const ROLE_OPTIONS = [
  'Primary Teacher',
  'Mathematics Teacher',
  'Science Teacher',
  'English Teacher',
  'Assamese Teacher',
  'Hindi Teacher',
  'Social Science Teacher',
  'Computer Teacher',
  'Support Staff',
  'Other',
]

const EXPERIENCE_OPTIONS = ['Fresher', 'Less than 1 year', '1-3 years', '3-5 years', '5+ years']

const fieldClass =
  'mt-1.5 w-full rounded border border-line bg-white px-4 py-2.5 text-ink ' +
  'placeholder:text-slate focus:outline-none focus:border-primary transition-colors duration-200 ease-soft'

const selectClass = `${fieldClass} appearance-none`

const labelClass = 'font-body text-sm font-medium text-ink-soft'

function qualificationCertHint(qualification) {
  if (qualification === 'B.Ed' || qualification === 'D.El.Ed') {
    return 'Upload your teacher training certificate (B.Ed / D.El.Ed).'
  }
  if (qualification === 'Graduation' || qualification === 'Post Graduation') {
    return 'Upload your degree certificate or final marksheet.'
  }
  return 'Upload your highest qualification certificate.'
}

async function uploadToCloudinary(file) {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
    { method: 'POST', body: formData }
  )

  if (!response.ok) {
    throw new Error('Cloudinary upload failed')
  }

  const data = await response.json()
  return data.secure_url
}

function ApplicationModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const formRef = useRef(null)

  if (!open) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setForm((prev) => ({ ...prev, [name]: files[0] || null }))
  }

  const handleClose = () => {
    onClose()
    setStatus('idle')
    setForm(initialForm)
    formRef.current?.reset()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('uploading')

    try {
      const [aadhaarUrl, panUrl, qualificationCertUrl, experienceCertUrl] = await Promise.all([
        uploadToCloudinary(form.aadhaarCard),
        uploadToCloudinary(form.panCard),
        uploadToCloudinary(form.qualificationCertificate),
        form.experienceCertificate
          ? uploadToCloudinary(form.experienceCertificate)
          : Promise.resolve(''),
      ])

      setStatus('sending')

      const templateParams = {
        to_email: SCHOOL_EMAIL,
        full_name: form.fullName,
        email: form.email,
        phone: form.phone,
        qualification: form.qualification,
        role: form.role,
        experience: form.experience,
        message: form.message,
        aadhaar_card: aadhaarUrl,
        pan_card: panUrl,
        qualification_certificate: qualificationCertUrl,
        experience_certificate: experienceCertUrl,
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
    } catch (err) {
      console.error('Application submission failed:', err)
      setStatus('error')
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-[1px]"
        onClick={handleClose}
      />

      {/* Modal panel */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-line bg-white p-8 shadow-soft">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close application form"
          className="absolute right-6 top-6 text-ink-soft hover:text-primary transition-colors duration-200 ease-soft"
        >
          <X size={22} strokeWidth={1.6} />
        </button>

        <p className="text-primary font-medium uppercase tracking-[0.08em] mb-2">
          Join Our Team
        </p>
        <h2 className="font-heading text-3xl font-semibold text-ink mb-6">
          Apply Now
        </h2>

        {status === 'success' ? (
          <div className="py-8">
            <p className="font-heading text-xl font-semibold text-ink mb-2">
              Application sent
            </p>
            <p className="text-ink-soft leading-relaxed">
              Thank you for applying to Rose Bud Academy. We've received your
              details and will get in touch with you soon.
            </p>
            <Button type="button" variant="outline" className="mt-6" onClick={handleClose}>
              Close
            </Button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="qualification">
                  Qualification *
                </label>
                <select
                  id="qualification"
                  name="qualification"
                  required
                  value={form.qualification}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">Select qualification</option>
                  {QUALIFICATION_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="role">
                  Subject / Role Applying For *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={form.role}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">Select role</option>
                  {ROLE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="experience">
                  Teaching Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={form.experience}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">Select experience</option>
                  {EXPERIENCE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="border-t border-line pt-5">
              <h3 className="font-heading text-lg font-semibold text-ink mb-1">
                Required Documents
              </h3>
              <p className="text-sm text-ink-soft mb-4">
                Fields marked <span className="text-primary">*</span> are mandatory.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="aadhaarCard">
                    Aadhaar Card <span className="text-primary">*</span>
                  </label>
                  <input
                    id="aadhaarCard"
                    name="aadhaarCard"
                    type="file"
                    accept="image/*,.pdf"
                    required
                    onChange={handleFileChange}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="panCard">
                    PAN Card <span className="text-primary">*</span>
                  </label>
                  <input
                    id="panCard"
                    name="panCard"
                    type="file"
                    accept="image/*,.pdf"
                    required
                    onChange={handleFileChange}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="qualificationCertificate">
                    Qualification Certificates <span className="text-primary">*</span>
                  </label>
                  <input
                    id="qualificationCertificate"
                    name="qualificationCertificate"
                    type="file"
                    accept="image/*,.pdf"
                    required
                    onChange={handleFileChange}
                    className={fieldClass}
                  />
                  <p className="mt-1.5 text-xs text-slate">
                    {qualificationCertHint(form.qualification)}
                  </p>
                </div>

                <div>
                  <label className={labelClass} htmlFor="experienceCertificate">
                    Experience Certificate{' '}
                    <span className="text-slate">(optional — not required for freshers)</span>
                  </label>
                  <input
                    id="experienceCertificate"
                    name="experienceCertificate"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className={fieldClass}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-600">
                Something went wrong submitting your application (uploading
                documents or sending the email). Please try again, or email
                us directly at {SCHOOL_EMAIL}.
              </p>
            )}

            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={status === 'uploading' || status === 'sending'}
              >
                {status === 'uploading'
                  ? 'Uploading documents…'
                  : status === 'sending'
                  ? 'Sending…'
                  : 'Submit Application'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ApplicationModal
