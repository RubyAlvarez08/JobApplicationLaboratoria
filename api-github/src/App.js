import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const url = 'https://api.github.com/users'
  const [data, setData] = useState()

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json();
    setData(responseJSON);
    console.log(responseJSON);

  }
  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div className='container-grid'>
      <SearchBar />
      {!data ? 'cargando...' :
        data.map((data,index) => {
          return (
                <div className='card' key={index}>
                  <img className='avatar'src={data.avatar_url} />
                  <div className='name-pila'>{data.login}</div>
                  <div className='user-name' ></div>
                  <div className='follow'>
                    <div>{} Followers </div>
                    <div>{ } Following</div>
                    <div >{} Repos</div>
                  </div>
                </div>

          )
        })
      }
    </div>
  )
}

export default App;
