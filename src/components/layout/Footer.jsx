import { HeartIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mx-auto container max-w-[1335px] lg:px-0 px-5  border-t-2 border-light-100 py-10 flex justify-between items-center">
        <p className="flex items-center">© 2024 Copyright, All Right Reserved, Made by Ilya Yugai with <HeartIcon className="w-8 ml-2 text-secondary"/></p>
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
