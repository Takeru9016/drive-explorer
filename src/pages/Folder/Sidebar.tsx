import { HiLogout, HiPlus } from "react-icons/hi";
import { BiDownArrowCircle } from "react-icons/bi";

export default function Sidebar() {
  return (
    <>
      <aside
        className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Created At
                </span>
                <HiPlus />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Modified At
                </span>
                <HiPlus />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="flex-1 ml-3 whitespace-nowrap">Last Used</span>
                <HiPlus />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="flex-1 ml-3 whitespace-nowrap">Folder Size</span>
                <HiPlus />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="flex-1 ml-3 whitespace-nowrap">File Size</span>
                <HiPlus />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="flex-1 ml-3 whitespace-nowrap">File Type</span>
                <BiDownArrowCircle />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Ignore Folders
                </span>
              </div>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                <HiLogout />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
