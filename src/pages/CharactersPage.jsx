import { useEffect, useState } from "react"
import axios from "axios"
import CharCard from "../components/CharCard";
import { useOutletContext } from "react-router-dom";


const CharactersPage = () => {
    // const [myPage, setMyPage]=useState(1)
    // const[characters, setCharacters] = useState([])
    const {favorites, setFavorites, characters, setCharacters} = useOutletContext()

    // const getAllCharacters = async() => {
    //     let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${myPage}`)
    //     console.log('from request', response.data.results);
    //     setCharacters([...characters, ...response.data.results]);
    //     setMyPage(myPage+1);
   
    // }

    // useEffect(() => {
    //     if (myPage < 43){
    //         getAllCharacters()
    //     }
    // }, [myPage])


    return(
        <>
            <h2 style = {{margin:"3vmin"}}>Characters Page</h2>
            {characters.map((character)=>(
                <>
                <CharCard key={character.id} id={character.id} name={character.name} image={character.image} favorites = {favorites} setFavorites = {setFavorites}/>
                </>
            ))}
        
        </>
    );
};


export default CharactersPage;