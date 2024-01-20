import { Link } from "react-router-dom";
import Logo from '../assets/logo5.png';
export const Footer = () => {
  return (
    <footer className="bg-white  shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className="h-12 mr-3" alt="CineHub Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cine<span className="orangeSpan">Hub</span></span>
          </Link>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" target="_blank" className="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
              <Link to="/" target="_blank" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/" target="_blank" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
            </li>
            <li>
              <Link to="/" target="_blank" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://CineHub.com/" className="hover:underline"> CINEHUB </a>. All Rights Reserved. ॐ</span>
      </div>
    </footer>
  )
}