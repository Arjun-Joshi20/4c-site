// import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import SocialLink from "./SocialLink";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="w-full py-6 bg-orange-50">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo - Todo update to SVG */}
            <Link href="/">
              <p className="mr-16 text-2xl text-gray-900 cursor-pointer font-heading">
                4C
              </p>
            </Link>

            {/* Links (for the future) */}
            {/* <div className="text-gray-500 flex gap-12 font-medium">
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/more">
                <a>More</a>
              </Link>
            </div> */}
          </div>

          <div className="flex items-center text-lg space-x-4">
            <Link href="/contributors">
              <span className="font-semibold cursor-pointer hover:text-orange-600">
                <button
                  type="button"
                  className="btn btn-primary disabled:hidden"
                  disabled={router.asPath === "/contributors"}
                >
                  contributors
                </button>
              </span>
            </Link>
            <SocialLink
              link="https://github.com/FrancescoXX/4c-site"
              Icon={FaGithub}
              label="See the Repo"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
