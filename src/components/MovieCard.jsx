const MovieCard = ({robin}) => {
  return (
    <div className="movie">
    <div>
      <p>{robin.Year}</p>
    </div>

    <div>
      <img src={robin.Poster !== 'N/A' ? robin.Poster : 'https://via.placeholder.com/400'} alt={robin.Title}/>
    </div>

    <div>
      <span>{robin.Type}</span>
      <h3>{robin.Title}</h3>
    </div>
  </div>
  );
}

export default MovieCard;