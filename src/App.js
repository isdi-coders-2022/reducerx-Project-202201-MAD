import './App.scss';
import { Footer } from './components/footer';
import { Header } from './components/header/header';

function App() {
    return (
        <div className="App">
            <Header />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
export default App;
