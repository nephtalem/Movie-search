import React from 'react'
import { Geners } from './Geners'
import { MovieCard } from './MovieCard'

export const SearchMovies = () => {

  const [query, setQuery] =   React.useState('')
  const [searchedMovies, setSearchedMovies] = React.useState([])
  const [allMovies, setAllMovies] = React.useState([])
  const [movieGeners, setMovieGeners] = React.useState([])

  var gener =[]

//  for retrieving all movies from api

  React.useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=aa833d462e31ea65094f797545b90231&language=en-US&page=1`;
    fetch(url)
      .then(response => response.json()
      .then(data => setAllMovies(data.results)))
  }, [])



  // to keep in sync between movies and moviesGeners state

  React.useEffect(() => {
    gener = searchedMovies.filter(movie => movie.backdrop_path).map(movie => {
        return <MovieCard movie = {movie} key={movie.id}/>
    })
    setMovieGeners(gener);
  }, [searchedMovies]);
  





// async function to search for movies and retrieve movies based on the given input
  const searchMovies = async (e) => {

        e.preventDefault()

        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=aa833d462e31ea65094f797545b90231&language=en-US&query=${query}&page=1&include_adult=false`;

        
        try{
            const response = await fetch(url)
            const data = await response.json()
           
            setSearchedMovies(data.results)
        }catch(err)
        {console.log(err)}

         

        
  }

// function that handles a change in input
  function handleChange(e){
        setQuery(e.target.value)
  }


  

// function that helps you find your specified genre
  function handleClick(e){
    const id = e.target.id

    if(id === 'all'){
         gener = allMovies.map(movie => {
          return <MovieCard movie = {movie} key={movie.id} />
        })
        setMovieGeners(gener)
    }
    if(id === 'action'){
      gener = allMovies.filter(movie => movie.genre_ids.includes(28)).map(movie => {
        return <MovieCard movie = {movie} key={movie.id} />})
        setMovieGeners(gener)
    }

    if(id === 'crime'){
      gener = allMovies.filter(movie => movie.genre_ids.includes(80)).map(movie => {
        return <MovieCard movie = {movie} key={movie.id} />})
        setMovieGeners(gener)
    }
    
    if(id === 'drama'){
      gener = allMovies.filter(movie => movie.genre_ids.includes(18)).map(movie => {
        return <MovieCard movie = {movie} key={movie.id} />})
        setMovieGeners(gener)
    }

    if(id === 'mystery'){
      gener = allMovies.filter(movie => movie.genre_ids.includes(9648)).map(movie => {
        return <MovieCard movie = {movie} key={movie.id} />})
        setMovieGeners(gener)
    }

    if(id === 'scifi'){
      gener = allMovies.filter(movie => movie.genre_ids.includes(878)).map(movie => {
        return <MovieCard movie = {movie} key={movie.id} />})
        setMovieGeners(gener)
    }

    if(id === 'adventure'){
      gener = allMovies.filter(movie => movie.genre_ids.includes(12)).map(movie => {
        return <MovieCard movie = {movie} key={movie.id} />})
        setMovieGeners(gener)
    }
    if(id === 'saved'){
    
      let items = [];
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        items.push(JSON.parse(localStorage.getItem(key)));
      
      }

      gener = items.map(movie => {
        return <MovieCard movie = {movie} key={movie.id} />})
        setMovieGeners(gener)
    }
  
  }

   return (
    <div className='main'>
    <Geners
      handleClick = {handleClick}
    />  
    <div className='container'>
    <div className='search-section'>
        <form className='form' onSubmit={searchMovies}>
            <label htmlFor='query' className='label'>Movie Search</label>
            <input
                className='search-input' 
                type='text'
                name='movie'
                placeholder='search movie'
                required
                onChange = {handleChange}
                value = {query}
            />
            <button className='btn' type='submit'>Search</button>
        </form>
    </div>

        <div className='card-list'>
          {movieGeners}
        </div>

      </div>
    </div>
  )

}
