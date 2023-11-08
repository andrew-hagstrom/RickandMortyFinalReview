import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

const ACharacter = () => {
    const [character, setCharacter] = useState(null)
    const {id} = useParams()

    const getACharacter = async() => {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacter(response.data)
    }

    useEffect(()=>{
        getACharacter()
    },[])

    return (
        <>
            {character ? (
                <div id = 'a-character'>
                       <img src={character.image}/>
                    <ul>
                        <h1> {character.name}</h1>
                        <li>Species: {character.species}</li>
                        <li>Gender: {character.gender}</li>
                        <li>Origin: {character.origin.name}</li>
                        <li>Location: {character.location.name}</li>
                        <li>Created: {character.created}</li>
                    </ul>
                </div>
               ) : (
                null    
            )}
        </>
    );
};

export default ACharacter;