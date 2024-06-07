import { Link } from "react-router-dom";

let linksNav = [
  {
    name: "HEADPHONES",
    categoroy: "?category=headphones",
    pages: "/headphones",
  },
  {
    name: "SPEAKERS",
    categoroy: "?category=speakers",
    pages: "/speakers",
  },
  {
    name: "EARPHONES",
    categoroy: "?category=earphones",
    pages: "/earphones",
  },
];

function NavbarLinks() {
  return linksNav.map((link) => {
    return (
      <>
        <li className=" hover:text-[#D87D4A] focus:text-[#D87D4A] active:text-[#D87D4A]">
          <Link to={`/pages${link.pages}`}>{link.name}</Link>
        </li>
      </>
    );
  });
}

export default NavbarLinks;
