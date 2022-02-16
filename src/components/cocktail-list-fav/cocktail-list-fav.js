/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { Context } from '../../context/context';
import './cocktail-list-fav.scss';

export function CocktailListFav() {
    const { store } = useContext(Context);

    return (
        <div className="favorites-wrapper">
            {store.favorites ? (
                <main className="favorites-wrapper__main">
                    <h3 className="favorites-title">My Cocktails</h3>
                    <ul className="cocktail-list-fav">
                        {store.favorites.map((item) => (
                            <li
                                key={item.idDrink}
                                className="cocktail-list-fav__name"
                            >
                                <img src={item.strDrinkThumb} alt="Cocktail" />
                                <p>{item.strDrink}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="cocktails-navigation-fav">
                        <button
                            type="button"
                            className="cocktails-navigation-fav__previous"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="cocktails-navigation-fav__next"
                        >
                            Next
                        </button>
                    </div>
                </main>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}
