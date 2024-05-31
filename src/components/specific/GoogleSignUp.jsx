import { Link } from "react-router-dom";

function GoogleSignUp() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <span className="capitalize">or sign up using</span>
      <Link to="/">
        <img src="/images/google-logo.png" alt="google logo" className="w-10" />
      </Link>
    </div>
  );
}

export default GoogleSignUp;
