import React, { useState, useEffect, Fragment } from 'react';
import '../index.css';


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
            .then(respuesta => respuesta.json())
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

        <Fragment>
            <h1 className='title'>Github Users</h1>
            <div className='Nav-search'>
                <input
                    type='text'
                    placeholder='User Github'
                    value={searchInput}
                    onChange={handleChange} />
                <button
                    className='btn-search'
                    onClick={handleClick}
                >Search</button>
            </div>
            {error
                ? <h1>{error}</h1>
                : (<div className='card'>
                    <img className='avatar' src={avatar} />
                    <div className='name-pila'>{name}</div>
                    <div className='user-name'>{userName}</div>
                    <div className='follow'>
                        <div className='follow-info'>{followers} Followers </div>
                        <div className='follow-info'>{following} Following</div>
                        <div className='follow-info'>{repos} Repos</div>
                    </div>
                </div>
                )}

        </Fragment>
    );

}
export default SearchBar;