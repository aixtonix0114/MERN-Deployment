import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';



export default props => {
    const [ pet, setPet ] = useState ({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res => setPet({
                ...res.data
            }))
    }, [])

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                navigate("/pets")
            })
    }

    // const likePet = (petId) => {
    //     axios.like
    // }

    return(
        <div>
            <h1> Pet Shelter </h1>
            <h4> Details about {pet.name} </h4>
            <Link to = '/pets'> Home </Link>
            <hr />
            <p />
            <p> Pet Type : {pet.type} </p>
            <p />
            <p> Description : {pet.description} </p>
            <p />
            <ul>
                <p> Skills: </p>
                <p> {pet.skill1} </p>
                <p> {pet.skill2} </p>
                <p> {pet.skill3} </p>   
            </ul>
            <br />
            <button onClick = { (e) => { deletePet(pet._id) } }> Adopt this pet! </button>
        </div>
    )
}