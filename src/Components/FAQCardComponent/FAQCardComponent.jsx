import "./FAQCardComponent.css";

export default function FAQCardComponent({ Question, Answer, index }) {
  return (
    <>
      {/* Container for the FAQ card */}

      <div className="MR-faqCard">
        <span
          className="fs-20 fw-500"
          data-aos="fade-up"
          data-aos-delay={(index || 0) * 200}
        >
          {Question}
        </span>

        {/* Divider line between the question and answer */}
        <div className="MR-divider"></div>

        {/* Render the answer with animation and styling */}
        <p className="f-18 fw-300" data-aos="fade-up" data-aos-delay="400">
          {Answer}
        </p>
      </div>
    </>
  );
}
