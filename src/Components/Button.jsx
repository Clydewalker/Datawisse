const Button = ({
  borderColor,
  backgroundColor,
  label,
  textColor,
}) => {
  return (
    <button
      className={`px-6 py-4 bg-primary  text-white-smoke font-DMSans font-bold text-base leading-none border
         ${
           backgroundColor
             ? `${backgroundColor} ${textColor} ${borderColor}`
             : "bg-primary text-white-smoke border-primary"
         } rounded-2xl`}
    >
      {label}
    </button>
  );
};

export default Button;
