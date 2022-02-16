import './header-style.scss';
import { Menu } from './menu';

export function Header({ menuOptions }) {
    return (
        <header className="header">
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
                <Menu menuOptions={menuOptions} />
            </div>
        </header>
    );
}
