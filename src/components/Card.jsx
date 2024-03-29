import { Link } from 'react-router-dom';
import Image from '../assets/logo5.png';

export const Card = ({ movie }) => {
  return (
    <div className="max-w-sm p-4 sm:p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-0 sm:m-2 ">
      <Link to={`/movies/${movie.id}`} className='min-w-30'>
        {/* <img className="rounded-t-lg w-20 m-4" src={Image} alt="" /> */}
        <img className="rounded-t-lg w-40 sm:w-80 rounded-lg cursor-pointer m-auto sm:m-auto" src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Image} alt="No Internet" />
      </Link>
      <div className="px-5 pt-1">
        <Link to="#">
          {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
          <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{movie.original_title}</h5>
        </Link>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
        <p className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm sm:text-l">{movie.overview}</p>
        <Link to={`/movies/${movie.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
