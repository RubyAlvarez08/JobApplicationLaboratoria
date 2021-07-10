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
    <div>
       <SearchBar/>
        {!data ? 'cargando...' :
          data.map((data, index) => {
            return (
              <div className='card'>
                <img className='avatar' src={data.avatar_url} />
                <div className='name-pila'>{data.login}</div>
                <div className='user-name'>{data.gravatar_id }</div>
                <div className='follow'>
                  <div className='follow-info'>{data.followers} Followers </div>
                  <div className='follow-info'>{ } Following</div>
                  <div className='follow-info'>{ } Repos</div>
                </div>
              </div>
            )
          })
        }

     
    </div>
  )
}

export default App;
