import "./TitleComponent.css";

export default function TitleComponent({ title, desc, highlightedWords, fw }) {

  const highlightText = (text) => {
    if (!highlightedWords || highlightedWords.length === 0) return text;
    const regex = new RegExp(`(${highlightedWords.join("|")})`, "gi");
    return text.split(regex).map((part, index) =>
      highlightedWords.includes(part) ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="AM-title-comp" data-aos="fade-up" data-aos-delay="200">
      <h3 className={`title fs-48 ${fw ? "fw-400 " : "fw-500 "}`}>
        {highlightText(title)}
      </h3>
      <p className="desc fw-300 f-18">{desc}</p>
    </div>
  );
}
