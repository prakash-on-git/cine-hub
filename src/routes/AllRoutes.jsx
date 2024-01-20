import { Route, Routes } from 'react-router-dom';

// import { PageNotFound, MovieList, Search, MovieDetail } from '../pages/index';
import { PageNotFound, MovieList, Search } from '../pages/index';
import { lazy } from 'react';

const MovieDetail = lazy(() => import("../pages/MovieDetail"));

export const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path='/' element={MovieList}></Route> */}
      <Route path='/' element={<MovieList apiPath="/movie/now_playing" title="Home" />} />
      <Route path='movies/:id' element={<MovieDetail />}></Route>
      <Route path='movies/Popular' element={<MovieList apiPath="/movie/popular" title="Popular" />}></Route>
      <Route path='movies/top' element={<MovieList apiPath="/movie/top_rated" title="Top Rated" />}></Route>
      <Route path='movies/upcoming' element={<MovieList apiPath="/movie/upcoming" title="Upcoming" />}></Route>
      <Route path='search' element={<Search apiPath="/search/movie" />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  )
}

