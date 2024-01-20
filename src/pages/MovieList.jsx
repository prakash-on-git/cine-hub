import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const MovieList = ({apiPath, title}) => {

  useUpdateTitle(`${title}`);


  const {data:movies} = useFetch(apiPath);

  return (
    <main className=''>
      <div className="text-3xl">
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-evenly flex-wrap all-devices:justify-evenly">
            { movies.map((movie)=>(
              <Card key={movie.id} movie={movie}/>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
