import { HeartIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mx-auto container max-w-[1335px] lg:px-0 px-5  border-t-2 border-light-100 py-10 flex lg:flex-row flex-col lg:justify-between items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 mb-3 lg:mb-0 lg:flex-row">
        <p className="flex items-center text-center ">© 2024 Copyright, All Right Reserved,<br className="lg:hidden"/> Made by Ilya Yugai with</p><i class="bi bi-heart-fill text-secondary ml-3"></i>

      </div>
        <div className="space-x-7">
          <Link to="/"><i class="bi bi-twitter w-4 hover:text-secondary"></i></Link>
          <Link to="/"><i class="bi bi-facebook w-4 hover:text-secondary"></i></Link>
          <Link to="/"><i class="bi bi-instagram w-4 hover:text-secondary"></i></Link>
          <Link to="/"><i class="bi bi-linkedin w-4 hover:text-secondary"></i></Link>
        </div>
    </footer>
  );
}

export default Footer;
