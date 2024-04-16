import { FaUserCircle } from "react-icons/fa";
import { MenuLinks } from "./Navbar";

type Props = {
  showMenu: boolean;
  onClick: React.MouseEventHandler;
};

const MobileMenu = ({ showMenu, onClick }: Props) => {
  console.log(showMenu);

  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[-100%]"
      } fixed bottom-0 top-0 w-[75%] transition-all duration-200 shadow-md pt-16 px-8 bg-white dark:bg-gray-900 z-50 lg:hidden`}
    >
      <div className="card">
        {/* user section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>

        {/* menu section  */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li onClick={onClick} key={data.name}>
                <a href={data.link} className="mb-5 inline-block">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
