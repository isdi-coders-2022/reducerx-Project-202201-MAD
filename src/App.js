import './App.scss';
import { Footer } from './components/footer';
import { Header } from './components/header';

function App() {
    return (
        <div className="App">
            <header id="header">
                <Header />
            </header>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
export default App;
