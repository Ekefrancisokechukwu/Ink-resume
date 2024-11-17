import Link from "next/link";
import { creepster } from "./fonts";

const Header = () => {
  return (
    <header className="shadow px-6 py-3 sticky top-0">
      <Link href={"/"} className={`text-2xl ${creepster.className}`}>
        Ink Resume
      </Link>
    </header>
  );
};
export default Header;
