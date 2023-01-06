import { useState , useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";


const link = `https://www.omdbapi.com/?apikey=76931f95`

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    bringer(`batman`)
},[])

const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    bringer(searchTerm);
  }
};

    async function bringer(headline) {
        const arrival = await fetch (`${link}&s=${headline}`)
        const data = await arrival.json()

        setMovies(data.Search)
    }


  return (
    <div className="app">
    <h1>Filmland</h1>
    <div className="search">
    <input type="text" value={searchTerm} placeholder="Search for movies" onChange={e => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown}/>
    <img src={SearchIcon} alt="search" onClick={() => {bringer(searchTerm)}}/>
    </div>

    {
      movies?.length > 0
      ? (
        <div className="container">
        {movies.map((film) => <MovieCard robin={film}/>)}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )
    }
    </div>
      )
    }

export default App;