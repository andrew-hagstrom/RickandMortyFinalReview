import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({characters}) => {
    const [search, setSearch] = useState('')
    const [id, setID] = useState('')
    const navigate = useNavigate()

    console.log(characters)
    console.log(`Search: ${search}`)
    console.log(`Id: ${id}`)

    useEffect(() => {
        characters.map((char) => {
            if(char.name.toLowerCase().includes(search.toLowerCase())){
                setID(char.id)
                console.log(id)
            }else{
                console.log("fail")
            }
        })

    }, [search])
    

    const handleChange = (e)=> {
        let name = e.target.value
        setSearch(name)
    }
    
    // navigate (`/results/${id}/`)
    return (
    <>
        <div>
            <input type="text" list="characters" onChange={(e) => handleChange(e)} />
            <datalist id='characters'>
            {
            characters.map((char)=>(
                <option key={char.id}>{char.name}</option>
            ))
            }
            </datalist>
        </div>
        
        <Button style={{margin: "10px"}} onClick = {() => navigate (`/results/${id}`)}>Submit</Button>
    </>
    )
}
