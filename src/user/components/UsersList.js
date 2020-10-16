import React from 'react';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElement/Card';
import '../../scss/UsersList.scss'


const UsersList = (props) => {

    console.log(props.items)

    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No Users found</h2>
                </Card>
            </div>
        )
    }

    return (
        <ul className="users-list" >
            {props.items.map(
                user => {
                    return (
                        <UserItem
                            key={user.id}
                            id={user.id}
                            image={user.image}
                            name={user.name}
                            placeCount={user.places}
                        />
                    )
                }
            )}
        </ul>
    )
}

export default UsersList;