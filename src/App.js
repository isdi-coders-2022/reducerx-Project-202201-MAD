import './App.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header';

function App() {
    return (
        <div className="App">
            <header id="header">
                <Header />
            </header>
            <Footer />
        </div>
    );
}
export default App;
