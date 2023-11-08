import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import NotFoundPage from './pages/NotFoundPage';
import ACharacter from './pages/ACharacterPage';
import FavoritesPage from './pages/FavoritesPage';
import ResultsPage from './pages/ResultsPage';


const router = createBrowserRouter([
    {
        path:'/', 
        element: <App/>, 
        children: [
            {
                index: true, 
                element: <HomePage/>
            },
            {
                path: 'about/', 
                element: <AboutPage/>
            },
            {
                path: 'characters/', 
                element: <CharactersPage/>
            },
            {
                path: 'character/:id/', 
                element: <ACharacter />
            },
            {
                path: 'favorites/', 
                element: <FavoritesPage />
            },
            {
                path: 'results/:id', 
                element: <ResultsPage />
            }
        ], 
        errorElement: <NotFoundPage/>
    }     
]);

export default router;