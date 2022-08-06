export const MainNavigation = () => (
  <nav className="sticky top-0 py-3.5 pr-5 flex justify-end overflow-hidden bg-white">
    <ul className="list-none text-primary flex max-w-8xl justify-end w-1/3">
      <li className="mx-1"><a className="hover:text-sky-800" href="/about">About</a></li>
      <li className="mx-1"><a className="hover:text-sky-800" href="/blog">Blog</a></li>
      <li className="mx-1"><a className="hover:text-sky-800" href="/contact">Contact</a></li>
    </ul>
  </nav>
);
