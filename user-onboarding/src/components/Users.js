import React from 'react';


const UserCard = props => {

    const {user} = props;

    return (
        <div className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Date of Birth: {user.dob}</p>
            <p>Phone: {user.tel}</p>
            <p>GitHub account: {user.git}</p>
        </div>
    )
}

const Users = props => {

    const {users} = props;

    return(
        <div className="users">
            {users.map((user, i) => <UserCard key={i} user={user} />)}
        </div>
    )
}

export default Users;