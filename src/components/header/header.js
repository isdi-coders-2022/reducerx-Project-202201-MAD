import './header-style.scss';

export function Header() {
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
                <nav className="desktop-nav">
                    <ul className="desktop-nav__menu">
                        <li>Home</li>
                        <li>Favourites</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
