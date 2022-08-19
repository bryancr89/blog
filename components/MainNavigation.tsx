
import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import { ENGLISH, SPANISH } from "../types/global";

export const MainNavigation = () => {
  const { content, changeLanguage } = useContext(MainContext);
  return (
    <nav className="py-3.5 pr-5 flex justify-end overflow-hidden bg-transparent z-10 text-white">
      <ul className="list-none text-primary flex max-w-8xl justify-end sm:w-1/3">
        <li className="mx-1">
          <span className="cursor-pointer" onClick={() => changeLanguage(ENGLISH)}>🇺🇸</span>
          &nbsp; - &nbsp;
          <span className="cursor-pointer" onClick={() => changeLanguage(SPANISH)}>🇪🇸</span>
        </li>
        <li className="mx-1">
          <a className="hover:text-sky-800" href="/contact">
            {content.contact}
          </a>
        </li>
      </ul>
    </nav>
  );
}
