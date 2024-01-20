import { Link } from 'react-router-dom'
import Logo from '../assets/logo5.png'
// import { useEffect } from 'react'
import { useUpdateTitle } from '../hooks/useUpdateTitle'

export const PageNotFound = () => {

  useUpdateTitle("Not Found ⁚ ( ");

  return (
    <main>
      <section className="flex flex-col justify-center">
        <div className="flex flex-col items-center text-xl my-4 dark:text-gray-100 sm:text-4xl">
          <p className='m-0 sm:m-8'>404, Oops! page not found</p>
          <img src={Logo} alt='404 not found' className='w-40 m-20' />
          <Link to="/">
            <button className='bg-gradient-to-r from-orange-100 via-orange-300 to-orange-500 p-2 rounded-lg'>🦥Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
// Tip you can make button a component also