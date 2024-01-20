import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data:movies} = useFetch(apiPath, queryTerm);

  useUpdateTitle(`Search: ${queryTerm}`);

  return (
    <main className=''>
      <section><p className="text-3xl text-gray-700 dark:text-white">{movies.length===0 ? `No result for :${queryTerm}`:`Results for : ${queryTerm}`}</p></section>
      <div className="text-3xl">
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap">
            { movies.map((movie)=>(
              <Card key={movie.id} movie={movie}/>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
