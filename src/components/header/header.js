import './header-style.scss';
import { useState } from 'react';
import { slide as MenuSlide } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { Menu } from './menu';

export function Header({ menuOptions }) {
    const [isOpen, setOpen] = useState(false);

    // const toggledBurger = () => {
    //     console.log(isOpen);
    //     setOpen(!isOpen);
    // };

    return (
        <header className="header" id="headerID">
            <h1 className="header-h1">Cocktails!</h1>
            <div className="header-images">
                <img
                    className="header-img"
                    src="/assets/cocktail3.png"
                    alt="Neon cocktail logo"
                />
                <div className="header-menu-icon">
                    <Hamburger
                        toggled={isOpen}
                        onToggle={() => setOpen(!isOpen)}
                    />
                    {/* <img
                        className="header-menu-icon"
                        src="/assets/menu.png"
                        alt="Hamburgesa de menu"
                    /> */}
                    {/* <MenuSlide
                        right
                        noOverlay
                        width="200px"
                        height="50%"
                        onClick={toggleBurger}
                    >
                        {menuOptions.map((item) => (
                            <li className="menuitem" key={item.path}>
                                <Link
                                    className="menu__item-link"
                                    to={item.path}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </MenuSlide> */}
                    {isOpen &&
                        menuOptions.map((item) => (
                            <li className="menuitem" key={item.path}>
                                <Link
                                    className="menu__item-link"
                                    to={item.path}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </div>

                <Menu menuOptions={menuOptions} />
            </div>
        </header>
    );
}
