import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {
    const { id } = props;
    const [ name, setName ] = useState();
    const [ type, setType ] = useState();
    const [ description, setDescription ] = useState();
    const [ skill1, setSkill1 ] = useState();
    const [ skill2, setSkill2 ] = useState();
    const [ skill3, setSkill3 ] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
        .then(res => {
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
        })
        }, [])

        const [errors, setErrors] = useState({});
        const updatePet = e => {
            e.preventDefault();
            axios.put('http://localhost:8000/api/pet/' + id, {
                name,
                type,
                description,
                skill1,
                skill2,
                skill3
            })
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                console.log(res);
                navigate('/pets')
                }
                })
        }


    return (
        <div>
            <h1> Pet Shelter </h1>
            <h2> Edit this Pet </h2>
            <br />
            <hr />
            <form onSubmit = { updatePet }>
                <p>
                    <h5> Pet Name : </h5>
                    <p />
                    <input type = 'text' placeholder = 'name' value = {name} onChange = { (e) => setName(e.target.value) } />
                    <span> {errors.name ? errors.name.message: ''} </span>
                </p>
                <p>
                    <h5> Pet Type : </h5>
                    <p />
                    <input type = 'text' placeholder = 'type' value = {type} onChange = { (e) => setType(e.target.value) } />
                    <span>{errors.type ? errors.type.message: ''}</span>
                </p>
                <p>
                    <h5> Description : </h5>
                    <p />
                    <input type = 'text' placeholder = 'description' value = {description} onChange = { (e) => setDescription(e.target.value) } />
                    <span> {errors.description ? errors.description.message: ''} </span>
                </p>
                <p>
                    <h5> Skills : </h5>
                </p>
                <p> Skill 1 : </p>
                <input type = 'text' placeholder = 'skill 1' value = {skill1} onChange = { (e) => setSkill1(e.target.value) } />
                <p> Skill 2 :</p>
                <input type = 'text' placeholder = 'skill 2' value = {skill2} onChange = { (e) => setSkill2(e.target.value) } />
                <p> Skill 3 : </p>
                <input type = 'text' placeholder = 'skill 3' value = {skill3} onChange = { (e) => setSkill3(e.target.value) } />
                <p />
                <p>
                <input type = 'submit' value='Edit Pet' /> | <Link to = '/pets'><input type = 'submit' value = 'Cancel' /></Link>
                </p>
            </form>
    </div>
    )
}