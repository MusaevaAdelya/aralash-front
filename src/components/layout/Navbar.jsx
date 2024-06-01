import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";
import UserStatus from "./UserStatus";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  return (
    <header className="mt-10 mx-auto container max-w-[1335px] lg:px-0 px-5">
      <nav className=" flex  items-center justify-between " aria-label="Global">
        <div className="flex ">
          <NavLink to="/" >
            <Logo />
          </NavLink>
        </div>
        <div className="flex lg:hidden ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12  items-center ">
          <NavLink to="/" className="font-bold leading-6 ">
            Главная
          </NavLink>
          <NavLink to="/" className="font-bold leading-6 ">
            О нас
          </NavLink>
          <NavLink to="/" className="font-bold leading-6 ">
            Контакты
          </NavLink>
          <UserStatus />
        </Popover.Group>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink
              to="#"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Logo />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root h-full mt-6">
            <div className="flex flex-col justify-between h-full -my-6">
              <div className="py-6 space-y-2 text-2xl ">
                <NavLink
                  to="/"
                  className="block px-3 py-2 -mx-3 font-medium leading-7 rounded-lg text-dark-400 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Главная
                </NavLink>
                <NavLink
                  to="/"
                  className="block px-3 py-2 -mx-3 font-medium leading-7 rounded-lg text-dark-400 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О нас
                </NavLink>
                <NavLink
                  to="/"
                  className="block px-3 py-2 -mx-3 font-medium leading-7 rounded-lg text-dark-400 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </NavLink>
              </div>
              <div className="py-6 space-y-4 ">
                <div className="flex items-center">
                  <UserStatus />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
