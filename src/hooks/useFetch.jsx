import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
    // const url =  `https://api.themoviedb.org/3${apiPath}?api_key=945a06584d09b3cc1f58449d053d4cf0`;

    // useEffect(() => {
    //     async function fetchMovies() {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         console.log(data);
    //         setData(data.results);
    //     }
    //     fetchMovies();
    // }, [url])
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [url]);

    return (
        { data }
    )
}
