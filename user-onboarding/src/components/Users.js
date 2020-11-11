import React from 'react';


const UserCard = props => {
    
    const {name, email} = props;

    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Email: {email}</p>
        </div>
    )
}

const Users = props => {

    const {users} = props;

    return(
        <div className="users">
            {users.map(user => <UserCard name={user.name} email={user.email} />)}
        </div>
    )
}

export default Users;