import { useOutlet, useOutletContext } from "react-router-dom";

import CharCard from "../components/CharCard";



const FavoritesPage = () => {
    const {favorites, setFavorites} = useOutletContext()
    return(
        <>
            <h2>Favorites</h2>
            {favorites.map((favorite)=>(
                <CharCard
                key={favorite.id}
                id={favorite.id}
                name={favorite.name}
                image={favorite.image}
                favorites={favorites}
                setFavorites={setFavorites}
                />
            ))}
        </>
    )
}

export default FavoritesPage;