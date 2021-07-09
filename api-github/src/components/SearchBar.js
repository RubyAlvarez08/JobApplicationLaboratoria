import React, { useState, useEffect } from 'react';


const SearchBar = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
              
                setData(data)
            });
    }, []);
    const setData = ({
        name,
        login,
        followers,
        following,
        public_repos,
        avatar_url
    }) => {
        setName(name);
        setUserName(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
    };
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    const handleClick = async (e) => {
        fetch(`https://api.github.com/users/${searchInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    setError(data.message);
                } else {
                    setData(data);
                    setError(null)
                }

            })
    }
    return (
    
        <div>
            <div>
                <input
                    type='text'
                    placeholder='Search'
                    value={searchInput}
                    onChange={handleChange} />
                <button
                    onClick={handleClick}
                >Search</button>
            </div>
             <div className='card'>
                <img src={avatar} />
                <div>{name}</div>
                <span>{userName}</span>
                <span>{followers} </span>
                <span>{following}</span>
                <span>{repos}</span>

            </div>
           </div>
    );

}
export default SearchBar;