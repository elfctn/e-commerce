const ContactCard = ({
  icon,
  emails,
  title,
  buttonText,
  isHighlighted = false,
}) => {
  // isHighlighted propuna göre stil sınıflarını belirledm
  const cardClasses = isHighlighted
    ? "bg-[#252B42] text-white py-12 px-8"
    : "bg-white py-8 px-8";

  const titleClasses = isHighlighted ? "text-white" : "text-[#252B42]";

  const emailClasses = isHighlighted ? "text-white" : "text-[#737373]";

  const buttonClasses = isHighlighted
    ? "border-white text-white hover:bg-white hover:text-[#252B42]"
    : "border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white";

  return (
    <div
      className={`text-center flex flex-col items-center rounded-lg shadow-sm ${cardClasses}`}
    >
      <div className="mb-4">{icon}</div>
      <div className="mb-4">
        {emails.map((email, index) => (
          <p key={index} className={`font-bold ${emailClasses}`}>
            {email}
          </p>
        ))}
      </div>
      <h5 className={`text-base font-bold mb-4 ${titleClasses}`}>{title}</h5>
      <button
        className={`border-2 font-bold rounded-full px-6 py-3 transition-colors ${buttonClasses}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ContactCard;
