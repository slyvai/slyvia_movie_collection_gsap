import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Banner from '../assets/avengers-infinity-war-banner-4k-4c-1920x1080.jpg'


function Home() {
const [user, setUser] = useState([])
const [search, setSearch] = useState('')
const [filtered, setFiltered] = useState([])

const getMovie = async () => {
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
    
   
    <div className='banner'>
      <img src={Banner} alt="" />
      <div className='overlay'>
       <h1>Movie</h1> 
        <div className='search-bar'>
       <input type='search' placeholder='Search here...' onChange={handleSearch} value={search} style={{width: '40%', height: '30px'}}  /> <button onClick={filteredMovie}>Search</button>
       </div>
        <h2>Watch Avengers Series Here.</h2>
        <p>The Avengers are a team of superheroes appearing in comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, they first appeared in "The Avengers" #1 in 1963. The original team consisted of Iron Man, Thor, Hulk, Ant-Man, and Wasp. Over the years, the roster has included numerous other characters such as Captain America, Black Widow, Hawkeye, Vision, Scarlet Witch, and many others</p>
      </div>
    </div>
    </div>

    
    
    <div className='movie-container'>
    
      {filtered.map((movie) => {
          return (
            <div key={movie['#IMDB_ID']}>
              <img style={{width: '80%', height: '80%'}} src={movie['#IMG_POSTER']} />
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
