import './App.scss';
import { CocktailList } from './components/cocktail-list/cocktail-list';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

function App() {
    return (
        <div className="App">
            <Header />

            <CocktailList />

            <Footer />
        </div>
    );
}
export default App;
