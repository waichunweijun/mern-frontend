import React from 'react';
import { useParams } from 'react-router-dom';


import PlaceList from '../components/PlaceList';


const dummyPlaces = [
    {
        id: 'p1',
        title: 'Empire state building',
        description: "testing 123",
        imageUrl: "https://cdn.vox-cdn.com/thumbor/JrYpHTzbE9qSu85id9CSkQhs7dM=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65018226/151006_19_00_22_5DSR9489.0.jpg",
        address: "20 W 34th St, New York, NY 10001, United States",
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p1',
        title: 'Empire state building 2',
        description: "testing 456",
        imageUrl: "https://cdn.vox-cdn.com/thumbor/JrYpHTzbE9qSu85id9CSkQhs7dM=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65018226/151006_19_00_22_5DSR9489.0.jpg",
        address: "20 W 34th St, New York, NY 10001, United States",
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    }
]

const UserPlaces = (props) => {
    const userId = useParams().userId;
    const loadedPlaces = dummyPlaces.filter(place => place.creator === userId);
    console.log(`user id here: ${userId}`);

    return (
        <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces;