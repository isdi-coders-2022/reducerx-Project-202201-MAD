import './App.scss';
import { CocktailList } from './components/cocktail-list/cocktail-list';
import { Footer } from './components/footer';
import { Header } from './components/header';

function App() {
    return (
        <div className="App">
            <header id="header">
                <Header />
            </header>
            <CocktailList />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
export default App;
