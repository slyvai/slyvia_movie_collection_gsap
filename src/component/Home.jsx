import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Icon from '../assets/icons8-user-24.png'


function Home() {
const [user, setUser] = useState([])
const [search, setSearch] = useState('')
const [filtered, setFiltered] = useState([])

const getMovie = async (movieName) => {
  try {
    const response = await axios.get(`https://imdb.iamidiotareyoutoo.com/search?q=avengers`) 
  setUser(response.data.description)
  setFiltered(response.data.description)
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: 'Data has been loaded',
    timer: 2000
  })
} catch (error) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Failed to load data',
    timer: 2000
  })
}
}
  

const handleSearch = (e) => {
  setSearch(e.target.value)
}

const filteredMovie = () => {
  const filtering = user.filter((movie) => 
    movie['#TITLE'].toLowerCase().includes(search.toLowerCase())
  );
  setFiltered(filtering);
};



useEffect (() => {
  getMovie()
}, [])


useEffect(() => {
  filteredMovie();
}, [search]);


  return (
    <>
    <div className='container-title'>
    <h1>Movie</h1> 
    <input type='search' placeholder='Search' onChange={handleSearch} value={search} style={{width: '40%', height: '30px', textAlign: 'center'}}  /> <button onClick={filteredMovie} style={{height: '30px', borderRadius: '5px'}}>Search</button>
    <img src={Icon} alt="" />
    </div>
    
    
    <div className='movie-container'>
    
      {filtered.map((movie) => {
          return (
            <div key={movie['#IMDB_ID']}>
              <img style={{width: '70%', height: '70%'}} src={movie['#IMG_POSTER']} />
              <div className='text-movie'>
              <h4>{movie['#AKA']}</h4>
              <p style={{fontSize: '12px', color: '#bbb'}}>{movie['#ACTORS']}</p>
              </div>
            </div>
            
          )
        })}
    </div>
    </>
  )
}

export default Home
