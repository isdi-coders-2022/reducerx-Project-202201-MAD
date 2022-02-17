import './header-style.scss';
import { Menu } from './menu';
import { LoginButton } from '../auth0/LoginButton';

export function Header({ menuOptions }) {
    return (
        <header className="header" id="headerID">
            <h1 className="header-h1">Cocktails!</h1>
            <div className="header-images">
                <img
                    className="header-img"
                    src="/assets/cocktail3.png"
                    alt="Neon cocktail logo"
                />
                <img
                    className="header-menu-icon"
                    src="/assets/menu.png"
                    alt="Hamburgesa de menu"
                />
                <LoginButton />
                {/* <nav className="desktop-nav">
                    <ul className="desktop-nav__menu">
                        <li className="desktop-home">Home</li>
                        <li className="desktop-favourites">Favourites</li>
                    </ul>
                </nav> */}
                <Menu menuOptions={menuOptions} />
            </div>
        </header>
    );
}
