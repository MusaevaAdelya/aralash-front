import { Link } from "react-router-dom";

function Button({ children, className, isLink=false, to, onClickHandler }) {
  return (
    isLink ? (
      <Link to={to} className={`inline-block ${className}`}>
        {children}
      </Link>
    ) : (
      <button type="button" className={className} onClick={onClickHandler}>
        {children}
      </button>
    )
  );
}

export default Button;
