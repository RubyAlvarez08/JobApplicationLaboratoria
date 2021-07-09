import React from 'react';

const Results = (props) => {

    const { users } = props;
    console.log('Repo is: ' ,users.data)

    const listUsers = user.length !== 0 ? (
        users.data.map((item) => <li>{item.name}</li>)
    ) : (
        <h1>jumm</h1>
    );
    return 
        <ul>
           {listUsers}
        </ul>
    
}
export default Results;