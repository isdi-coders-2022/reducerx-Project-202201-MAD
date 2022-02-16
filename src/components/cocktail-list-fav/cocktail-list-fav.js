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
                    <ul className="cocktail-list">
                        {store.favorites.map((item) => (
                            <li
                                key={item.idDrink}
                                className="cocktail-list__name"
                            >
                                <div>
                                    <img
                                        src={item.strDrinkThumb}
                                        alt="Cocktail"
                                    />
                                    <p className="cocktail-title__mobile">
                                        {item.strDrink}
                                    </p>
                                </div>
                                <p className="cocktail-title__desktop">
                                    {item.strDrink}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="cocktails-navigation">
                        <button
                            type="button"
                            className="cocktails-navigation__previous"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="cocktails-navigation__next"
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
