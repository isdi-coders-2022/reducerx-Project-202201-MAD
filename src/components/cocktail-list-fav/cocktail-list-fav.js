/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { Context } from '../../context/context';
import './cocktail-list-fav.scss';

export function CocktailListFav() {
    const { store } = useContext(Context);

    return (
        <div>
            {store.favorites ? (
                <main>
                    <h3>My Cocktails</h3>
                    <ul className="cocktail-list-fav">
                        {store.favorites.map((item) => (
                            <li
                                key={item.idDrink}
                                className="cocktail-list-fav__item"
                            >
                                <img
                                    src={item.strDrinkThumb}
                                    alt="Favorite Cocktail"
                                />
                                <p> {item.strDrink}</p>
                            </li>
                        ))}
                    </ul>
                </main>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}
