export function Header() {
    return (
        <>
            <h1 className="header-h1">Cocktails!</h1>
            <img
                src="../../public/assets/cocktail3.png"
                alt="Neon cocktail logo"
            />
            <img src="" alt="Hamburgesa de menu" />
            <nav className="desktop-nav">
                <ul className="desktop-nav__menu">
                    <li>Favorites</li>
                    <li>Home</li>
                </ul>
            </nav>
        </>
    );
}
