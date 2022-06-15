import { useEffect, useState } from "react"; 
import { Table } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
function App() { 
  return ( 
    <MyMovieList /> 
  ); 
} 
const MyMovieList = () => { 
  const [movies, setMovies] = useState([]); 
  useEffect( 
    () => { 
      fetch(`http://localhost:8080/movies`) 
        .then(response => response.json()) 
        .then(result => setMovies(result)) 
    }, [] 
  ) 
  return ( 
    <> 
      <h1>Star War Movies</h1> 
      <Table striped bordered hover variant="dark"> 
        <thead> 
          <tr> 
            <th>#</th> 
            <th>Title</th> 
            <th>Release Date</th> 
          </tr> 
        </thead> 
        <tbody> 
          {movies.map((movie) => ( 
            <tr> 
              <td>{movie.episode_id}</td> 
              <td>{movie.title}</td> 
              <td>{movie.release_date}</td> 
            </tr> 
          ))} 
        </tbody> 
      </Table> 
    </> 
  ); 
} 
export default App;