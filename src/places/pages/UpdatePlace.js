import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
} from '../../shared/util/Validator';
import './PlaceForm.css';


const UpdatePlace = (props) => {

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
            title: 'Empire state building',
            description: "testing 123",
            imageUrl: "https://cdn.vox-cdn.com/thumbor/JrYpHTzbE9qSu85id9CSkQhs7dM=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65018226/151006_19_00_22_5DSR9489.0.jpg",
            address: "20 W 34th St, New York, NY 10001, United States",
            location: {
                lat: 40.7484405,
                lng: -73.9878531
            },
            creator: 'u2'
        }
    ]

    const placeId = useParams().placeId;
    const identifiedPlace = dummyPlaces.find(p => p.id === placeId);

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2> No places found with this ID</h2>
            </div>
        )
    }


    return (
        <form className="place-form">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={() => {

                }}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (at least 5 characters)."
                onInput={() => {

                }}
                value={identifiedPlace.description}
                valid={true}
            />

            <Button type="submit" disabled={true}>
                UPDATE PLACE
            </Button>

        </form>
    )
}


export default UpdatePlace;