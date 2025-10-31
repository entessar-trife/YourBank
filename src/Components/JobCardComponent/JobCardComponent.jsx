import "./JobCardComponent.css";
import Icon3 from "../../assets/imgs/careers_icons/icon3.png";
import formLogo from "../../assets/imgs/logo copy.png";
import { jsPDF } from "jspdf";
import { useEffect, useState } from "react";

export default function JobCardComponent({
  Title,
  location,
  Department,
  jobDescription,
  Requirements,
}) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  // useEffect to fetch user data from localStorage when the component is mounted
  useEffect(() => {
    
    const storedUser = JSON.parse(localStorage.getItem("user"));  // Retrieve the user object from localStorage
    if (storedUser) {
      setUserName(storedUser.userName || "");
      setEmail(storedUser.email || "");
    }
  }, []);

  // Function to generate the PDF application form
  const handleApply = () => {
    const doc = new jsPDF();

    doc.addImage(formLogo, "PNG", 90, 10, 40, 10);

    doc.setFontSize(20);
    doc.text("Job Application Form", 75, 30);

    doc.setFontSize(12);
    doc.text("Position: " + Title, 10, 50);
    doc.text("Location: " + location, 10, 60);
    doc.text("Department: " + Department, 10, 70);

    doc.setFontSize(16);
    doc.text("About This Job:", 10, 90);
    doc.setFontSize(12);
    doc.text(jobDescription, 10, 100, { maxWidth: 190 });

    doc.setFontSize(16);
    doc.text("Requirements & Qualifications:", 10, 140);

    doc.setFontSize(12);
    if (Array.isArray(Requirements)) {
      Requirements.forEach((req, index) => {
        doc.text(`- ${req}`, 10, 150 + index * 10);
      });
    }

    doc.setFontSize(16);
    doc.text("Applicant Information", 10, 210);

    doc.setFontSize(12);
    doc.text(`Name: ${userName || "____________________________"}`, 10, 220);
    doc.text(`Email: ${email || "____________________________"}`, 10, 230);
    doc.text("Phone: ____________________________", 10, 240);
    doc.text("Resume Link: _____________________", 10, 250);
    doc.text("Cover Letter: ____________________", 10, 260);

    // Add footer with contact information
    doc.setFontSize(10);
    doc.text(
      "hello@skillbirdge.com                                           tel:+91 91813 23 2309                                        Somewhere in the World ",
      10,
      290
    );

    // Save the PDF with a dynamically generated file name
    doc.save(`${Title}_Application_Form.pdf`);
  };

  return (
    <>
      {/* Job Head Title */}

      <div className="MR-jobCardContainer" data-aos="fade">
        <div className="MR-jobCardTitle">
          <h3 className="fs-30" data-aos="fade-right">
            {Title}
          </h3>
          <div className="MR-jobCardLocationDepartment">
            <span className="fw-300 f-18" data-aos="fade-right">
              Location: {location}
            </span>
            <span className="fw-300 f-18" data-aos="fade-right">
              Department: {Department}
            </span>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="MR-aboutReqContainer">
          <div className="MR-jobCardSubtitle" data-aos="fade-right">
            <h4 className="fs-24">About This Job</h4>
            <p className="f-18 fw-300">{jobDescription}</p>
          </div>
          <div className="MR-jobCardSubtitle" data-aos="fade-right">
            <h4 className="fs-24">Requirements & Qualifications</h4>
            <ul className="fw-300 f-18">
              {Array.isArray(Requirements) &&
                Requirements.map((req, index) => (
                  <li
                    key={index}
                    // data-aos="fade-up"
                    // data-aos-delay={index * 100}
                  >
                    <img src={Icon3} alt="icon" />
                    {req}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div>
          {/* Apply Button */}

          <button
            className="f-18"
            // data-aos="fade-right"
            // data-aos-delay="500"
            onClick={handleApply}
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}
