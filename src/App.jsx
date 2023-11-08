import {useState, useEffect} from 'react';
import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SearchBar } from './components/SearchBar';
import axios from 'axios';

function App() {
  const [favorites, setFavorites] = useState([])
  const[characters, setCharacters] = useState([])
  const [myPage, setMyPage]=useState(1)

  const getAllCharacters = async() => {
  let response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${myPage}`)
  console.log('from request', response.data.results);
  setCharacters([...characters, ...response.data.results]);
  setMyPage(myPage+1);

}

useEffect(() => {
    if (myPage < 43){
        getAllCharacters()
    }
}, [myPage])


  // useEffect(()=> {
  //   console.log(favorites)
  // }, [favorites])

  

  return (
    <Container id="holder">
      <Row>
        <Header />
      </Row>
      <Row>
        <SearchBar characters = {characters}/>
      </Row>
      <Row>
        <Outlet context = {{ favorites, setFavorites, characters, setCharacters}} />
      </Row>
      
    </Container>
  );
}

export default App;
