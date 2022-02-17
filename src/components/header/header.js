import './header-style.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { Menu } from './menu';
import { LoginButton } from '../auth0/LoginButton';
import { LogoutButton } from '../auth0/LogOut';
import { Profile } from '../auth0/UserInfo';

export function Header({ menuOptions }) {
    const { isAuthenticated } = useAuth0();

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
                {isAuthenticated ? (
                    <>
                        <LogoutButton /> <Profile />
                    </>
                ) : (
                    <LoginButton />
                )}

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
