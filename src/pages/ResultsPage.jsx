import { useState, useEffect } from "react";
import { useParams } from'react-router-dom';
import axios from "axios";
import CharCard from "../components/CharCard";
import { useOutletContext } from "react-router-dom";  

const ResultsPage = () => {
    const {id} = useParams()
    const [searchChar, setSearchChar] = useState("")
    const {favorites, setFavorites, characters, setCharacters} = useOutletContext()
    

    const getSearchCharacter = async() => {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setSearchChar(response.data)
    }

    useEffect(()=>{
        getSearchCharacter()
    },[])

    return(
        <CharCard 
            name ={ searchChar.name}
            image = {searchChar.image}
            key={searchChar.id}
            id ={searchChar.id}
            favorites={favorites}
            setFavorites={setFavorites}
        />
    )
}


export default ResultsPage;