import React from 'react';
import UserList from '../components/UsersList';



const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'waichun',
        image: 'https://picsum.photos/id/237/200/300',
        places: 3
    }
    ]


    return (
        <div>
            <UserList items={USERS} />
        </div>
    )
}

export default Users;
