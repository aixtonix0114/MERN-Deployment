import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from '@reach/router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default props => {
    const [ animals, setAnimals ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => setAnimals(res.data));
    }, [])

    return(
        <div>
            <h1> Pet Shelter </h1>
            <h2> These pets are looking for a home! </h2>
            <p />
            <Link to = '/pets/new'> Add a pet to the Shelter </Link>
            <p />
            <br />
            <center>
                <div className = 'table table-striped'>
                    <table>
                        <tbody>
                            <tr>
                                <th> Name </th>
                                <th> Type </th>
                                <th> <center> Actions </center> </th>
                            </tr>
                            {animals.map( pet => 
                            <tr key = {pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td> <Link to = {"/pets/" + pet._id}> <input type = 'submit' value = 'Details' /></Link> <span> | </span> <Link to = {"/pets/" + pet._id + '/edit'}><input type = 'submit' value = 'Edit' /></Link> </td>
                            </tr>
                            )}   
                        </tbody>
                    </table>
                </div>   
            </center>
        </div>
    )
}