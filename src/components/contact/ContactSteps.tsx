import { contactSteps } from "@/configurations/contactSteps"

export default function ContactSteps() {
  return (
    <>
      <h6 className="pt-5 text-white">What happens next?</h6>
      <div className="mt-4">
        <ul className="timeline-list list-unstyled">
          {contactSteps.map((step) => {
            return (
              <li key={step.id} className="d-flex align-items-start mb-4">
                <div className="circle d-flex justify-content-center align-items-center fw-bold me-3">
                  {step.id}
                </div>
                <p className="mb-0">{step.title}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}