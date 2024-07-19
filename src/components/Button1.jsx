// filled bg

import PropTypes from "prop-types";

const Button1 = ({
  text,
  textSize = "text-lg",
  icon = null,
  onClick = null,
  href = null,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-block ${textSize} font-medium text-white focus:outline-none`}
      href={href}
    >
      <span className="absolute inset-0 rounded-md border-2 border-black group-active:border-gray-700"></span>
      <span className="active:border-bg-gray-700 block rounded-md border-2 border-black bg-black px-2 py-2 transition-transform active:bg-gray-700 group-hover:-translate-x-1 group-hover:-translate-y-1">
        <p className="flex flex-row items-center justify-center gap-2">
          {icon} {text}
        </p>
      </span>
    </button>
  );
};

Button1.propTypes = {
  text: PropTypes.string.isRequired,
  textSize: PropTypes.string,
  icon: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Button1.defaultProps = {
  textSize: "text-lg",
  href: null,
  onClick: null,
  icon: null,
};

export default Button1;
